"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features",      href: "#features" },
  { label: "See in action", href: "#app-showcase" },
  { label: "How it works",  href: "#how-it-works" },
  { label: "FAQ",           href: "#faq" },
  { label: "Contact",       href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-[padding] duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      {/* Glass overlay fades in as opacity to avoid the white-line flash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: scrolled ? 1 : 0,
          background: "rgba(8,8,8,0.82)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(38,38,38,0.5)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/logo.jpg"
            alt="Spendly AI"
            width={40}
            height={40}
            className="rounded-xl shrink-0"
            style={{ boxShadow: "0 0 14px rgba(34,211,238,0.35)" }}
          />
          <span className="font-semibold text-foreground text-base tracking-tight">Spendly AI</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary px-5 py-2.5 text-sm hidden md:inline-block">
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(38,38,38,0.7)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 8h18M3 12h18M3 16h18" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden relative"
          style={{
            background: "rgba(8,8,8,0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm py-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary px-5 py-2.5 text-sm text-center">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
