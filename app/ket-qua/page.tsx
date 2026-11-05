import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ResultView } from "@/components/result-view";

export const metadata: Metadata = {
  title: "Kết quả của bạn",
  description:
    "Bức chân dung phong cách ứng phó của bạn cùng những lời khuyên sơ cứu cảm xúc, thói quen 7 ngày và báo cáo PDF.",
  robots: { index: false, follow: false },
};

export default function KetQuaPage() {
  return (
    <>
      <SiteHeader />
      <main id="noi-dung" tabIndex={-1}>
        <ResultView />
      </main>
      <SiteFooter />
    </>
  );
}
