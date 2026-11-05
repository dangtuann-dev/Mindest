import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ARCHETYPES,
  ARCHETYPE_BY_CODE,
  isArchetypeCode,
  type Archetype,
} from "@/data/archetypes";
import { AVATAR_LICENSE } from "@/data/avatars";
import { ArchetypeCard } from "@/components/archetype-card";
import { Avatar } from "@/components/avatar";
import { Disclaimer, SupportGuidance } from "@/components/support-guidance";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PhraseList } from "@/components/phrase-list";
import { WeeklyHabits } from "@/components/weekly-habits";
import { ArrowRight, Check, Clock, Leaf, Sparkle } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARCHETYPES.map((archetype) => ({ ma: archetype.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ma: string }>;
}): Promise<Metadata> {
  const { ma } = await params;
  const code = ma.toUpperCase();
  const archetype = isArchetypeCode(code) ? ARCHETYPE_BY_CODE[code] : null;
  if (!archetype) return { title: "Nhân cách" };
  return {
    title: `${archetype.name} (${archetype.code})`,
    description: `${archetype.slogan} Khám phá nhân cách ${archetype.name} trong 16 nhân cách ứng phó của Mindest.`,
  };
}

function ArchetypeDetail({ archetype }: { archetype: Archetype }) {
  return (
    <>
      <SiteHeader />
      <main id="noi-dung" tabIndex={-1}>
        <div className="container-page max-w-5xl py-10 sm:py-14">
          <nav
            aria-label="Đường dẫn"
            className="text-[0.78rem] text-ink-faint dark:text-cream-200/45"
          >
            <Link
              className="transition hover:text-moss-700 dark:hover:text-moss-300"
              href="/nhan-cach"
            >
              16 nhân cách
            </Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{archetype.name}</span>
          </nav>

          <section
            className="relative mt-5 overflow-hidden rounded-[2.25rem] border border-ink/[0.06] p-4 shadow-soft sm:p-6 dark:border-white/[0.08] dark:!bg-night-700"
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
                  Một trong 16 nhân cách
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
                    12–15 phút để khám phá
                  </span>
                </div>
                <h1 className="mt-3 text-[2.1rem] leading-[1.08] tracking-[-0.045em] sm:text-[2.7rem]">
                  {archetype.name}
                </h1>
                <p className="mt-3 max-w-xl text-[1rem] italic leading-relaxed text-ink-soft dark:text-cream-200/70">
                  “{archetype.slogan}”
                </p>
                <Link
                  href="/"
                  className="btn-secondary mt-6 gap-2 bg-white/70 dark:bg-white/10"
                >
                  Xem nhân cách của bạn
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
            <div className="panel p-6 sm:p-8">
              <p className="eyebrow">Chân dung</p>
              <h2 className="mt-3 text-[1.5rem]">Bạn là ai trong những ngày có áp lực</h2>
              <div className="prose-warm mt-4">
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
            </div>
            <div
              className="h-fit rounded-3xl border-l-[3px] bg-white/60 p-6 dark:border-white/[0.08] dark:bg-white/[0.03]"
              style={{ borderColor: archetype.color }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-faint dark:text-cream-200/45">
                Khi mọi thứ quá tải, bạn thường
              </p>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
                {archetype.stressStyle}
              </p>
            </div>
          </section>

          <section className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="panel p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-moss-100 text-moss-700 dark:bg-moss-900/30 dark:text-moss-300">
                  <Leaf size={18} />
                </span>
                <h2 className="text-[1.15rem]">Điểm mạnh</h2>
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
                  <Clock size={18} />
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

          <section className="mt-10">
            <p className="eyebrow">Dùng được ngay</p>
            <h2 className="mt-3 text-[1.55rem]">5 lời khuyên sơ cứu cảm xúc</h2>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {archetype.firstAid.map((tip, index) => (
                <li
                  key={tip.title}
                  className="rounded-3xl border border-ink/[0.06] bg-white/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.03]"
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

          <section className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="panel p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-moss-100 text-moss-700 dark:bg-moss-900/30 dark:text-moss-300">
                  <Sparkle size={18} />
                </span>
                <h2 className="text-[1.15rem]">Thói quen nhỏ cho 7 ngày</h2>
              </div>
              <div className="mt-5">
                <WeeklyHabits habits={archetype.weeklyHabits} />
              </div>
            </div>
            <div className="panel p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-clay-100 text-clay-700 dark:bg-clay-700/20 dark:text-clay-300">
                  <Sparkle size={18} />
                </span>
                <h2 className="text-[1.15rem]">Nói với bố mẹ/người thân</h2>
              </div>
              <div className="mt-5">
                <PhraseList phrases={archetype.phrasesToShare} />
              </div>
            </div>
          </section>

          <section className="mt-10">
            <p className="eyebrow">Gần giống</p>
            <h2 className="mt-3 text-[1.55rem]">Hai nhân cách gần bạn</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {archetype.neighbors.map((code) => {
                const neighbor = ARCHETYPES.find((item) => item.code === code);
                return neighbor ? (
                  <ArchetypeCard key={neighbor.code} archetype={neighbor} />
                ) : null;
              })}
            </div>
          </section>

          <div className="mt-10">
            <SupportGuidance careLevel="nhe" wantsToTalk={false} />
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-ink/[0.07] pt-6 dark:border-white/[0.07]">
            <Disclaimer />
            <p className="text-[0.68rem] leading-relaxed text-ink-faint dark:text-cream-200/40">
              Avatar: {AVATAR_LICENSE.style} bởi {AVATAR_LICENSE.creator}, qua DiceBear (
              {AVATAR_LICENSE.license}).
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default async function NhanCachPage({
  params,
}: {
  params: Promise<{ ma: string }>;
}) {
  const { ma } = await params;
  const code = ma.toUpperCase();
  if (!isArchetypeCode(code)) notFound();
  return <ArchetypeDetail archetype={ARCHETYPE_BY_CODE[code]} />;
}
