"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden gradient-bg noise-overlay flex flex-col"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-500/20 rounded-full blur-3xl blob pointer-events-none" />
      <div
        className="absolute bottom-1/3 -right-20 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl blob pointer-events-none"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating sticker emojis — only in side gutters, away from content */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <span className="absolute top-[18%] left-[3%] text-4xl sticker-float opacity-60 hidden xl:block">😄</span>
        <span className="absolute top-[40%] left-[2%] text-3xl sticker-float-delay opacity-50 hidden xl:block">💬</span>
        <span className="absolute bottom-[25%] left-[4%] text-4xl sticker-float-delay-2 opacity-55 hidden xl:block">🎉</span>
        <span className="absolute top-[15%] right-[3%] text-4xl sticker-float-delay opacity-60 hidden xl:block">🛡️</span>
        <span className="absolute top-[42%] right-[2%] text-3xl sticker-float opacity-50 hidden xl:block">✨</span>
        <span className="absolute bottom-[20%] right-[4%] text-4xl sticker-float-delay-2 opacity-55 hidden xl:block">🤖</span>
      </div>

      {/* Main content — 2-column on lg: text left, phone right */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full py-28 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── Left: text content ── */}
            <div className="text-center lg:text-left space-y-6">
              {/* Badge */}
              <div
                className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-sm"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Sắp ra mắt — 2026
              </div>

              {/* App name */}
              <h1
                className="animate-on-scroll text-7xl md:text-8xl font-black text-white tracking-tight leading-none"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
              >
                hát du
              </h1>

              {/* Tagline */}
              <p
                className="animate-on-scroll text-2xl md:text-4xl font-bold text-white/90 leading-tight"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
              >
                Giao du là phải chat.
              </p>

              {/* Description */}
              <p
                className="animate-on-scroll text-base md:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
              >
                Được tạo ra cho những cuộc trò chuyện có ý nghĩa.
                Chat không giới hạn, bảo mật tối đa, hoàn toàn miễn phí.
              </p>

              {/* CTA buttons */}
              <div
                className="animate-on-scroll flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
              >
                <button className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-red-700 font-bold text-sm rounded-full hover:bg-red-50 transition-all duration-200 shadow-2xl hover:scale-105">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.38.74 3.2.8 1.21-.24 2.38-.93 3.67-.84 1.58.13 2.77.77 3.54 1.97-3.24 1.94-2.7 6.45.59 7.74-.65 1.7-1.52 3.37-3 4.21zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Tải trên App Store
                </button>
                <button className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/10 border border-white/30 text-white font-bold text-sm rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm hover:scale-105">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.18 23.76c.38.21.8.24 1.22.08l12.1-6.97-2.76-2.76-10.56 9.65zm15.6-9.03l2.56-1.47c.67-.38.67-1.33 0-1.71l-2.56-1.47-3.08 3.08 3.08 3.08zm-16.5-11.5l10.56 9.65 2.76-2.76L3.4.12C3-.04 2.56 0 2.18.21.8.6.8 2.17 1.21 2.5L2.28 3.23z" />
                  </svg>
                  Tải trên Google Play
                </button>
              </div>

              {/* Trust badges */}
              <div
                className="animate-on-scroll flex flex-wrap justify-center lg:justify-start gap-4 text-white/60 text-sm pt-2"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
              >
                {[
                  { icon: "🔒", text: "Miễn phí hoàn toàn" },
                  { icon: "🛡️", text: "Chặn spam tự động" },
                  { icon: "🇻🇳", text: "Thuần Việt" },
                  { icon: "🤖", text: "AI tích hợp" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-1.5 whitespace-nowrap">
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: phone mockup ── */}
            <div
              className="animate-on-scroll flex justify-center lg:justify-end"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
            >
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-red-500/30 rounded-[50px] blur-2xl scale-95" />

                {/* Phone frame */}
                <div className="relative w-56 h-[480px] bg-gray-900 rounded-[44px] border-4 border-gray-700 shadow-2xl overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-10" />

                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-red-900 via-rose-950 to-gray-950 flex flex-col">
                    {/* Status bar */}
                    <div className="pt-6 px-4 pb-2 flex justify-between text-white/70 text-xs">
                      <span>9:41</span>
                      <span>●●●</span>
                    </div>

                    {/* Chat UI */}
                    <div className="flex-1 px-3 py-2 space-y-3 overflow-hidden">
                      <div className="flex items-end gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">M</div>
                        <div className="bg-white/15 backdrop-blur-sm rounded-2xl rounded-bl-sm px-3 py-2 text-white text-xs max-w-[70%]">
                          Hôm nay đi ăn gì? 😄
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-red-500 rounded-2xl rounded-br-sm px-3 py-2 text-white text-xs max-w-[70%]">
                          Mình đang nghĩ món bún bò 🍜
                        </div>
                      </div>
                      <div className="flex items-end gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">M</div>
                        <div className="text-4xl">🎉</div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-red-500/60 rounded-2xl px-4 py-2">
                          <div className="flex gap-1">
                            {[0, 150, 300].map((d) => (
                              <div key={d} className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Input bar */}
                    <div className="px-3 pb-4 pt-2">
                      <div className="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                        <span className="flex-1 text-white/40 text-xs">Nhắn tin...</span>
                        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
