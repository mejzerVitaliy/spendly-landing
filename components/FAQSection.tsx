"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Where is my data stored?",
    a: "Your financial data is stored on servers located in the European Union. Data is encrypted in transit using TLS 1.3. Passwords are stored as bcrypt hashes — never in plain text. Authentication tokens on your device are protected by iOS Keychain and Android Keystore.",
  },
  {
    q: "Can tax authorities or third parties access my transactions?",
    a: "No. Your financial data is private and accessible only to you. We do not share your data with any government agency, advertiser, or third party — unless legally compelled by a valid court order. We will notify you to the extent legally permitted if such a request is made.",
  },
  {
    q: "What AI model powers Spendly AI?",
    a: "Spendly uses OpenAI's GPT models for text and voice transaction parsing, and for the AI Coach deep analysis feature. When you use Text AI or Voice AI, your input is sent to OpenAI's API for processing. Voice audio is not stored by Spendly after processing.",
  },
  {
    q: "Do I need an account to use the app?",
    a: "No. You can use Spendly AI in full guest mode — no email or password required. Your data is stored locally. You can create an account later to sync data across devices and unlock cloud backup.",
  },
  {
    q: "How is this different from my bank app or Revolut?",
    a: "Bank apps and Revolut only track money inside their own system. Spendly AI works with all your money — cash, cards from any bank, foreign accounts, digital wallets — giving you a complete financial picture in one place. You control the data, not the bank.",
  },
  {
    q: "How is this different from a spreadsheet or Notion tracker?",
    a: "Spreadsheets require discipline and manual data entry — most people stop after a week. Spendly AI lets you log an expense in under 3 seconds by typing or speaking naturally. The AI categorizes and organizes automatically, so you actually stick with it.",
  },
  {
    q: "What currencies are supported?",
    a: "Spendly AI supports 100+ currencies with live exchange rates. Set a main display currency and every wallet balance — regardless of which currency it was entered in — is automatically converted and shown in your preferred currency.",
  },
  {
    q: "Is Spendly AI really free?",
    a: "Yes, Spendly AI is free to download and use. The app is currently in active development and will be available on the App Store and Google Play. Join the waitlist to be notified at launch.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.25), transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: "#737373" }}>
              FAQ
            </span>
          </div>
          <h2
            className="font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#F2F2F2" }}
          >
            Common questions,{" "}
            <span className="gradient-text">honest answers</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "#737373" }}>
            Everything you want to know before trusting an app with your financial data.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: open === i ? "rgba(22,22,22,0.9)" : "rgba(17,17,17,0.5)",
                border: open === i ? "1px solid rgba(129,140,248,0.25)" : "1px solid rgba(38,38,38,0.6)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold leading-snug" style={{ color: "#F2F2F2" }}>
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: open === i ? "rgba(129,140,248,0.15)" : "rgba(255,255,255,0.04)",
                    border: open === i ? "1px solid rgba(129,140,248,0.3)" : "1px solid rgba(38,38,38,0.6)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke={open === i ? "#818CF8" : "#737373"} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? 300 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#737373" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-10" style={{ color: "#4a4a4a" }}>
          More questions?{" "}
          <a href="#contact" className="underline transition-colors hover:text-foreground" style={{ color: "#737373" }}>
            Contact us
          </a>
          {" "}— we respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
