import { careDescription, careLabel, type CareLevel } from "@/lib/scoring";
import { cn } from "@/lib/cn";
import { Heart } from "./icons";

const levelStyles: Record<CareLevel, { text: string; bg: string; dot: string; bar: string }> = {
  nhe: {
    text: "text-moss-700 dark:text-moss-300",
    bg: "bg-moss-50 dark:bg-moss-900/20",
    dot: "bg-moss-500",
    bar: "bg-moss-500",
  },
  vua: {
    text: "text-honey-700 dark:text-honey-300",
    bg: "bg-honey-50 dark:bg-honey-700/10",
    dot: "bg-honey-500",
    bar: "bg-honey-500",
  },
  cao: {
    text: "text-clay-700 dark:text-clay-300",
    bg: "bg-clay-50 dark:bg-clay-700/10",
    dot: "bg-clay-500",
    bar: "bg-clay-500",
  },
};

const levelValue: Record<CareLevel, number> = { nhe: 1, vua: 2, cao: 3 };

export function CareCard({ level }: { level: CareLevel }) {
  const style = levelStyles[level];
  const active = levelValue[level];

  return (
    <div className={cn("rounded-3xl border border-ink/[0.06] p-5 dark:border-white/[0.08]", style.bg)}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-faint dark:text-cream-200/45">
            <Heart size={13} />
            Mức cần chăm sóc
          </p>
          <p className={cn("mt-2 text-[1.6rem] font-bold leading-none tracking-[-0.04em]", style.text)}>
            {careLabel(level)}
          </p>
        </div>
        <div className="flex items-center gap-1.5 pt-1" aria-hidden="true">
          {[1, 2, 3].map((value) => (
            <span
              key={value}
              className={cn(
                "h-2.5 w-2.5 rounded-full",
                value <= active ? style.bar : "bg-ink/10 dark:bg-white/15",
              )}
            />
          ))}
        </div>
      </div>
      <p className="mt-3 text-[0.82rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
        {careDescription(level)}
      </p>
      <p className="mt-3 text-[0.68rem] leading-relaxed text-ink-faint dark:text-cream-200/35">
        Đây là một chỉ dấu để bạn tự chăm sóc, không phải điểm để so sánh với ai.
      </p>
    </div>
  );
}
