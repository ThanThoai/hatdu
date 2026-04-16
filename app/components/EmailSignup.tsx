"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex w-16 h-16 bg-gradient-to-br from-red-600 to-rose-600 rounded-2xl items-center justify-center mb-6 shadow-xl shadow-red-200">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Nhận quyền truy cập
          <br />
          <span className="gradient-text">sớm nhất.</span>
        </h2>

        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          Đăng ký ngay để nhận quyền truy cập sớm và bộ{" "}
          <span className="text-red-600 font-semibold">sticker độc quyền</span>{" "}
          dành riêng cho những người dùng đầu tiên.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@cua.ban@gmail.com"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3.5 bg-red-600 hover:bg-red-700 disabled:opacity-70 text-white font-bold text-sm rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-red-200 flex items-center justify-center gap-2 min-w-[140px]"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Đang đăng ký...
                  </>
                ) : (
                  "Đăng ký sớm"
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400">
              Chúng tôi không gửi spam. Hủy đăng ký bất kỳ lúc nào.
            </p>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Đăng ký thành công! 🎉
            </h3>
            <p className="text-gray-500">
              Chúng tôi sẽ thông báo khi hát du ra mắt. Hãy kiểm tra hộp thư{" "}
              <span className="font-semibold text-red-600">{email}</span>
            </p>
          </div>
        )}

        {/* Social proof */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="flex -space-x-2">
            {["🧑", "👩", "👨", "🧑‍💼", "👩‍💼"].map((emoji, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-500 border-2 border-white flex items-center justify-center text-sm"
              >
                {emoji}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            <span className="font-bold text-gray-800">1,200+</span> người đã đăng ký
          </p>
        </div>
      </div>
    </section>
  );
}
