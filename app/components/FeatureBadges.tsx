"use client";

const badges = [
  { icon: "💬", label: "Chat nhóm" },
  { icon: "📁", label: "Chia sẻ file" },
  { icon: "🎥", label: "Gửi video" },
  { icon: "🎙️", label: "Ghi âm" },
  { icon: "🔍", label: "Tìm kiếm" },
  { icon: "🔔", label: "Thông báo thông minh" },
  { icon: "📱", label: "Đa thiết bị" },
  { icon: "🔐", label: "Mã hóa đầu cuối" },
];

export default function FeatureBadges() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium hover:border-red-300 hover:bg-red-50 hover:text-red-700 transition-all duration-200 cursor-default"
            >
              <span className="text-base">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
