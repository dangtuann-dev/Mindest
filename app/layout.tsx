import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const beVietnam = localFont({
  src: [
    { path: "../public/fonts/BeVietnamPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/BeVietnamPro-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/BeVietnamPro-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/BeVietnamPro-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-be-vietnam",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Mindest – Tổ ấm cho tâm trí",
    template: "%s · Mindest",
  },
  description:
    "Một bài nhận diện phong cách ứng phó dành cho người trẻ 12–22 tuổi Việt Nam. 16 chân dung, lời khuyên sơ cứu cảm xúc và báo cáo riêng — tất cả chỉ trên thiết bị của bạn.",
  applicationName: "Mindest",
  keywords: [
    "Mindest",
    "tâm lý học đường",
    "phong cách ứng phó",
    "sức khỏe tinh thần",
    "người trẻ Việt Nam",
  ],
  authors: [{ name: "Mindest" }],
  creator: "Mindest",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Mindest",
    title: "Mindest – Tổ ấm cho tâm trí",
    description:
      "Hiểu cách bạn phản ứng với áp lực, nhận một chân dung tâm lý và những lời khuyên nhẹ nhàng, cụ thể. Không lưu dữ liệu, không phán xét.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindest – Tổ ấm cho tâm trí",
    description:
      "Hiểu cách bạn phản ứng với áp lực, nhận một chân dung tâm lý và những lời khuyên nhẹ nhàng, cụ thể.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#121512" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="min-h-dvh font-sans">
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-moss-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream-50"
        >
          Bỏ qua điều hướng
        </a>
        {children}
      </body>
    </html>
  );
}
