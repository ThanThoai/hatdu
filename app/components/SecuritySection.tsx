"use client";

import { useEffect, useRef } from "react";

export default function SecuritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-8");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="security"
      ref={sectionRef}
      className="py-28 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl" />

            <div className="relative p-10">
              {/* Shield icon */}
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-200">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "100%", label: "Miễn phí" },
                  { number: "0đ", label: "Phí đăng ký" },
                  { number: "24/7", label: "Bảo vệ liên tục" },
                  { number: "∞", label: "Chặn spam" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-4 text-center shadow-sm border border-red-100"
                  >
                    <div className="text-2xl font-black text-red-600">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Blocked notification mockup */}
              <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm border border-red-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">
                    Tin nhắn spam đã bị chặn
                  </div>
                  <div className="text-xs text-gray-500">
                    Tự động phát hiện và ngăn chặn
                  </div>
                </div>
                <div className="ml-auto text-xs text-red-500 font-medium bg-red-50 px-2 py-1 rounded-full">
                  Đã chặn
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center gap-2 text-red-500 font-semibold text-sm mb-4">
                <div className="w-6 h-0.5 bg-red-500" />
                Bảo vệ tự động
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Không spam.
                <br />
                <span className="gradient-text">Không lừa đảo.</span>
                <br />
                Miễn phí.
              </h2>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-lg text-gray-600 leading-relaxed">
                hát du tự động phát hiện và chặn tin nhắn spam, cuộc gọi lừa đảo
                mà không tốn bất kỳ chi phí nào. Không cần đăng ký gói cao cấp,
                không cần trả thêm phí.
              </p>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 gap-2">
              {[
                { text: "Chặn spam tin nhắn tự động", icon: "🚫" },
                { text: "Cảnh báo cuộc gọi lừa đảo", icon: "⚠️" },
                { text: "Mã hóa đầu cuối (end-to-end)", icon: "🔐" },
                { text: "Không bán dữ liệu người dùng", icon: "🛡️" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                  <svg className="w-4 h-4 text-green-500 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
