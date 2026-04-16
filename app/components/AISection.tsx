"use client";

import { useEffect, useRef } from "react";

const AI_FEATURES = [
  {
    icon: "✍️",
    title: "Soạn tin nhắn",
    desc: "AI gợi ý cách diễn đạt phù hợp ngữ cảnh và văn hóa Việt",
  },
  {
    icon: "🌐",
    title: "Dịch thuật",
    desc: "Dịch tin nhắn sang nhiều ngôn ngữ ngay trong cuộc trò chuyện",
  },
  {
    icon: "📝",
    title: "Tóm tắt",
    desc: "Tóm tắt nhanh chuỗi hội thoại dài khi bạn bỏ lỡ tin nhắn",
  },
  {
    icon: "💡",
    title: "Gợi ý thông minh",
    desc: "Trả lời nhanh với gợi ý câu phù hợp từ AI hiểu tiếng Việt",
  },
];

export default function AISection() {
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
      id="ai"
      ref={sectionRef}
      className="py-28 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 text-red-600 font-semibold text-sm">
            <div className="w-6 h-0.5 bg-red-600" />
            Trí tuệ nhân tạo
            <div className="w-6 h-0.5 bg-red-600" />
          </div>
          <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 text-4xl md:text-5xl font-black text-gray-900">
            AI hiểu tiếng Việt.{" "}
            <span className="gradient-text">Thật sự.</span>
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-lg text-gray-500 max-w-2xl mx-auto">
            Trợ lý AI tích hợp sẵn, hỗ trợ soạn tin nhắn, dịch thuật và tóm tắt
            hội thoại với khả năng hiểu ngôn ngữ tiếng Việt tự nhiên.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Chat mockup */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-indigo-50 rounded-3xl -z-10" />
            <div className="p-8">
              {/* AI chat window */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-rose-600 px-5 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-lg">🤖</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">AI hát du</div>
                    <div className="text-red-200 text-xs">
                      Luôn sẵn sàng hỗ trợ
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-3 bg-gray-50">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">🤖</span>
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm text-sm text-gray-700 max-w-[85%]">
                      Xin chào! Tôi có thể giúp gì cho bạn?
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-red-600 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white max-w-[85%]">
                      Giúp tôi tóm tắt nhóm chat này
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">🤖</span>
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm text-sm text-gray-700 max-w-[85%]">
                      <span className="font-semibold text-red-600">
                        Tóm tắt:
                      </span>{" "}
                      Nhóm đang thảo luận về kế hoạch đi chơi cuối tuần. Mọi
                      người đồng ý đi Đà Lạt vào thứ 7. 🏔️
                    </div>
                  </div>

                  {/* Typing */}
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">🤖</span>
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        {[0, 150, 300].map((delay) => (
                          <div
                            key={delay}
                            className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                            style={{ animationDelay: `${delay}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="px-4 py-3 bg-white border-t border-gray-100">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <span className="text-gray-400 text-sm flex-1">
                      Hỏi AI hát du...
                    </span>
                    <button className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-5">
            {AI_FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 feature-card bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 shadow-sm hover:shadow-md"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
