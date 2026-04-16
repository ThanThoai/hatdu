"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-sm">H</span>
          </div>
          <span
            className={`font-black text-xl tracking-tight ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            hát du
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Tính năng", href: "#features" },
            { label: "Bảo mật", href: "#security" },
            { label: "AI", href: "#ai" },
            { label: "Giới thiệu", href: "#about" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-red-500 ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-red-500/30 hover:scale-105">
            Tải miễn phí
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`space-y-1.5 ${scrolled ? "text-gray-900" : "text-white"}`}
          >
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-gray-900" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-gray-900" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-gray-900" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 space-y-3">
          {[
            { label: "Tính năng", href: "#features" },
            { label: "Bảo mật", href: "#security" },
            { label: "AI", href: "#ai" },
            { label: "Giới thiệu", href: "#about" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium hover:text-red-600 py-1"
            >
              {item.label}
            </a>
          ))}
          <button className="w-full mt-2 px-5 py-2.5 bg-red-600 text-white font-semibold rounded-full text-sm">
            Tải miễn phí
          </button>
        </div>
      )}
    </nav>
  );
}
