"use client";

import { useEffect, useRef } from "react";

const FEATURES = [
  {
    icon: "💬",
    title: "Chat nhóm không giới hạn",
    desc: "Tạo nhóm với hàng nghìn thành viên, tổ chức cuộc trò chuyện dễ dàng.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: "📁",
    title: "Chia sẻ file & video",
    desc: "Gửi tài liệu, hình ảnh, video với tốc độ cao. Không giới hạn định dạng.",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: "🎙️",
    title: "Tin nhắn giọng nói",
    desc: "Ghi âm và gửi tin nhắn thoại chỉ với một chạm. Nghe lại bất cứ lúc nào.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: "🔔",
    title: "Thông báo thông minh",
    desc: "Nhận thông báo đúng lúc, lọc thông minh để không bỏ lỡ điều quan trọng.",
    color: "from-red-500 to-rose-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: "📱",
    title: "Đồng bộ đa thiết bị",
    desc: "Truy cập mọi cuộc trò chuyện từ điện thoại, máy tính bảng hay PC.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: "🔍",
    title: "Tìm kiếm nâng cao",
    desc: "Tìm kiếm tin nhắn, file, hình ảnh bất kỳ thời điểm nào trong lịch sử chat.",
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
];

export default function FeaturesGrid() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 text-red-600 font-semibold text-sm">
            <div className="w-6 h-0.5 bg-red-600" />
            Tính năng
            <div className="w-6 h-0.5 bg-red-600" />
          </div>
          <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 text-4xl md:text-5xl font-black text-gray-900">
            Mọi thứ bạn cần
            <br />
            <span className="gradient-text">trong một ứng dụng.</span>
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-lg text-gray-500 max-w-xl mx-auto">
            Chat, chia sẻ, kết nối — tất cả tính năng thiết yếu và nhiều hơn thế nữa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700 feature-card ${feature.bg} border ${feature.border} rounded-2xl p-6 space-y-3`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl shadow-md`}
              >
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
