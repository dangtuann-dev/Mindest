import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroArt } from "@/components/hero-art";
import { ArchetypeCard } from "@/components/archetype-card";
import { ARCHETYPES } from "@/data/archetypes";
import { AXES } from "@/data/axes";
import {
  ArrowRight,
  Clock,
  Heart,
  Leaf,
  Lock,
  Phone,
  Shield,
  Sparkle,
} from "@/components/icons";

const axisAccents = [
  {
    text: "text-moss-700 dark:text-moss-300",
    dot: "bg-moss-500",
    wash: "bg-moss-200/70 dark:bg-moss-700/40",
  },
  {
    text: "text-clay-600 dark:text-clay-300",
    dot: "bg-clay-400",
    wash: "bg-clay-200/70 dark:bg-clay-700/30",
  },
  {
    text: "text-honey-600 dark:text-honey-300",
    dot: "bg-honey-400",
    wash: "bg-honey-200/70 dark:bg-honey-700/30",
  },
  {
    text: "text-rose-500 dark:text-rose-300",
    dot: "bg-rose-400",
    wash: "bg-rose-200/70 dark:bg-rose-500/20",
  },
];

const steps = [
  {
    title: "Đi chậm qua 100 câu",
    body: "96 câu về cách bạn ứng phó với áp lực, cùng 4 câu an toàn ở cuối. Bạn có thể nghỉ giữa chừng, bài làm được giữ trên tab này.",
    note: "12–15 phút",
  },
  {
    title: "Trả lời như đang tự nói",
    body: "Không có đáp án đúng. Chọn điều gần với bạn nhất trong 2–4 tuần gần đây. Câu nào không hợp, bạn có thể bỏ qua.",
    note: "Không phán xét",
  },
  {
    title: "Nhận chân dung và bước tiếp",
    body: "Avatar, mô tả, 5 gợi ý sơ cứu cảm xúc, thói quen cho 7 ngày và một báo cáo PDF để giữ lại.",
    note: "Chỉ trên máy bạn",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="noi-dung">
        <section className="container-page grid items-center gap-14 pb-16 pt-12 md:grid-cols-[1.02fr_0.98fr] md:gap-8 md:pb-24 md:pt-20">
          <div className="relative z-10 animate-fade-up">
            <span className="chip bg-white/70 text-ink-soft dark:bg-white/5">
              <Sparkle size={14} className="text-honey-500" />
              Dành cho người trẻ 12–22 tuổi
            </span>
            <h1 className="mt-6 text-[2.6rem] leading-[1.06] sm:text-[3.4rem] lg:text-[4rem]">
              Một tổ ấm nhỏ cho những ngày{" "}
              <span className="relative whitespace-nowrap text-moss-700 dark:text-moss-300">
                tâm trí quá tải
                <svg
                  viewBox="0 0 300 14"
                  className="absolute -bottom-2 left-0 w-full text-honey-400/80"
                  fill="none"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10c62-7 128-9 294-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 13c58-5 130-7 252-5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity=".5"
                  />
                </svg>
              </span>
              .
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.8] text-ink-soft dark:text-cream-200/75">
              Mindest giúp bạn nhận ra cách mình phản ứng khi áp lực — qua 16 chân dung
              tâm lý, những lời khuyên sơ cứu cảm xúc và một bản báo cáo chỉ dành cho bạn.
            </p>
            <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-ink-faint dark:text-cream-200/55">
              Không phải để dán nhãn. Để bạn hiểu mình hơn một chút.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/bat-dau"
                className="btn-primary group min-h-[3.4rem] px-7 text-[1rem]"
              >
                Bắt đầu khám phá
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>
              <Link href="#nhan-cach" className="btn-secondary min-h-[3.4rem] px-6">
                Xem 16 nhân cách
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.78rem] font-medium text-ink-faint dark:text-cream-200/55">
              <li className="inline-flex items-center gap-1.5">
                <Clock size={15} className="text-moss-600 dark:text-moss-300" />
                12–15 phút
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Lock size={15} className="text-moss-600 dark:text-moss-300" />
                Chỉ trên thiết bị này
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Shield size={15} className="text-moss-600 dark:text-moss-300" />
                Không phán xét
              </li>
            </ul>
          </div>

          <div className="animation-delay-150 animate-fade-up">
            <HeroArt />
          </div>
        </section>

        <section id="cach-hoat-dong" className="container-page scroll-mt-24 pt-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Bốn sợi chỉ</span>
            <h2 className="mt-4 text-[2rem] leading-[1.15] sm:text-[2.6rem]">
              Bạn phản ứng với áp lực theo cách rất riêng.
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
              Mindest nhìn vào bốn hướng thay vì một cái nhãn. Không hướng nào tốt hơn
              hướng nào — chúng chỉ cho thấy điều gì đang đỡ bạn và điều gì đang nặng.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {AXES.map((axis, index) => {
              const accent = axisAccents[index] ?? axisAccents[0];
              return (
                <div key={axis.key} className="panel relative overflow-hidden p-6 sm:p-7">
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${accent?.wash ?? ""}`}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-[1.75rem] font-bold tracking-[-0.05em] ${accent?.text ?? ""}`}
                      >
                        {axis.letter1}
                      </span>
                      <span className="text-ink-faint/60" aria-hidden="true">
                        ↔
                      </span>
                      <span className="text-[1.75rem] font-bold tracking-[-0.05em]">
                        {axis.letter2}
                      </span>
                    </div>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink-faint dark:text-cream-200/40">
                      Trục {index + 1}
                    </span>
                  </div>
                  <div className="relative mt-5 space-y-3">
                    <div>
                      <p className="flex items-center gap-2 text-[0.95rem] font-semibold">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${accent?.dot ?? ""}`}
                        />
                        {axis.label1}
                      </p>
                      <p className="mt-1 pl-3.5 text-[0.8rem] leading-relaxed text-ink-soft dark:text-cream-200/60">
                        {axis.hint1}
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-[0.95rem] font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink/20 dark:bg-white/20" />
                        {axis.label2}
                      </p>
                      <p className="mt-1 pl-3.5 text-[0.8rem] leading-relaxed text-ink-soft dark:text-cream-200/60">
                        {axis.hint2}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container-page mt-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Một buổi trò chuyện nhỏ</span>
            <h2 className="mt-4 text-[2rem] leading-[1.15] sm:text-[2.6rem]">
              Ba bước, không cần chuẩn bị gì.
            </h2>
          </div>
          <div className="relative mt-10 grid gap-4 md:grid-cols-3">
            <div
              className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-moss-300/60 via-clay-300/60 to-honey-300/60 md:block"
              aria-hidden="true"
            />
            {steps.map((step, index) => (
              <div key={step.title} className="panel relative p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-moss-700 text-sm font-bold text-cream-50 dark:bg-moss-300 dark:text-night-900">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="chip bg-transparent">{step.note}</span>
                </div>
                <h3 className="mt-6 text-[1.18rem]">{step.title}</h3>
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-start gap-2 text-[0.78rem] leading-relaxed text-ink-faint dark:text-cream-200/50">
            <Leaf size={15} className="mt-0.5 shrink-0 text-moss-500" />
            Câu trả lời chỉ nằm trong tab này. Đóng tab, chúng sẽ biến mất. Bạn cũng có
            thể bấm “Xóa dữ liệu của mình” ở bất cứ đâu.
          </p>
        </section>

        <section id="nhan-cach" className="container-page mt-24 scroll-mt-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">16 chân dung</span>
              <h2 className="mt-4 text-[2rem] leading-[1.15] sm:text-[2.6rem]">
                Không chân dung nào là một bản án.
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
                Mỗi chân dung là một cách ứng phó đã giúp bạn đi đến hôm nay. Có điều đang
                đỡ bạn, có điều đang làm bạn mệt — và cả hai đều đáng được nhìn thấy.
              </p>
            </div>
            <Link
              href="/nhan-cach"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-moss-700 transition hover:text-moss-800 dark:text-moss-300"
            >
              Mở thư viện chân dung
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {ARCHETYPES.map((archetype) => (
              <ArchetypeCard key={archetype.code} archetype={archetype} />
            ))}
          </div>
        </section>

        <section className="container-page mt-24">
          <div className="relative overflow-hidden rounded-5xl border border-rose-200/70 bg-gradient-to-br from-rose-100/90 via-cream-50/80 to-honey-100/70 p-8 shadow-soft sm:p-12 dark:border-white/10 dark:from-night-800 dark:via-night-800 dark:to-night-700">
            <div
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-rose-300/30 blur-3xl dark:bg-rose-500/10"
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose-500 dark:text-rose-300">
                  <Heart size={14} />
                  Một lời nhắc
                </span>
                <h2 className="mt-4 text-[1.9rem] leading-[1.2] sm:text-[2.3rem]">
                  Nếu hôm nay mọi thứ quá nặng, bạn không cần ở một mình.
                </h2>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
                  Mindest là một công cụ tự khám phá. Nếu bạn đang thấy không an toàn,
                  hãy nói với một người lớn đáng tin — bố mẹ, thầy cô, người thân — hoặc
                  gọi 111. Bạn không phải giải thích mọi thứ trước khi được giúp.
                </p>
              </div>
              <a
                href="tel:111"
                className="inline-flex min-h-[3.5rem] items-center justify-center gap-2.5 rounded-full bg-clay-600 px-6 text-[0.95rem] font-semibold text-cream-50 shadow-[0_14px_30px_-14px_rgba(174,76,49,0.9)] transition hover:-translate-y-0.5 hover:bg-clay-700 dark:bg-clay-500 dark:hover:bg-clay-400"
              >
                <Phone size={18} />
                Gọi 111
              </a>
            </div>
          </div>
        </section>

        <section className="container-page mt-24">
          <div className="relative overflow-hidden rounded-5xl bg-moss-800 px-7 py-12 text-cream-50 shadow-lift sm:px-12 sm:py-16 dark:bg-moss-900">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-cream-100/15" />
              <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-cream-100/10" />
              <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-honey-400/10 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream-100/60">
                  <Sparkle size={14} />
                  Một chút can đảm
                </span>
                <h2 className="mt-4 text-[2rem] leading-[1.15] text-cream-50 sm:text-[2.6rem]">
                  Bắt đầu từ một câu hỏi nhỏ.
                </h2>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-cream-100/70">
                  Không cần chuẩn bị gì. Chỉ cần một chút thành thật với chính mình — và
                  khoảng mười lăm phút.
                </p>
              </div>
              <Link
                href="/bat-dau"
                className="group inline-flex min-h-[3.5rem] shrink-0 items-center gap-2 rounded-full bg-cream-50 px-7 text-[1rem] font-semibold text-moss-900 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Bắt đầu khám phá
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="container-page mt-14">
          <p className="mx-auto max-w-3xl text-center text-[0.78rem] leading-relaxed text-ink-faint dark:text-cream-200/45">
            Mindest là công cụ nhận diện phong cách ứng phó và sàng lọc sơ bộ, không đưa
            ra kết luận về sức khỏe tinh thần và không thay thế ý kiến của người có chuyên
            môn. Câu trả lời của bạn không được gửi đi bất kỳ đâu.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
