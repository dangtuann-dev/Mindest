"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Check, Copy } from "./icons";

export function PhraseList({ phrases }: { phrases: readonly string[] }) {
  const [copied, setCopied] = useState<number | null>(null);

  async function copy(index: number, phrase: string) {
    try {
      await navigator.clipboard.writeText(phrase);
      setCopied(index);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  }

  return (
    <ul className="space-y-2.5">
      {phrases.map((phrase, index) => (
        <li
          key={phrase}
          className="flex items-start gap-3 rounded-2xl border border-ink/[0.07] bg-white/55 p-4 dark:border-white/[0.08] dark:bg-white/[0.03]"
        >
          <span
            aria-hidden="true"
            className="mt-0.5 text-[1.4rem] leading-none text-clay-300 dark:text-clay-500/70"
          >
            “
          </span>
          <p className="min-w-0 flex-1 text-[0.86rem] italic leading-relaxed text-ink-soft dark:text-cream-200/70">
            {phrase}
          </p>
          <button
            type="button"
            onClick={() => copy(index, phrase)}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[0.68rem] font-semibold transition",
              copied === index
                ? "border-moss-300 bg-moss-50 text-moss-700 dark:border-moss-500/30 dark:bg-moss-900/20 dark:text-moss-300"
                : "border-ink/10 bg-white/70 text-ink-soft hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-cream-200/70 dark:hover:bg-white/10",
            )}
            aria-label={`Sao chép câu: ${phrase}`}
          >
            {copied === index ? <Check size={13} /> : <Copy size={13} />}
            {copied === index ? "Đã chép" : "Chép"}
          </button>
        </li>
      ))}
    </ul>
  );
}
