import Link from "next/link";
import { AVATAR_LICENSE } from "@/data/avatars";
import { Brand } from "./brand";
import { ClearDataButton } from "./clear-data-button";
import { Phone } from "./icons";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink/[0.07] bg-white/35 dark:border-white/[0.07] dark:bg-night-800/30">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Brand withTagline={false} />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-cream-200/70">
              Một công cụ nhẹ nhàng để bạn hiểu cách mình phản ứng với áp lực — và biết
              mình cần gì vào những ngày khó.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-ink-faint dark:text-cream-200/50">
              Mindest dành cho người trẻ 12–22 tuổi tại Việt Nam. Đây là công cụ tự khám
              phá, không thay thế ý kiến của người có chuyên môn về sức khỏe tinh thần.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint dark:text-cream-200/50">
              Khám phá
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft dark:text-cream-200/70">
              <li>
                <Link className="transition hover:text-moss-700 dark:hover:text-moss-300" href="/#cach-hoat-dong">
                  Cách hoạt động
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-moss-700 dark:hover:text-moss-300" href="/nhan-cach">
                  16 nhân cách
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-moss-700 dark:hover:text-moss-300" href="/bat-dau">
                  Làm bài
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-moss-700 dark:hover:text-moss-300" href="/quyen-rieng-tu">
                  Quyền riêng tư
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint dark:text-cream-200/50">
              An toàn
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft dark:text-cream-200/70">
              <li>
                <a
                  className="inline-flex items-center gap-2 font-medium text-clay-700 transition hover:text-clay-600 dark:text-clay-300"
                  href="tel:111"
                >
                  <Phone size={15} />
                  Gọi 111 – Tổng đài bảo vệ trẻ em
                </a>
              </li>
              <li>
                <ClearDataButton compact />
              </li>
            </ul>
            <p className="mt-5 text-[0.68rem] leading-relaxed text-ink-faint dark:text-cream-200/40">
              Avatar: {AVATAR_LICENSE.style} bởi {AVATAR_LICENSE.creator}, qua DiceBear (
              {AVATAR_LICENSE.license}).
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/[0.07] pt-6 text-xs text-ink-faint dark:border-white/[0.07] dark:text-cream-200/45">
          © {new Date().getFullYear()} Mindest. Câu trả lời của bạn không rời khỏi thiết bị này.
        </div>
      </div>
    </footer>
  );
}
