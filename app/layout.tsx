import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hát du — Giao du là phải chat",
  description:
    "Ứng dụng nhắn tin được tạo ra cho những cuộc trò chuyện có ý nghĩa. Chặn spam tự động, sticker độc quyền, AI hiểu tiếng Việt.",
  keywords: "hát du, chat, nhắn tin, ứng dụng chat, tiếng Việt, AI, sticker",
  openGraph: {
    title: "hát du — Giao du là phải chat",
    description: "Ứng dụng nhắn tin được tạo ra cho những cuộc trò chuyện có ý nghĩa.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
