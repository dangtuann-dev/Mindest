"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Check } from "./icons";

export function WeeklyHabits({ habits }: { habits: readonly string[] }) {
  const [done, setDone] = useState<boolean[]>(() => habits.map(() => false));
  const finished = done.filter(Boolean).length;

  function toggle(index: number) {
    setDone((current) => current.map((value, i) => (i === index ? !value : value)));
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.72rem] font-medium text-ink-faint dark:text-cream-200/45">
          {finished}/{habits.length} thói quen đã thử
        </p>
        <div className="h-1.5 w-28 overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-moss-500 transition-all duration-300 dark:bg-moss-400"
            style={{ width: `${(finished / habits.length) * 100}%` }}
          />
        </div>
      </div>

      <ul className="mt-4 space-y-2.5">
        {habits.map((habit, index) => (
          <li key={habit}>
            <label
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3.5 transition",
                done[index]
                  ? "border-moss-300/60 bg-moss-50/80 dark:border-moss-500/25 dark:bg-moss-900/20"
                  : "border-ink/[0.07] bg-white/55 hover:bg-white/80 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]",
              )}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={done[index] ?? false}
                onChange={() => toggle(index)}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition",
                  done[index]
                    ? "border-moss-600 bg-moss-600 text-cream-50"
                    : "border-ink/20 bg-white/70 dark:border-white/25 dark:bg-white/10",
                )}
              >
                {done[index] ? <Check size={13} /> : null}
              </span>
              <span
                className={cn(
                  "text-[0.86rem] leading-relaxed text-ink-soft dark:text-cream-200/70",
                  done[index] && "text-moss-800 line-through decoration-moss-500/40 dark:text-moss-200",
                )}
              >
                {habit}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.68rem] text-ink-faint dark:text-cream-200/35">
        Danh sách chỉ nằm trong tab này và tự mất khi bạn đóng tab.
      </p>
    </div>
  );
}
