import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StartFlow } from "@/components/start-flow";

export const metadata: Metadata = {
  title: "Bắt đầu",
  description:
    "Đọc lưu ý, chọn nhóm tuổi và xác nhận trước khi bắt đầu hành trình hiểu mình cùng Mindest.",
};

export default function StartPage() {
  return (
    <>
      <SiteHeader />
      <StartFlow />
      <SiteFooter />
    </>
  );
}
