"use client";

import { useEffect, useRef } from "react";

const STICKERS = [
  { emoji: "😂", bg: "from-yellow-400 to-orange-400", delay: "0s" },
  { emoji: "🥰", bg: "from-pink-400 to-rose-400", delay: "0.3s" },
  { emoji: "🎉", bg: "from-red-400 to-red-500", delay: "0.6s" },
  { emoji: "😎", bg: "from-blue-400 to-cyan-400", delay: "0.9s" },
  { emoji: "🤩", bg: "from-amber-400 to-yellow-400", delay: "1.2s" },
  { emoji: "😭", bg: "from-indigo-400 to-blue-500", delay: "1.5s" },
  { emoji: "🥳", bg: "from-green-400 to-emerald-400", delay: "1.8s" },
  { emoji: "😤", bg: "from-red-400 to-rose-500", delay: "2.1s" },
  { emoji: "💖", bg: "from-pink-500 to-red-500", delay: "2.4s" },
  { emoji: "🔥", bg: "from-orange-500 to-red-500", delay: "2.7s" },
  { emoji: "🌈", bg: "from-teal-400 to-cyan-500", delay: "3s" },
  { emoji: "✨", bg: "from-red-400 to-red-500", delay: "3.3s" },
];

export default function StickerSection() {
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
              }, i * 100);
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
      ref={sectionRef}
      className="py-28 bg-gradient-to-br from-gray-950 via-red-950 to-gray-950 overflow-hidden relative"
    >
      {/* BG blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className="space-y-6">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center gap-2 text-red-400 font-semibold text-sm mb-4">
                <div className="w-6 h-0.5 bg-red-400" />
                Biểu cảm độc quyền
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Sticker
                <br />
                <span className="text-red-400">chỉ có ở hát du.</span>
              </h2>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-lg text-gray-400 leading-relaxed">
                Bộ sưu tập sticker màu sắc, sinh động được thiết kế riêng cho
                người Việt. Biểu đạt đúng cảm xúc, đúng ngữ cảnh — điều không
                nơi nào khác có được.
              </p>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-2">
              {[
                { text: "Hàng nghìn sticker", emoji: "🎨" },
                { text: "Nghệ sĩ Việt Nam", emoji: "🇻🇳" },
                { text: "Cập nhật liên tục", emoji: "🔄" },
                { text: "Sticker động", emoji: "✨" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium backdrop-blur-sm">
                  <span>{item.emoji}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <button className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-red-900/50">
                Khám phá sticker
              </button>
            </div>
          </div>

          {/* Sticker grid */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-4 gap-3">
              {STICKERS.map((sticker, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${sticker.bg} flex items-center justify-center text-3xl shadow-lg cursor-pointer hover:scale-110 transition-transform`}
                  style={{
                    animationDelay: sticker.delay,
                    animation: `bounce-slow 3s ease-in-out infinite ${sticker.delay}`,
                  }}
                >
                  {sticker.emoji}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              và hàng nghìn sticker khác...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
