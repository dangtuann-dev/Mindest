import type { Metadata } from "next";
import Link from "next/link";
import { ARCHETYPES } from "@/data/archetypes";
import { ArchetypeCard } from "@/components/archetype-card";
import { Disclaimer } from "@/components/support-guidance";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "16 nhân cách ứng phó",
  description:
    "Khám phá 16 nhân cách ứng phó của Mindest — mỗi nhân cách là một cách hiểu nhẹ nhàng về cách bạn phản ứng khi áp lực đến.",
};

export default function NhanCachIndexPage() {
  return (
    <>
      <SiteHeader />
      <main id="noi-dung" tabIndex={-1}>
        <div className="container-page py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Thư viện nhân cách</p>
            <h1 className="mt-4 text-[2.2rem] leading-[1.1] sm:text-[3rem]">
              16 cách phản ứng với áp lực
            </h1>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
              Không có nhân cách nào tốt hơn nhân cách nào. Mỗi nhóm là một cách khác nhau
              để cơ thể, cảm xúc và suy nghĩ của bạn lên tiếng. Đọc để hiểu mình hơn, hoặc
              để hiểu một người bạn đang cần được ở bên.
            </p>
            <Link href="/bat-dau" className="btn-primary mt-7 gap-2">
              Làm bài để tìm nhân cách của bạn
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
            {ARCHETYPES.map((archetype) => (
              <ArchetypeCard key={archetype.code} archetype={archetype} />
            ))}
          </div>

          <div className="mt-12 max-w-2xl">
            <Disclaimer />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
