import Link from "next/link";
import { Brand } from "./brand";
import { ArrowRight } from "./icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/[0.06] bg-white/80 backdrop-blur-xl dark:border-white/[0.07] dark:bg-night-900/80">
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <Brand />
        <nav
          className="hidden items-center gap-1 text-sm font-medium text-ink-soft md:flex dark:text-cream-200/75"
          aria-label="Điều hướng chính"
        >
          <Link
            className="rounded-full px-3.5 py-2 transition hover:bg-ink/5 hover:text-ink dark:hover:bg-white/10 dark:hover:text-cream-50"
            href="/#cach-hoat-dong"
          >
            Cách hoạt động
          </Link>
          <Link
            className="rounded-full px-3.5 py-2 transition hover:bg-ink/5 hover:text-ink dark:hover:bg-white/10 dark:hover:text-cream-50"
            href="/#nhan-cach"
          >
            16 nhân cách
          </Link>
          <Link
            className="rounded-full px-3.5 py-2 transition hover:bg-ink/5 hover:text-ink dark:hover:bg-white/10 dark:hover:text-cream-50"
            href="/quyen-rieng-tu"
          >
            Quyền riêng tư
          </Link>
        </nav>
        <Link
          href="/bat-dau"
          className="btn-primary min-h-[2.75rem] gap-1.5 px-5 text-[0.9rem]"
        >
          Bắt đầu
          <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
}
