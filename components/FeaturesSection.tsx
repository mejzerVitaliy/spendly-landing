type Feature = {
  icon: React.ReactNode;
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  tag?: string;
};

const features: Feature[] = [
  {
    accent: "#22D3EE",
    eyebrow: "Text & Voice AI",
    tag: "Core feature",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="#22D3EE" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 19v4M8 23h8" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Just say it — AI does the rest",
    description:
      "Type \"lunch 12.50 at work\" or speak it aloud. AI extracts the amount, picks the right category, and adds the transaction in under a second. No forms. No dropdowns.",
  },
  {
    accent: "#818CF8",
    eyebrow: "Smart Wallets",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="13" rx="2" stroke="#818CF8" strokeWidth="1.6" />
        <path d="M2 10h20" stroke="#818CF8" strokeWidth="1.6" />
        <path d="M17 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" fill="#818CF8" />
      </svg>
    ),
    title: "Separate travel, work & personal money",
    description:
      "Create wallets for different spending buckets — cash, debit, savings, or custom. See each balance independently, or as one total automatically converted to your currency.",
  },
  {
    accent: "#22C55E",
    eyebrow: "AI Insights & Coach",
    tag: "Unique to Spendly",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#22C55E" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#22C55E" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: "Your personal finance coach, built in",
    description:
      "Not just charts. The AI Coach reads your spending patterns and tells you what matters: savings rate, peak spending days, concentration risks — in plain language.",
  },
  {
    accent: "#EAB308",
    eyebrow: "Multi-Currency",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#EAB308" strokeWidth="1.6" />
        <path d="M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18M3 12h18" stroke="#EAB308" strokeWidth="1.6" />
      </svg>
    ),
    title: "Spend in euros, see it in dollars",
    description:
      "Add transactions in any of 100+ currencies. Set your main display currency and every wallet balance recalculates with live exchange rates — instantly.",
  },
  {
    accent: "#F97316",
    eyebrow: "Recurring Transactions",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M1 4v6h6" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 20v-6h-6" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Set it once, never log it again",
    description:
      "Mark any transaction as recurring — daily, weekly, every 2 weeks, monthly, or yearly. Rent, subscriptions, salary — tracked automatically without lifting a finger.",
  },
  {
    accent: "#C084FC",
    eyebrow: "Works with everything",
    tag: "vs bank apps",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#C084FC" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#C084FC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Any bank. Any cash. Any country.",
    description:
      "Unlike Revolut or your bank app, Spendly AI isn't tied to one account. Track cash, cards from any bank, foreign accounts, and crypto wallets — all in one place.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.04), rgba(129,140,248,0.03), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: "#737373" }}>
              Why Spendly AI
            </span>
          </div>
          <h2
            className="font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#F2F2F2" }}
          >
            Manual tracking is dead.{" "}
            <span className="gradient-text">AI does it better.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#737373" }}>
            Most finance apps make you do the work. Spendly AI flips that — you just describe
            what happened, and it handles the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        {/* Differentiation callout */}
        <div
          className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: "rgba(34,211,238,0.04)",
            border: "1px solid rgba(34,211,238,0.12)",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#22D3EE" strokeWidth="1.6" />
              <path d="M12 8v4M12 16h.01" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: "#F2F2F2" }}>
              Why not just use Notion, a spreadsheet, or my bank app?
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
              Spreadsheets require discipline. Bank apps only see their own transactions.
              Spendly AI works with <strong style={{ color: "#D4D4D4" }}>all your money</strong> — cash, any bank, any currency —
              and uses AI so you spend <strong style={{ color: "#D4D4D4" }}>seconds, not minutes</strong> logging each expense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, eyebrow, description, accent, tag }: Feature) {
  return (
    <div className="glass-card rounded-2xl p-7 group cursor-default relative">
      {tag && (
        <span
          className="absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
        >
          {tag}
        </span>
      )}

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${accent}12`, border: `1px solid ${accent}22` }}
      >
        {icon}
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h3 className="font-semibold text-base mb-2.5" style={{ color: "#F2F2F2" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
        {description}
      </p>

      <div
        className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${accent}60, transparent)` }}
      />
    </div>
  );
}
