export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-sm">H</span>
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                hát du
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Giao du là phải chat.
              <br />
              Được tạo ra cho những cuộc trò chuyện có ý nghĩa.
            </p>
            <div className="flex gap-3">
              {/* Social icons */}
              {[
                {
                  href: "#",
                  label: "Facebook",
                  path: "M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z",
                },
                {
                  href: "#",
                  label: "TikTok",
                  path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest">
              Công ty
            </h3>
            <ul className="space-y-1">
              {["Về chúng tôi", "Blog", "Tuyển dụng", "Báo chí"].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-red-500 transition-colors flex-shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest">
              Pháp lý
            </h3>
            <ul className="space-y-1">
              {["Điều khoản sử dụng", "Chính sách bảo mật", "Xóa tài khoản", "Cookie"].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-red-500 transition-colors flex-shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">
              Liên hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@duhat.vn"
                  className="hover:text-red-400 transition-colors"
                >
                  info@duhat.vn
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>1900 23 23 89 — Nhánh 0</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  1152 Đường Láng, Phường Láng Thượng,
                  <br />
                  Hà Nội
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} hát du. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full">
              Made in 🇻🇳 Vietnam
            </span>
            <span className="text-xs px-2 py-1 bg-red-900/50 text-red-400 rounded-full">
              Ra mắt 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
