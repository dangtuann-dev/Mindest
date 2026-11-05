import Link from "next/link";
import { cn } from "@/lib/cn";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center text-moss-700 dark:text-moss-300",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" className="h-[2.15rem] w-[2.15rem]" fill="none">
        <path
          d="M7.5 30.5V20.75C7.5 13.85 13.1 8.25 20 8.25s12.5 5.6 12.5 12.5V30.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M13.8 30.5c0-3.6 2.8-6.2 6.2-6.2s6.2 2.6 6.2 6.2"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="18.4" r="2.9" fill="#D99B2B" />
      </svg>
    </span>
  );
}

export function Brand({
  href = "/trang-chu",
  withTagline = true,
  className,
}: {
  href?: string;
  withTagline?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-2 rounded-2xl", className)}
      aria-label="Mindest – về trang chủ"
    >
      <BrandMark className="transition duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.13rem] font-bold tracking-[-0.05em]">Mindest</span>
        {withTagline ? (
          <span className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.17em] text-ink-faint dark:text-cream-200/55">
            tổ ấm cho tâm trí
          </span>
        ) : null}
      </span>
    </Link>
  );
}
