import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer } from "@/components/support-guidance";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight, Lock, Phone, Shield } from "@/components/icons";

export const metadata: Metadata = {
  title: "Quyền riêng tư",
  description:
    "Mindest không thu thập, không lưu trữ và không gửi câu trả lời của bạn đi đâu. Mọi thứ chỉ nằm trên thiết bị của bạn và tự xóa khi đóng tab.",
};

const sections = [
  {
    title: "Mindest lưu gì?",
    body: [
      "Trong lúc bạn làm bài, câu trả lời được giữ tạm trong sessionStorage của trình duyệt — một vùng nhớ chỉ thuộc về tab bạn đang mở. Khi bạn hoàn thành, Mindest lưu kết quả tổng hợp (mã nhân cách, vị trí bốn trục, mức cần chăm sóc, thời gian làm bài) vào sessionStorage để trang kết quả đọc lại.",
      "Mindest không gửi câu trả lời hay kết quả đến máy chủ nào. Không có cơ sở dữ liệu, không có tài khoản, không có bảng theo dõi. Đóng tab là toàn bộ dữ liệu của phiên đó biến mất. Bạn cũng có thể bấm “Xóa dữ liệu của mình” ở bất kỳ trang nào để xóa ngay lập tức.",
    ],
  },
  {
    title: "Những điều Mindest không làm",
    body: [
      "Không dùng cookie. Không dùng localStorage cho câu trả lời. Không chạy analytics, không nhúng mạng xã hội, không gọi script quảng cáo hay bất kỳ dịch vụ bên thứ ba nào bằng dữ liệu bài làm.",
      "Phông chữ được tự lưu trữ cùng trang. Avatar được tạo ngay trong trình duyệt bằng thư viện DiceBear, không gọi API bên ngoài. Báo cáo PDF và ảnh Mindset Card được dựng trên thiết bị của bạn rồi tải xuống, không đi qua máy chủ.",
    ],
  },
  {
    title: "Ai có thể thấy dữ liệu?",
    body: [
      "Vì dữ liệu chỉ nằm trong tab đang mở, người có thể nhìn thấy là người đang dùng chính thiết bị và tab đó. Nếu bạn dùng máy chung, hãy bấm “Xóa dữ liệu của mình” hoặc đóng tab sau khi xem kết quả. Mindest không có cách nào đọc được dữ liệu này từ xa.",
    ],
  },
  {
    title: "Người dưới 16 tuổi",
    body: [
      "Dữ liệu tâm lý là dữ liệu cá nhân nhạy cảm theo Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân. Với người từ 12 đến 15 tuổi, Mindest yêu cầu bạn xác nhận đã có sự đồng ý của phụ huynh hoặc người giám hộ trước khi bắt đầu.",
      "Vì Mindest không thu thập thông tin định danh và không lưu dữ liệu trên máy chủ, chúng tôi không thể và không cố gắng xác minh danh tính hay độ tuổi. Việc xác nhận dựa trên sự trung thực của bạn. Nếu bạn chưa chắc, hãy hỏi người lớn trước khi làm bài.",
    ],
  },
  {
    title: "Phần câu hỏi an toàn",
    body: [
      "Bốn câu ở cuối bài giúp Mindest biết khi nào nên đưa ra lời nhắn hỗ trợ thay vì kết quả. Câu trả lời của phần này không được đưa vào mã nhân cách, không xuất hiện trong PDF và không được gửi đi đâu. Kết quả chỉ ghi lại việc bạn có cần được hỗ trợ hay không, để hiển thị đúng lời nhắn.",
    ],
  },
  {
    title: "Quyền của bạn",
    body: [
      "Bạn có quyền dừng làm bài bất cứ lúc nào, xóa dữ liệu đang có trên tab, và không phải giải thích lý do. Bạn không cần cung cấp tên, email, số điện thoại hay bất kỳ thông tin định danh nào để dùng Mindest.",
      "Nếu bạn thấy không an toàn hoặc cần nói với một người thật, hãy gọi 111 — Tổng đài quốc gia bảo vệ trẻ em, hoạt động 24/7 và miễn phí — hoặc tìm một người lớn đáng tin: bố mẹ, thầy cô, người thân.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="noi-dung" tabIndex={-1}>
        <div className="container-page max-w-3xl py-12 sm:py-16">
          <p className="eyebrow">Quyền riêng tư</p>
          <h1 className="mt-4 text-[2.2rem] leading-[1.1] sm:text-[2.9rem]">
            Câu trả lời của bạn ở lại với bạn
          </h1>
          <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft dark:text-cream-200/70">
            Mindest được xây dựng để bạn có thể nói thật mà không phải lo ai đó đang đọc.
            Trang này giải thích rõ dữ liệu được xử lý thế nào, bằng ngôn ngữ dễ hiểu.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: <Lock size={18} />, title: "Không gửi đi", note: "Chỉ trong tab của bạn" },
              { icon: <Shield size={18} />, title: "Không tài khoản", note: "Không tên, không email" },
              { icon: <Phone size={18} />, title: "Luôn có 111", note: "Khi bạn cần người thật" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/[0.07] bg-white/55 p-4 dark:border-white/[0.08] dark:bg-white/[0.03]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-moss-100 text-moss-700 dark:bg-moss-900/30 dark:text-moss-300">
                  {item.icon}
                </span>
                <p className="mt-2.5 text-[0.86rem] font-semibold">{item.title}</p>
                <p className="text-[0.72rem] text-ink-faint dark:text-cream-200/45">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-3xl border border-ink/[0.06] bg-white/50 p-6 sm:p-7 dark:border-white/[0.07] dark:bg-white/[0.03]"
              >
                <h2 className="text-[1.2rem]">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="text-[0.88rem] leading-[1.75] text-ink-soft dark:text-cream-200/65"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-gradient-to-br from-moss-100/80 to-cream-50 p-6 dark:from-moss-900/30 dark:to-night-800 sm:p-7">
            <h2 className="text-[1.15rem]">Bạn muốn bắt đầu?</h2>
            <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
              Bạn có thể xem trước màn hình đồng ý trước khi trả lời bất kỳ câu nào.
            </p>
            <Link href="/" className="btn-primary mt-4 gap-2">
              Đi đến phần giới thiệu
              <ArrowRight size={17} />
            </Link>
          </div>

          <p className="mt-6 text-[0.72rem] text-ink-faint dark:text-cream-200/40">
            Cập nhật lần cuối: 05/11/2026.
          </p>
          <Disclaimer className="mt-4" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
