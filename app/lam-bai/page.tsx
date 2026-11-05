import type { Metadata } from "next";
import { TestRunner } from "@/components/test-runner";

export const metadata: Metadata = {
  title: "Làm bài",
  description: "Trả lời những câu hỏi về 2–4 tuần gần đây của bạn.",
  robots: { index: false, follow: false },
};

export default function TestPage() {
  return <TestRunner />;
}
