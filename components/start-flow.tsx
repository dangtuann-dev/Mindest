"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AGE_GROUPS,
  clearResult,
  loadRun,
  saveRun,
  type AgeGroup,
  type RunState,
} from "@/lib/session";
import { buildOrder, randomSeed } from "@/lib/random";
import { cn } from "@/lib/cn";
import { ArrowLeft, ArrowRight, Check, Clock, Lock, Phone, Shield } from "./icons";

export function StartFlow() {
  const router = useRouter();
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
  const [guardianConsent, setGuardianConsent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [existing, setExisting] = useState<RunState | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setExisting(loadRun());
  }, []);

  const needsGuardian = ageGroup === "12-15";
  const canStart = Boolean(ageGroup) && consent && (!needsGuardian || guardianConsent);

  const missing = useMemo(() => {
    if (!ageGroup) return "chọn nhóm tuổi";
    if (needsGuardian && !guardianConsent) return "xác nhận của phụ huynh/người giám hộ";
    if (!consent) return "tick đồng ý tham gia";
    return null;
  }, [ageGroup, needsGuardian, guardianConsent, consent]);

  function begin() {
    if (!canStart || !ageGroup) {
      setError("Bạn kiểm tra lại một chút thông tin bên trên nhé.");
      return;
    }
    const seed = randomSeed();
    const run: RunState = {
      ageGroup,
      guardianConsent: needsGuardian ? guardianConsent : false,
      seed,
      order: buildOrder(seed),
      answers: {},
      skipped: [],
      startedAt: Date.now(),
      page: 0,
    };
    clearResult();
    saveRun(run);
    router.push("/lam-bai");
  }

  function resume() {
    if (!existing) return;
    router.push("/lam-bai");
  }

  return (
    <main id="noi-dung" className="container-page pb-16 pt-10 sm:pt-14">
      <Link
        href="/trang-chu"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint transition hover:text-ink dark:text-cream-200/55 dark:hover:text-cream-100"
      >
        <ArrowLeft size={16} />
        Về trang chủ
      </Link>

      <div className="mx-auto mt-7 max-w-3xl">
        <span className="eyebrow">Trước khi bắt đầu</span>
        <h1 className="mt-4 text-[2.2rem] leading-[1.1] sm:text-[3rem]">
          Một chút chuẩn bị, rồi mình bắt đầu.
        </h1>
        <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
          Bài làm không có đáp án đúng. Hãy chọn điều gần với bạn nhất trong khoảng 2–4
          tuần gần đây, và nhớ rằng bạn có thể dừng bất cứ lúc nào.
        </p>

        {existing ? (
          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-honey-300/60 bg-honey-50/80 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-honey-700/30 dark:bg-honey-700/10">
            <div>
              <p className="text-honey-800 text-sm font-semibold dark:text-honey-200">
                Bạn có một bài đang làm dở.
              </p>
              <p className="mt-1 text-[0.8rem] text-ink-soft dark:text-cream-200/60">
                100 câu · {Object.keys(existing.answers).length} câu đã trả lời
              </p>
            </div>
            <button
              type="button"
              onClick={resume}
              className="btn-secondary min-h-[2.75rem] shrink-0 px-5 text-sm"
            >
              Tiếp tục bài làm
            </button>
          </div>
        ) : null}

        <div className="panel mt-8 overflow-hidden">
          <div className="flex items-start gap-4 border-b border-ink/[0.07] bg-moss-50/70 p-6 sm:p-7 dark:border-white/[0.07] dark:bg-moss-900/20">
            <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-moss-700 text-cream-50 dark:bg-moss-300 dark:text-night-900">
              <Shield size={20} />
            </span>
            <div>
              <h2 className="text-[1.05rem] font-semibold">
                Đây là công cụ để hiểu mình, không phải để kết luận về bạn.
              </h2>
              <ul className="mt-3 space-y-2 text-[0.84rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
                <li className="flex gap-2">
                  <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-moss-500" />
                  Mindest không đưa ra kết luận về sức khỏe tinh thần và không thay thế ý
                  kiến của người có chuyên môn.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-moss-500" />
                  Kết quả là một chân dung tạm thời về cách bạn đang ứng phó, và có thể
                  thay đổi theo thời gian.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-moss-500" />
                  Nếu bạn đang thấy không an toàn, hãy tìm một người lớn đáng tin hoặc gọi{" "}
                  <a
                    href="tel:111"
                    className="font-semibold text-clay-700 underline decoration-clay-300 underline-offset-2 dark:text-clay-300"
                  >
                    111
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-9 p-6 sm:p-8">
            <fieldset>
              <legend className="text-[1rem] font-semibold">
                Bạn đang ở nhóm tuổi nào?
              </legend>
              <p className="mt-1 text-[0.8rem] text-ink-faint dark:text-cream-200/50">
                Điều này giúp Mindest hiển thị lời nhắc phù hợp. Không ảnh hưởng đến kết
                quả.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {AGE_GROUPS.map((group) => {
                  const checked = ageGroup === group.value;
                  return (
                    <label
                      key={group.value}
                      className={cn(
                        "relative cursor-pointer rounded-2xl border p-4 transition",
                        checked
                          ? "border-moss-500 bg-moss-50 shadow-[0_0_0_1px_rgba(88,126,81,0.4)] dark:border-moss-400 dark:bg-moss-900/30"
                          : "border-ink/10 bg-white/50 hover:border-moss-300 hover:bg-moss-50/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-moss-600",
                      )}
                    >
                      <input
                        type="radio"
                        name="age-group"
                        value={group.value}
                        checked={checked}
                        onChange={() => setAgeGroup(group.value)}
                        className="sr-only"
                      />
                      <span className="flex items-center justify-between gap-2">
                        <span className="text-[0.95rem] font-semibold">
                          {group.label}
                        </span>
                        <span
                          className={cn(
                            "grid h-5 w-5 place-items-center rounded-full border transition",
                            checked
                              ? "border-moss-600 bg-moss-600 text-cream-50 dark:border-moss-300 dark:bg-moss-300 dark:text-night-900"
                              : "border-ink/20 dark:border-white/25",
                          )}
                          aria-hidden="true"
                        >
                          {checked ? <Check size={13} /> : null}
                        </span>
                      </span>
                      <span className="mt-1 block text-[0.72rem] leading-relaxed text-ink-faint dark:text-cream-200/50">
                        {group.note}
                      </span>
                    </label>
                  );
                })}
              </div>

              {needsGuardian ? (
                <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-2xl border border-honey-300/70 bg-honey-50/70 p-4 dark:border-honey-700/30 dark:bg-honey-700/10">
                  <input
                    type="checkbox"
                    checked={guardianConsent}
                    onChange={(event) => setGuardianConsent(event.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink/20"
                  />
                  <span className="text-[0.84rem] leading-relaxed text-ink-soft dark:text-cream-200/75">
                    Mình đã có sự đồng ý của phụ huynh/người giám hộ để tham gia.{" "}
                    <span className="text-ink-faint dark:text-cream-200/50">
                      Bạn có thể nhờ người lớn đọc cùng phần giới thiệu này.
                    </span>
                  </span>
                </label>
              ) : null}
            </fieldset>

            <div className="rounded-2xl border border-moss-200/70 bg-moss-50/50 p-4 sm:p-5 dark:border-moss-700/30 dark:bg-moss-900/20">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="text-[0.98rem] font-semibold">Bản đầy đủ · 100 câu</span>
                <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-ink-faint dark:text-cream-200/55">
                  <Clock size={14} />
                  12–15 phút
                </span>
              </div>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
                96 câu về cách bạn ứng phó với áp lực, cùng 4 câu an toàn ở cuối. Bạn có
                thể nghỉ giữa chừng — bài làm được giữ trong tab này.
              </p>
            </div>

            <div>
              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-ink/10 bg-white/45 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink/20"
                />
                <span className="text-[0.85rem] leading-relaxed text-ink-soft dark:text-cream-200/75">
                  Mình đã đọc và đồng ý tham gia. Mình hiểu Mindest chỉ là công cụ tự
                  khám phá, không thay thế người có chuyên môn.{" "}
                  <Link
                    href="/quyen-rieng-tu"
                    className="font-semibold text-moss-700 underline decoration-moss-300 underline-offset-2 dark:text-moss-300"
                  >
                    Cách Mindest xử lý dữ liệu
                  </Link>
                  .
                </span>
              </label>
            </div>

            {error ? (
              <p className="rounded-xl bg-clay-50 px-4 py-3 text-sm text-clay-700 dark:bg-clay-700/10 dark:text-clay-300">
                {error}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2 text-[0.75rem] leading-relaxed text-ink-faint dark:text-cream-200/45">
                <Lock size={14} className="mt-0.5 shrink-0" />
                Không đăng nhập, không máy chủ. Câu trả lời chỉ nằm trong tab này.
              </p>
              <button
                type="button"
                onClick={begin}
                disabled={!canStart}
                className="btn-primary w-full shrink-0 sm:w-auto"
              >
                Bắt đầu
                <ArrowRight size={18} />
              </button>
            </div>
            {missing ? (
              <p className="text-right text-[0.72rem] text-ink-faint dark:text-cream-200/40">
                Còn thiếu: {missing}.
              </p>
            ) : null}

            <div className="flex items-center gap-2 border-t border-ink/[0.06] pt-5 text-[0.75rem] text-ink-faint dark:border-white/[0.06] dark:text-cream-200/45">
              <Phone size={14} className="text-clay-500" />
              Nếu bạn cần nói chuyện với một người thật ngay bây giờ, gọi{" "}
              <a
                href="tel:111"
                className="font-semibold text-clay-700 underline decoration-clay-300 underline-offset-2 dark:text-clay-300"
              >
                111
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
