import { AXIS_BY_KEY } from "@/data/axes";
import { clarityHint, clarityLabel, gaugePosition, type AxisScore } from "@/lib/scoring";
import { cn } from "@/lib/cn";

export function AxisGauge({ axis, color }: { axis: AxisScore; color: string }) {
  const meta = AXIS_BY_KEY[axis.key];
  const position = gaugePosition(axis.m1, axis.m2);
  const leftActive = axis.pole === meta.pole1;

  return (
    <div
      className="rounded-3xl border border-ink/[0.07] bg-white/60 p-4 dark:border-white/[0.08] dark:bg-white/[0.03]"
      role="img"
      aria-label={`${meta.label1} so với ${meta.label2}: nghiêng về ${
        leftActive ? meta.label1 : meta.label2
      }, mức ${clarityLabel(axis.clarity)}.`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className={cn("min-w-0", !leftActive && "opacity-55")}>
          <p className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold tracking-[-0.04em]" style={{ color }}>
              {meta.letter1}
            </span>
            <span className="truncate text-[0.78rem] font-semibold">{meta.label1}</span>
          </p>
        </div>
        <div className={cn("min-w-0 text-right", leftActive && "opacity-55")}>
          <p className="flex items-baseline justify-end gap-1.5">
            <span className="truncate text-[0.78rem] font-semibold">{meta.label2}</span>
            <span className="text-lg font-bold tracking-[-0.04em]" style={{ color }}>
              {meta.letter2}
            </span>
          </p>
        </div>
      </div>

      <div className="relative mt-4 h-2.5 rounded-full bg-ink/[0.07] dark:bg-white/10">
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,rgba(88,126,81,0.28),transparent_48%,rgba(42,37,32,0.08))] dark:bg-[linear-gradient(90deg,rgba(157,184,147,0.35),transparent_48%,rgba(255,255,255,0.08))]" />
        <span
          className="absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-ink/15 dark:bg-white/20"
          aria-hidden="true"
        />
        <span
          className="absolute top-1/2 h-[1.1rem] w-[1.1rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white shadow-[0_2px_8px_rgba(42,37,32,0.25)] dark:border-night-800"
          style={{ left: `${position}%`, backgroundColor: color }}
          aria-hidden="true"
        />
      </div>

      <div className="mt-2.5 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-medium text-ink-faint dark:text-cream-200/45">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
          Mức {clarityLabel(axis.clarity).toLowerCase()}
        </span>
        <span className="text-[0.65rem] text-ink-faint dark:text-cream-200/35">
          {clarityHint(axis.clarity)}
        </span>
      </div>
    </div>
  );
}
