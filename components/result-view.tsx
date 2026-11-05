"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ARCHETYPE_BY_CODE } from "@/data/archetypes";
import { AxisGauge } from "./axis-gauge";
import { Avatar } from "./avatar";
import { ArchetypeCard } from "./archetype-card";
import { CareCard } from "./care-card";
import { ClearDataButton } from "./clear-data-button";
import { Disclaimer, SupportGuidance } from "./support-guidance";
import { MindsetCardButton } from "./mindset-card-button";
import { PhraseList } from "./phrase-list";
import { ReportDownloadButton } from "./report-download";
import { WeeklyHabits } from "./weekly-habits";
import {
  ArrowRight,
  Check,
  Clock,
  Compass,
  Heart,
  Leaf,
  Lock,
  Phone,
  Sparkle,
} from "./icons";
import { formatDateVi, loadResult, type StoredResult } from "@/lib/session";
import { cn } from "@/lib/cn";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[1.8rem]">{title}</h2>
      {description ? (
        <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function SupportScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="panel overflow-hidden">
        <div className="bg-gradient-to-br from-clay-100/80 via-cream-50/60 to-rose-50/70 px-6 py-10 sm:px-10 dark:from-clay-700/20 dark:via-night-800 dark:to-night-800">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-clay-600 text-cream-50 dark:bg-clay-500">
            <Heart size={26} />
          </span>
          <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay-700 dark:text-clay-300">
            Một điều quan trọng trước khi xem kết quả
          </p>
          <h1 className="mt-3 text-[2rem] leading-[1.12] sm:text-[2.5rem]">
            Cảm ơn bạn đã nói thật.
          </h1>
          <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft dark:text-cream-200/75">
            Điều bạn chia sẻ ở phần cuối rất quan trọng, và bạn xứng đáng được ở bên. Bạn
            không cần một mình giữ những cảm giác này, cũng không cần phải có đủ lời để
            bắt đầu. Chỉ cần một người lớn đáng tin biết rằng bạn đang thấy thế nào.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="tel:111"
              className="flex min-h-[3.25rem] items-center gap-3 rounded-2xl bg-clay-600 px-5 text-[0.95rem] font-semibold text-cream-50 transition hover:-translate-y-0.5 hover:bg-clay-700 dark:bg-clay-500 dark:hover:bg-clay-400"
            >
              <Phone size={19} />
              Gọi 111 ngay
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-white/65 px-5 py-3.5 text-[0.82rem] leading-relaxed text-ink-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-cream-200/70">
              <ChatIcon />
              Tổng đài quốc gia bảo vệ trẻ em, hoạt động 24/7 và miễn phí.
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-ink/[0.07] bg-white/55 p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
            <p className="text-[0.9rem] font-semibold">Bạn có thể tìm ai?</p>
            <ul className="mt-2.5 space-y-1.5 text-[0.84rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
              <li>Bố mẹ, ông bà, anh chị hoặc một người thân mà bạn thấy an toàn.</li>
              <li>Thầy cô, cô giáo chủ nhiệm, nhân viên tư vấn học đường.</li>
              <li>Một người bạn lớn tuổi hơn mà bạn tin.</li>
            </ul>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-ink-faint dark:text-cream-200/45">
              Nếu một người chưa hiểu, bạn có thể thử nói với người khác. Bạn không cần
              chứng minh mình “đủ nặng” mới được giúp.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={onContinue} className="btn-secondary">
              Tiếp tục xem kết quả
              <ArrowRight size={17} />
            </button>
            <span className="text-[0.72rem] leading-relaxed text-ink-faint dark:text-cream-200/40">
              Kết quả chỉ là một bức chân dung tạm thời, không phải điều gì đó định nghĩa
              bạn.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-ink/[0.06] bg-white/50 p-5 dark:border-white/[0.07] dark:bg-white/[0.03]">
        <p className="flex items-start gap-2.5 text-[0.78rem] leading-relaxed text-ink-faint dark:text-cream-200/45">
          <Lock size={15} className="mt-0.5 shrink-0" />
          Câu trả lời của bạn, kể cả phần này, không được lưu hay gửi đi đâu. Khi bạn đóng
          tab, mọi thứ sẽ tự xóa.
        </p>
      </div>
      <Disclaimer className="mt-5 px-1" />
    </div>
  );
}

function ChatIcon() {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-clay-100 text-clay-700 dark:bg-clay-700/20 dark:text-clay-300">
      <Heart size={16} />
    </span>
  );
}

function ResultArticle({ result }: { result: StoredResult }) {
  const archetype = ARCHETYPE_BY_CODE[result.code];
  const date = formatDateVi(result.savedAt) || "hôm nay";
  const minutes = Math.max(1, Math.round(result.durationMs / 60000));

  return (
    <article className="space-y-12">
      {result.attention.shouldNudge ? (
        <div className="flex items-start gap-3 rounded-2xl border border-honey-200/80 bg-honey-50/80 px-5 py-4 dark:border-honey-700/30 dark:bg-honey-700/10">
          <Clock
            size={19}
            className="mt-0.5 shrink-0 text-honey-700 dark:text-honey-300"
          />
          <p className="text-[0.82rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
            Có vẻ bạn đã trả lời khá nhanh hoặc chọn cùng một mức nhiều lần liên tiếp. Kết
            quả vẫn được giữ nguyên, nhưng lần sau thử dành thêm một chút thời gian cho
            mỗi câu sẽ giúp bạn thấy mình rõ hơn.
          </p>
        </div>
      ) : null}

      <section
        aria-labelledby="ket-qua-ten"
        className="relative overflow-hidden rounded-[2.25rem] border border-ink/[0.06] p-4 shadow-soft sm:p-6 dark:border-white/[0.08] dark:!bg-night-700"
        style={{ backgroundColor: archetype.tint }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-[0.14]"
          style={{ backgroundColor: archetype.color }}
        />
        <div className="relative grid gap-6 md:grid-cols-[250px_minmax(0,1fr)] md:items-center">
          <Avatar
            code={archetype.code}
            className="mx-auto aspect-square w-full max-w-[260px] rounded-[1.9rem] border-[5px] border-white/70 shadow-soft dark:border-white/10"
          />
          <div className="min-w-0">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-faint dark:text-cream-200/50">
              Nhân cách của bạn
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span
                className="rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-[0.16em] text-cream-50"
                style={{ backgroundColor: archetype.color }}
              >
                {archetype.code}
              </span>
              <span className="chip bg-white/65 dark:bg-white/10">
                <Clock size={12} />
                {minutes} phút làm bài
              </span>
              <span className="chip bg-white/65 dark:bg-white/10">100 câu</span>
            </div>
            <h1
              id="ket-qua-ten"
              className="mt-3 text-[2.1rem] leading-[1.08] tracking-[-0.045em] sm:text-[2.7rem]"
            >
              {archetype.name}
            </h1>
            <p className="mt-3 max-w-xl text-[1rem] italic leading-relaxed text-ink-soft dark:text-cream-200/70">
              “{archetype.slogan}”
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.72rem] text-ink-faint dark:text-cream-200/45">
              <span>Ngày làm bài: {date}</span>
              <span aria-hidden="true">·</span>
              <span>Chỉ lưu trong tab này</span>
            </p>
            <div className="mt-5 max-w-md">
              <CareCard level={result.careLevel} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="bon-truc">
        <SectionHeading
          eyebrow="Bức chân dung"
          title="Bốn trục ứng phó của bạn"
          description="Mỗi trục là một cách bạn thường phản ứng khi áp lực đến. Không có đầu nào tốt hơn đầu nào — chỉ là bạn đang nghiêng về đâu lúc này."
        />
        <div id="bon-truc" className="mt-5 grid gap-3 md:grid-cols-2">
          {result.axes.map((axis) => (
            <AxisGauge key={axis.key} axis={axis} color={archetype.color} />
          ))}
        </div>
        <p className="mt-3 px-1 text-[0.7rem] leading-relaxed text-ink-faint dark:text-cream-200/40">
          “Cân bằng” nghĩa là bạn đang ở giữa hai xu hướng, và điều đó cũng rất bình
          thường.
        </p>
      </section>

      <section aria-labelledby="ban-la-ai">
        <SectionHeading
          eyebrow="Hiểu mình"
          title="Bạn là ai trong những ngày có áp lực"
        />
        <div
          id="ban-la-ai"
          className="panel mt-5 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr]"
        >
          <div className="prose-warm">
            {archetype.summary
              .split(". ")
              .reduce<string[]>((acc, sentence, index, all) => {
                if (index % 3 === 0) {
                  const chunk = all.slice(index, index + 3).join(". ");
                  acc.push(chunk.endsWith(".") ? chunk : `${chunk}.`);
                }
                return acc;
              }, [])
              .map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
          </div>
          <div
            className="h-fit rounded-3xl border-l-[3px] bg-white/60 p-5 dark:bg-white/[0.04]"
            style={{ borderColor: archetype.color }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-faint dark:text-cream-200/45">
              Khi mọi thứ quá tải, bạn thường
            </p>
            <p className="mt-2.5 text-[0.88rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
              {archetype.stressStyle}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="diem-manh" className="grid gap-4 md:grid-cols-2">
        <div className="panel p-6 sm:p-7">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-moss-100 text-moss-700 dark:bg-moss-900/30 dark:text-moss-300">
              <Leaf size={18} />
            </span>
            <h2 id="diem-manh" className="text-[1.15rem]">
              Điểm mạnh của bạn
            </h2>
          </div>
          <ul className="mt-4 space-y-3">
            {archetype.strengths.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check
                  size={16}
                  className="mt-1 shrink-0 text-moss-600 dark:text-moss-400"
                />
                <span className="text-[0.88rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-6 sm:p-7">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-honey-100 text-honey-700 dark:bg-honey-700/20 dark:text-honey-300">
              <Compass size={18} />
            </span>
            <h2 className="text-[1.15rem]">Điều cần chú ý</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {archetype.watchouts.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-honey-500"
                />
                <span className="text-[0.88rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="so-cuu">
        <SectionHeading
          eyebrow="Dùng được ngay"
          title="5 lời khuyên sơ cứu cảm xúc"
          description="Những việc nhỏ, làm được trong 5–15 phút. Không cần làm hết — chọn một việc thấy vừa sức."
        />
        <ol id="so-cuu" className="mt-5 grid gap-3 sm:grid-cols-2">
          {archetype.firstAid.map((tip, index) => (
            <li
              key={tip.title}
              className={cn(
                "rounded-3xl border border-ink/[0.06] bg-white/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.03]",
                index === 4 && "sm:col-span-2",
              )}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[0.72rem] font-bold text-cream-50"
                  style={{ backgroundColor: archetype.color }}
                >
                  {index + 1}
                </span>
                <h3 className="min-w-0 flex-1 text-[0.96rem] leading-snug">
                  {tip.title}
                </h3>
                <span className="chip shrink-0 px-2.5 py-0.5 text-[0.65rem]">
                  {tip.minutes} phút
                </span>
              </div>
              <p className="mt-2.5 pl-[2.4rem] text-[0.85rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
                {tip.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="thoi-quen" className="grid gap-4 lg:grid-cols-2">
        <div className="panel p-6 sm:p-7">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-moss-100 text-moss-700 dark:bg-moss-900/30 dark:text-moss-300">
              <Sparkle size={18} />
            </span>
            <div>
              <h2 id="thoi-quen" className="text-[1.15rem]">
                Thói quen nhỏ cho 7 ngày
              </h2>
              <p className="text-[0.72rem] text-ink-faint dark:text-cream-200/45">
                Tick khi bạn thử, không cần hoàn hảo
              </p>
            </div>
          </div>
          <div className="mt-5">
            <WeeklyHabits habits={archetype.weeklyHabits} />
          </div>
        </div>

        <div className="panel p-6 sm:p-7">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-clay-100 text-clay-700 dark:bg-clay-700/20 dark:text-clay-300">
              <ChatBubble />
            </span>
            <div>
              <h2 className="text-[1.15rem]">Nói với bố mẹ/người thân</h2>
              <p className="text-[0.72rem] text-ink-faint dark:text-cream-200/45">
                Bạn có thể mở lời bằng một câu ngắn
              </p>
            </div>
          </div>
          <div className="mt-5">
            <PhraseList phrases={archetype.phrasesToShare} />
          </div>
        </div>
      </section>

      <section aria-labelledby="nguoi-giong-ban">
        <SectionHeading
          eyebrow="Khám phá thêm"
          title="Người giống bạn"
          description="Hai nhân cách gần với bạn nhất, khác một trục. Xem để hiểu thêm những cách ứng phó khác."
        />
        <div id="nguoi-giong-ban" className="mt-5 grid gap-5 sm:grid-cols-2">
          {archetype.neighbors.map((code) => (
            <NeighborCard key={code} code={code} />
          ))}
        </div>
      </section>

      <SupportGuidance
        careLevel={result.careLevel}
        wantsToTalk={result.safety.wantsToTalk}
      />

      <section className="panel p-6 sm:p-8" aria-labelledby="luu-va-chia-se">
        <h2 id="luu-va-chia-se" className="text-[1.15rem]">
          Lưu lại hoặc bắt đầu lại
        </h2>
        <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
          Báo cáo PDF chỉ chứa kết quả tổng hợp, không chứa câu trả lời chi tiết. Mọi thứ
          được tạo ngay trên thiết bị của bạn.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start">
          <ReportDownloadButton result={result} />
          <MindsetCardButton code={result.code} />
          <Link href="/" className="btn-secondary gap-2">
            Làm lại
          </Link>
          <ClearDataButton className="sm:ml-auto" />
        </div>
        <p className="mt-4 flex items-start gap-2 text-[0.7rem] leading-relaxed text-ink-faint dark:text-cream-200/40">
          <Lock size={13} className="mt-0.5 shrink-0" />
          Kết quả và câu trả lời chỉ nằm trong sessionStorage của tab này. Đóng tab là
          mất.
        </p>
      </section>

      <Disclaimer className="px-1" />
    </article>
  );
}

function NeighborCard({ code }: { code: keyof typeof ARCHETYPE_BY_CODE }) {
  return <ArchetypeCard archetype={ARCHETYPE_BY_CODE[code]} compact={false} />;
}

function ChatBubble() {
  return <ChatIcon />;
}

export function ResultView() {
  const [result, setResult] = useState<StoredResult | null>(null);
  const [ready, setReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setResult(loadResult());
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="container-page py-16" aria-busy="true" aria-live="polite">
        <div className="mx-auto max-w-3xl animate-pulse space-y-4">
          <div className="h-4 w-32 rounded-full bg-ink/10 dark:bg-white/10" />
          <div className="h-16 w-3/4 rounded-2xl bg-ink/10 dark:bg-white/10" />
          <div className="h-40 rounded-4xl bg-ink/5 dark:bg-white/5" />
          <p className="sr-only">Đang tải kết quả.</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-moss-100 text-moss-700 dark:bg-moss-900/30 dark:text-moss-300">
            <Compass size={25} />
          </span>
          <h1 className="mt-6 text-[1.9rem] leading-tight sm:text-[2.3rem]">
            Chưa có kết quả trong tab này
          </h1>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
            Kết quả chỉ được giữ trong tab bạn làm bài và tự xóa khi đóng tab. Bạn có thể
            làm lại bất cứ lúc nào — bài làm gồm 100 câu, khoảng 12–15 phút.
          </p>
          <Link href="/" className="btn-primary mt-7 gap-2">
            Bắt đầu làm bài
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  if (result.safety.needsSupport && !revealed) {
    return (
      <div className="container-page py-10 sm:py-16">
        <SupportScreen
          onContinue={() => {
            setRevealed(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    );
  }

  return (
    <div className="container-page max-w-5xl py-10 sm:py-14">
      <ResultArticle result={result} />
    </div>
  );
}
