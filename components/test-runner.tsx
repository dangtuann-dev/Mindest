"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CORE_QUESTIONS,
  PROMPT_SCALE,
  QUESTIONS,
  SAFETY_IDS,
  SAFETY_QUESTIONS,
  SCALE_OPTIONS,
  type Question,
} from "@/data/questions";
import { AXIS_BY_KEY, POLE_TO_AXIS, type AxisPole } from "@/data/axes";
import { assessAttention, evaluateSafety, score } from "@/lib/scoring";
import {
  clearRun,
  loadRun,
  saveResult,
  saveRun,
  type RunState,
  type StoredResult,
} from "@/lib/session";
import { cn } from "@/lib/cn";
import { Brand } from "./brand";
import { ClearDataButton } from "./clear-data-button";
import { ArrowLeft, ArrowRight, Check, Clock, Heart, Lock, Phone } from "./icons";

const PAGE_SIZE = 5;

const QUESTION_MAP = new Map<number, Question>(
  QUESTIONS.map((question) => [question.id, question]),
);

function chunk<T>(items: readonly T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }
  return pages;
}

export function TestRunner() {
  const router = useRouter();
  const [run, setRun] = useState<RunState | null>(null);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const loaded = loadRun();
    if (!loaded) {
      setReady(true);
      router.replace("/");
      return;
    }
    setRun(loaded);
    setReady(true);
  }, [router]);

  const pages = useMemo(() => (run ? chunk(run.order, PAGE_SIZE) : []), [run]);
  const totalPages = pages.length;
  const pageIndex = run ? Math.min(run.page, Math.max(totalPages - 1, 0)) : 0;
  const isLast = totalPages > 0 && pageIndex === totalPages - 1;
  const coreIds = useMemo(() => pages[pageIndex] ?? [], [pages, pageIndex]);

  const pageIds = useMemo(
    () => (isLast ? [...coreIds, ...SAFETY_IDS] : coreIds),
    [coreIds, isLast],
  );

  const pending = run
    ? pageIds.filter((id) => run.answers[id] == null && !run.skipped.includes(id))
    : [];

  const processed = run
    ? run.order.filter((id) => run.answers[id] != null || run.skipped.includes(id))
        .length +
      SAFETY_IDS.filter((id) => run.answers[id] != null || run.skipped.includes(id))
        .length
    : 0;
  const totalQuestions = run ? run.order.length + SAFETY_IDS.length : 0;
  const percent =
    totalQuestions > 0
      ? Math.min(100, Math.round((processed / totalQuestions) * 100))
      : 0;

  const persist = useCallback((next: RunState) => {
    setRun(next);
    saveRun(next);
  }, []);

  const answer = useCallback(
    (id: number, value: number) => {
      if (!run) return;
      setNotice(null);
      persist({
        ...run,
        answers: { ...run.answers, [id]: value },
        skipped: run.skipped.filter((skippedId) => skippedId !== id),
      });
    },
    [run, persist],
  );

  const skip = useCallback(
    (id: number) => {
      if (!run) return;
      setNotice(null);
      if (run.skipped.includes(id)) {
        persist({ ...run, skipped: run.skipped.filter((value) => value !== id) });
        return;
      }
      const answers = { ...run.answers };
      delete answers[id];
      persist({ ...run, answers, skipped: [...run.skipped, id] });
    },
    [run, persist],
  );

  const goToPage = useCallback(
    (index: number) => {
      if (!run) return;
      const clamped = Math.max(0, Math.min(index, totalPages - 1));
      persist({ ...run, page: clamped });
      setNotice(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [run, persist, totalPages],
  );

  const finish = useCallback(
    (next: RunState) => {
      const outcome = score(next.answers);
      if (!outcome.ok) {
        const firstAxis = outcome.axes[0];
        const axisMeta = firstAxis ? AXIS_BY_KEY[firstAxis] : null;
        if (firstAxis && axisMeta) {
          const missingIdSet = new Set(
            CORE_QUESTIONS.filter(
              (question) =>
                question.pole !== "X" &&
                POLE_TO_AXIS[question.pole as AxisPole] === firstAxis &&
                next.answers[question.id] == null,
            ).map((question) => question.id),
          );
          const targetPage = pages.findIndex((ids) =>
            ids.some((id) => missingIdSet.has(id)),
          );
          setNotice(
            `Còn ${outcome.missingByAxis[firstAxis]} câu chưa trả lời liên quan đến “${axisMeta.label1} / ${axisMeta.label2}”. Bạn trả lời thêm vài câu để kết quả đủ dữ liệu nhé.`,
          );
          if (targetPage >= 0 && targetPage !== pageIndex) {
            persist({ ...next, page: targetPage });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          return;
        }
        setNotice("Bài làm chưa đủ dữ liệu. Bạn trả lời thêm một vài câu nhé.");
        return;
      }

      const durationMs = Date.now() - next.startedAt;
      const safety = evaluateSafety(next.answers);
      const attention = assessAttention(next.order, next.answers, durationMs);
      const result: StoredResult = {
        savedAt: new Date().toISOString(),
        ageGroup: next.ageGroup,
        gender: next.gender,
        code: outcome.result.code,
        axes: outcome.result.axes,
        careIndex: outcome.result.careIndex,
        careLevel: outcome.result.careLevel,
        safety,
        attention,
        durationMs,
      };
      saveResult(result);
      clearRun();
      router.push("/ket-qua");
    },
    [pages, pageIndex, persist, router],
  );

  function skipSafetyAndFinish() {
    if (!run) return;
    const corePending = run.order.filter(
      (id) => run.answers[id] == null && !run.skipped.includes(id),
    );
    if (corePending.length > 0) {
      setNotice("Bạn trả lời hoặc bỏ qua câu phía trên trước nhé.");
      return;
    }
    const answers = { ...run.answers };
    for (const id of SAFETY_IDS) delete answers[id];
    const skipped = Array.from(new Set([...run.skipped, ...SAFETY_IDS]));
    finish({ ...run, answers, skipped });
  }

  if (!ready) {
    return (
      <div className="container-page flex min-h-[60vh] items-center justify-center">
        <div className="flex items-center gap-3 text-sm text-ink-faint dark:text-cream-200/60">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-moss-300 border-t-moss-700" />
          Đang mở bài làm…
        </div>
      </div>
    );
  }

  if (!run) {
    return (
      <div className="container-page py-20">
        <div className="panel mx-auto max-w-xl p-8 text-center">
          <h1 className="text-2xl">Chưa có bài làm nào đang mở.</h1>
          <p className="mt-3 text-sm text-ink-soft dark:text-cream-200/65">
            Bài làm chỉ tồn tại trong tab này. Bạn bắt đầu lại từ phần chuẩn bị nhé.
          </p>
          <Link href="/" className="btn-primary mt-6">
            Bắt đầu
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    );
  }

  const canAdvance = pending.length === 0;

  return (
    <div className="min-h-dvh pb-32">
      <header className="sticky top-0 z-40 border-b border-ink/[0.06] bg-white/85 backdrop-blur-xl dark:border-white/[0.07] dark:bg-night-900/85">
        <div className="container-page flex h-[4.2rem] items-center justify-between gap-3">
          <Brand withTagline={false} />
          <div className="flex items-center gap-1.5">
            <span className="hidden items-center gap-1.5 text-[0.72rem] font-medium text-ink-faint sm:inline-flex dark:text-cream-200/50">
              <Lock size={13} />
              Chỉ trên tab này
            </span>
            <ClearDataButton compact className="hidden sm:inline-flex" />
            <Link href="/trang-chu" className="btn-ghost">
              Thoát
            </Link>
          </div>
        </div>
        <div className="h-1 w-full bg-ink/[0.06] dark:bg-white/[0.07]">
          <div
            className="h-full rounded-r-full bg-gradient-to-r from-moss-500 via-moss-600 to-clay-400 transition-[width] duration-500"
            style={{ width: `${percent}%` }}
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Tiến độ bài làm"
          />
        </div>
      </header>

      <main id="noi-dung" className="container-page pt-8 sm:pt-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-faint dark:text-cream-200/50">
              {isLast ? "Phần cuối" : `Trang ${pageIndex + 1} / ${totalPages}`}
            </p>
            <div className="flex items-center gap-2">
              <span className="chip">
                <Clock size={13} />
                100 câu
              </span>
              <span className="chip">
                <Check size={13} className="text-moss-600 dark:text-moss-300" />
                {processed}/{totalQuestions}
              </span>
            </div>
          </div>

          <h1 className="mt-4 text-[1.7rem] leading-tight sm:text-[2.1rem]">
            {isLast
              ? "Thêm vài câu để mình hiểu bạn hơn."
              : "Điều này giống với bạn ở mức nào?"}
          </h1>

          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-moss-200/70 bg-moss-50/70 px-4 py-3.5 text-[0.85rem] leading-relaxed text-ink-soft dark:border-moss-700/30 dark:bg-moss-900/20 dark:text-cream-200/70">
            <Heart
              size={17}
              className="mt-0.5 shrink-0 text-moss-600 dark:text-moss-300"
            />
            <p>{PROMPT_SCALE}</p>
          </div>

          {notice ? (
            <div
              role="alert"
              className="text-clay-800 mt-4 rounded-2xl border border-clay-200 bg-clay-50 px-4 py-3 text-[0.85rem] leading-relaxed dark:border-clay-700/40 dark:bg-clay-700/10 dark:text-clay-200"
            >
              {notice}
            </div>
          ) : null}

          <div className="mt-6 space-y-4">
            {coreIds.map((id, index) => {
              const question = QUESTION_MAP.get(id);
              if (!question) return null;
              return (
                <QuestionCard
                  key={id}
                  question={question}
                  position={pageIndex * PAGE_SIZE + index + 1}
                  total={run.order.length}
                  value={run.answers[id]}
                  skipped={run.skipped.includes(id)}
                  onAnswer={answer}
                  onSkip={skip}
                />
              );
            })}
          </div>

          {isLast ? (
            <>
              <div className="mt-10 rounded-4xl border border-rose-200/70 bg-gradient-to-br from-rose-50/90 to-cream-50/80 p-5 sm:p-6 dark:border-white/10 dark:from-night-800 dark:to-night-800">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-rose-200/70 text-clay-700 dark:bg-rose-500/15 dark:text-rose-300">
                    <Heart size={19} />
                  </span>
                  <div>
                    <h2 className="text-[1.05rem] font-semibold">
                      Bốn câu cuối, không tính vào kết quả.
                    </h2>
                    <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
                      Chúng chỉ giúp bạn nhìn lại xem mình có cần thêm hỗ trợ không. Bạn
                      có thể bỏ qua bất kỳ câu nào — kết quả sẽ không bị ảnh hưởng. Những
                      câu này cũng không được gửi đi đâu.
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-[0.78rem]">
                      <a
                        href="tel:111"
                        className="inline-flex items-center gap-1.5 font-semibold text-clay-700 underline decoration-clay-300 underline-offset-2 dark:text-clay-300"
                      >
                        <Phone size={14} />
                        Gọi 111
                      </a>
                      <span className="text-ink-faint dark:text-cream-200/40">
                        nếu bạn cần một người thật ngay bây giờ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {SAFETY_QUESTIONS.map((question) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    position={question.id}
                    total={SAFETY_QUESTIONS.length}
                    label="Câu an toàn"
                    value={run.answers[question.id]}
                    skipped={run.skipped.includes(question.id)}
                    onAnswer={answer}
                    onSkip={skip}
                    gentle
                  />
                ))}
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={skipSafetyAndFinish}
                  className="text-[0.8rem] font-medium text-ink-faint underline decoration-ink/20 underline-offset-4 transition hover:text-ink dark:text-cream-200/50 dark:hover:text-cream-100"
                >
                  Bỏ qua phần này và xem kết quả
                </button>
              </div>
            </>
          ) : null}

          <div
            className="sticky bottom-3 z-30 mt-8 rounded-3xl border border-ink/[0.08] bg-white/95 p-2.5 shadow-lift backdrop-blur-md dark:border-white/10 dark:bg-night-800/95"
            style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => goToPage(pageIndex - 1)}
                disabled={pageIndex === 0}
                className="btn-secondary min-h-[3rem] px-4 text-sm sm:px-5"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Quay lại</span>
              </button>
              <p className="text-center text-[0.7rem] leading-tight text-ink-faint dark:text-cream-200/45">
                {canAdvance
                  ? `${processed} / ${totalQuestions} câu`
                  : `Còn ${pending.length} câu chưa trả lời`}
              </p>
              <button
                type="button"
                onClick={() => (isLast ? finish(run) : goToPage(pageIndex + 1))}
                disabled={!canAdvance}
                className="btn-primary min-h-[3rem] px-4 text-sm sm:px-6"
              >
                {isLast ? "Xem kết quả" : "Tiếp tục"}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 text-[0.7rem] text-ink-faint sm:hidden dark:text-cream-200/40">
            <ClearDataButton compact />
          </div>
        </div>
      </main>
    </div>
  );
}

function QuestionCard({
  question,
  position,
  total,
  label,
  value,
  skipped,
  onAnswer,
  onSkip,
  gentle = false,
}: {
  question: Question;
  position: number;
  total: number;
  label?: string;
  value?: number;
  skipped: boolean;
  onAnswer: (id: number, value: number) => void;
  onSkip: (id: number) => void;
  gentle?: boolean;
}) {
  return (
    <fieldset
      className={cn(
        "rounded-4xl border bg-white/75 p-5 shadow-soft backdrop-blur-sm transition sm:p-6 dark:bg-night-800/70",
        skipped
          ? "border-ink/[0.07] opacity-70 dark:border-white/[0.08]"
          : "border-ink/[0.07] dark:border-white/[0.08]",
        gentle && "border-rose-200/60 dark:border-white/10",
      )}
    >
      <legend className="sr-only">{question.text}</legend>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-7 min-w-7 shrink-0 place-items-center rounded-full bg-moss-100 px-1 text-[0.68rem] font-bold text-moss-800 dark:bg-moss-900/40 dark:text-moss-200">
          {label ? <Heart size={13} /> : position}
        </span>
        <div>
          <p className="text-[0.98rem] font-medium leading-relaxed">{question.text}</p>
          <p className="mt-1 text-[0.68rem] text-ink-faint dark:text-cream-200/40">
            {label ?? `Câu ${position} / ${total}`}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-1 sm:gap-2.5">
        {SCALE_OPTIONS.map((option) => {
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              className="group flex cursor-pointer flex-col items-center gap-2 rounded-2xl px-0.5 pb-1 pt-1.5 text-center"
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.value}
                checked={checked}
                onChange={() => onAnswer(question.id, option.value)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-full border-2 transition duration-150 peer-focus-visible:ring-2 peer-focus-visible:ring-moss-500/60 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-white sm:h-12 sm:w-12 dark:peer-focus-visible:ring-moss-300/60 dark:peer-focus-visible:ring-offset-night-800",
                  checked
                    ? "border-moss-700 bg-moss-700 text-cream-50 shadow-[0_8px_18px_-10px_rgba(54,80,51,0.9)] dark:border-moss-300 dark:bg-moss-300 dark:text-night-900"
                    : "border-ink/20 bg-white group-hover:border-moss-400 group-hover:bg-moss-50/60 dark:border-white/25 dark:bg-white/[0.04] dark:group-hover:border-moss-500 dark:group-hover:bg-moss-900/20",
                )}
              >
                {checked ? <Check size={20} strokeWidth={2.4} /> : null}
              </span>
              <span
                className={cn(
                  "text-[0.6rem] font-semibold uppercase leading-[1.3] tracking-[0.05em] transition sm:text-[0.68rem]",
                  checked
                    ? "text-moss-800 dark:text-moss-200"
                    : "text-ink-soft group-hover:text-ink dark:text-cream-200/60 dark:group-hover:text-cream-100",
                )}
              >
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-[0.7rem] text-ink-faint dark:text-cream-200/40">
          {skipped ? "Đang bỏ qua câu này." : ""}
        </span>
        <button
          type="button"
          onClick={() => onSkip(question.id)}
          className="ml-auto rounded-full px-2 py-1 text-[0.72rem] font-medium text-ink-faint underline decoration-ink/20 underline-offset-2 transition hover:text-ink dark:text-cream-200/45 dark:hover:text-cream-100"
        >
          {skipped ? "Hoàn tác bỏ qua" : "Bỏ qua câu này"}
        </button>
      </div>
    </fieldset>
  );
}
