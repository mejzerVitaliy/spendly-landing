"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const screens = [
  {
    id: "home",
    src: "/screenshots/screen-home.jpg",
    title: "Everything at a glance",
    description:
      "Total balance, income vs expenses, and your full transaction history — filterable by week, month, or year. Search any transaction instantly.",
    tag: "Home",
    color: "#22D3EE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "create",
    src: "/screenshots/screen-create.jpg",
    title: "Log a transaction in seconds",
    description:
      "Choose expense, income, or transfer. Pick a wallet, currency, category, and optionally set it to repeat. Or skip the form — just type or speak with AI.",
    tag: "Add",
    color: "#22C55E",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "insights",
    src: "/screenshots/screen-insights.jpg",
    title: "Your financial snapshot",
    description:
      "Automatic insight cards: cash flow status, savings rate, top expense category, peak spending day, and how many days you actively tracked. Updated every period.",
    tag: "Insights",
    color: "#818CF8",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "insights-ai",
    src: "/screenshots/screen-insights-ai.jpg",
    title: "AI Coach — deep analysis on demand",
    description:
      "Tap AI Coach for a personalized deep-dive: net income analysis, unusual spending patterns, savings opportunities. Powered by GPT, updated each session.",
    tag: "AI Coach",
    color: "#C084FC",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "analytics",
    src: "/screenshots/screen-analytics.jpg",
    title: "Charts that tell the real story",
    description:
      "Cash flow trends, income vs expense ratios, and a full category breakdown. Toggle between Analytics and Insights tabs. Filter by week, month, or year.",
    tag: "Analytics",
    color: "#0EA5E9",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "wallets",
    src: "/screenshots/screen-wallets.jpg",
    title: "Multiple wallets, one clear total",
    description:
      "Cash, debit, credit, savings, or custom — each with its own balance. Set a default wallet for quick entry. Archive wallets you no longer use.",
    tag: "Wallets",
    color: "#EAB308",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M17 12a2 2 0 0 0 0 4h4v-4h-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "categories",
    src: "/screenshots/screen-categories.jpg",
    title: "Categories built for speed",
    description:
      "Pin up to 10 favorite categories for instant access. Separate lists for expenses and income. AI picks the right one automatically when you use text or voice input.",
    tag: "Categories",
    color: "#F97316",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AppShowcaseSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((idx: number) => setActive(idx), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => goTo((active + 1) % screens.length), 4000);
    return () => clearInterval(t);
  }, [active, goTo, paused]);

  const screen = screens[active];

  return (
    <section id="app-showcase" className="py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[180px]"
        style={{
          background: `radial-gradient(ellipse, ${screen.color}18, transparent 70%)`,
          transition: "background 0.8s ease",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full" style={{ background: "#22D3EE", boxShadow: "0 0 6px #22D3EE" }} />
            <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: "#737373" }}>
              Real app. Real screens.
            </span>
          </div>
          <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#F2F2F2" }}>
            See it in{" "}
            <span className="gradient-text">action</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#737373" }}>
            Every screen shown is the real app — no mockups, no marketing fluff.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: description */}
          <div
            className="flex-1 order-2 lg:order-1 animate-fade-up"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Tab pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {screens.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300"
                  style={
                    i === active
                      ? { background: s.color, color: "#080808", boxShadow: `0 0 16px ${s.color}50` }
                      : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#737373" }
                  }
                >
                  <span style={{ color: i === active ? "#080808" : s.color }}>{s.icon}</span>
                  {s.tag}
                </button>
              ))}
            </div>

            <div style={{ minHeight: 140 }}>
              <h3 className="text-3xl font-bold mb-4 leading-tight" style={{ color: "#F2F2F2" }}>
                {screen.title}
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "#737373", maxWidth: 420 }}>
                {screen.description}
              </p>
            </div>

            <div className="flex items-center gap-2 mt-10">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="h-[3px] rounded-full transition-all duration-300"
                  style={{ width: i === active ? 32 : 10, background: i === active ? screen.color : "rgba(115,115,115,0.3)" }}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={() => goTo((active - 1 + screens.length) % screens.length)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#737373" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => goTo((active + 1) % screens.length)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#737373" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-xs ml-2" style={{ color: "#4a4a4a" }}>
                {active + 1} / {screens.length}
              </span>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="order-1 lg:order-2 shrink-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative" style={{ width: 320, height: 680 }}>
              <div
                className="absolute -inset-8 rounded-[60px] blur-[80px]"
                style={{ background: screen.color, opacity: 0.15, transition: "background 0.6s ease" }}
              />
              <div
                className="relative w-full h-full rounded-[48px]"
                style={{
                  background: "#0e0e0e",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.10), inset 0 0 0 1px rgba(0,0,0,0.8), 0 40px 100px rgba(0,0,0,0.7)",
                  padding: "10px",
                }}
              >
                <div className="relative w-full h-full rounded-[40px] overflow-hidden" style={{ background: "#000" }}>
                  {/* Dynamic Island */}
                  <div
                    className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 rounded-full"
                    style={{ width: 76, height: 22, background: "#000", boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
                  />

                  {/* All screenshots pre-rendered — CSS opacity toggle = zero extra network requests */}
                  {screens.map((s, i) => (
                    <div
                      key={s.id}
                      style={{ position: "absolute", inset: 0, opacity: i === active ? 1 : 0, transition: "opacity 0.25s ease" }}
                    >
                      <Image src={s.src} alt={s.title} fill className="object-cover object-top" unoptimized priority />
                    </div>
                  ))}

                  <div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 rounded-full"
                    style={{ width: 100, height: 4, background: "rgba(255,255,255,0.25)" }}
                  />
                </div>
              </div>

              {/* Side buttons */}
              <div className="absolute rounded-l-sm" style={{ right: -4, top: 160, width: 4, height: 80, background: "#1c1c1c", boxShadow: "inset -1px 0 0 rgba(255,255,255,0.05)" }} />
              <div className="absolute rounded-r-sm" style={{ left: -4, top: 120, width: 4, height: 32, background: "#1c1c1c" }} />
              <div className="absolute rounded-r-sm" style={{ left: -4, top: 170, width: 4, height: 60, background: "#1c1c1c" }} />
              <div className="absolute rounded-r-sm" style={{ left: -4, top: 245, width: 4, height: 60, background: "#1c1c1c" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
