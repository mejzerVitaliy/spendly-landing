"use client";

import { Apple, Play } from "lucide-react";
import { useState, type FormEvent } from "react";
import { WEB3FORMS_KEY } from "@/lib/config";

// Update when app is published
const APP_STORE_URL = "https://apps.apple.com";
const GOOGLE_PLAY_URL = "https://play.google.com";

type Status = "idle" | "loading" | "success" | "error";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "[Spendly AI] Waitlist signup",
          email,
          message: "New waitlist signup",
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative top border */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.25), transparent)" }}
      />

      {/* Large glow blob */}
      <div className="animate-glow-pulse pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="w-[700px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.1), rgba(129,140,248,0.06), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span
            className="flex h-2 w-2 rounded-full animate-pulse"
            style={{ background: "#22D3EE", boxShadow: "0 0 6px #22D3EE" }}
          />
          <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: "#737373" }}>
            Coming soon
          </span>
        </div>

        <h2
          className="font-bold tracking-tight mb-6 leading-[1.05]"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#F2F2F2" }}
        >
          Be the first to{" "}
          <span className="gradient-text">take control</span>
        </h2>

        <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "#737373" }}>
          Spendly AI is in active development. Leave your email — we&apos;ll notify
          you the moment it&apos;s available on the App Store and Google Play.
        </p>

        {/* Waitlist form */}
        {status === "success" ? (
          <div
            className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 mb-10"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-medium" style={{ color: "#22C55E" }}>
              You&apos;re on the list! We&apos;ll let you know when we launch.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(38,38,38,0.8)",
                color: "#F2F2F2",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(38,38,38,0.8)")}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary px-7 py-3.5 text-sm shrink-0"
            >
              {status === "loading" ? "Sending…" : "Notify Me"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-xs mb-6" style={{ color: "#EF4444" }}>
            Something went wrong. Email us directly at{" "}
            <a href="mailto:support@spendly-ai.com" style={{ color: "#22D3EE" }}>support@spendly-ai.com</a>
          </p>
        )}

        {/* Store badges — coming soon */}
        <p className="text-xs mb-4 uppercase tracking-widest" style={{ color: "#4a4a4a" }}>Coming soon to</p>
        <div className="flex items-center justify-center gap-4 flex-wrap opacity-50">
          <StoreBadge href={APP_STORE_URL} icon={<Apple size={20} color="#F2F2F2" />} store="App Store" sub="Download on the" />
          <StoreBadge href={GOOGLE_PLAY_URL} icon={<Play size={20} color="#F2F2F2" />} store="Google Play" sub="Get it on" />
        </div>
      </div>
    </section>
  );
}

function StoreBadge({
  href,
  icon,
  store,
  sub,
}: {
  href: string;
  icon: React.ReactNode;
  store: string;
  sub: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-ghost flex items-center gap-3 px-6 py-3"
      style={{ minWidth: 170, pointerEvents: "none" }}
    >
      {icon}
      <div className="text-left">
        <p className="text-[9px] leading-none mb-0.5" style={{ color: "#737373" }}>{sub}</p>
        <p className="text-sm font-semibold" style={{ color: "#F2F2F2" }}>{store}</p>
      </div>
    </a>
  );
}
