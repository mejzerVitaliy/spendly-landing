type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
};

const features: Feature[] = [
  {
    accent: "#22D3EE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2z" stroke="#22D3EE" strokeWidth="1.6" />
        <path d="M9 9l6 6M15 9l-6 6" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 20c0-3.3 4-6 9-6s9 2.7 9 6" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="19" cy="5" r="3" fill="#22D3EE" opacity="0.3" />
        <path d="M18 5h2M19 4v2" stroke="#22D3EE" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "AI Transaction Creation",
    description:
      "Type or speak your transactions in plain English. AI instantly understands context, extracts amounts, and categorizes everything automatically.",
  },
  {
    accent: "#818CF8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="13" rx="2" stroke="#818CF8" strokeWidth="1.6" />
        <path d="M2 10h20" stroke="#818CF8" strokeWidth="1.6" />
        <path d="M6 14h4M15 14h3" stroke="#818CF8" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6 3l-2 3M18 3l2 3" stroke="#818CF8" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Smart Wallets",
    description:
      "Manage multiple wallets — cash, cards, digital — with real-time balance updates, instant sync, and clean visual hierarchy.",
  },
  {
    accent: "#22C55E",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 20V8l5-4 4 3 5-5 4 4v14H3z" stroke="#22C55E" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 14h5V20H3zM11 11h3v9h-3zM17 8h4v12h-4z" stroke="#22C55E" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: "Expense Analytics",
    description:
      "Beautiful charts and spending breakdowns that reveal patterns in your finances. Know exactly where every dollar goes.",
  },
  {
    accent: "#EAB308",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#EAB308" strokeWidth="1.6" />
        <path d="M12 6v6l4 2" stroke="#EAB308" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 2.5C9.3 2 10.6 1.7 12 1.7" stroke="#EAB308" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 21l1-3-3-1" stroke="#EAB308" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Multi-currency Support",
    description:
      "Track expenses in any currency with live exchange rates and automatic conversion. Travel anywhere, stay organized.",
  },
  {
    accent: "#C084FC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="#C084FC" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="7" cy="7" r="1.5" fill="#C084FC" />
        <path d="M12 17l2-2M15 14l2-2" stroke="#C084FC" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Categories & Budgeting",
    description:
      "Organize with smart categories and set per-category budgets. See real-time progress bars so you never overspend.",
  },
  {
    accent: "#0EA5E9",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#0EA5E9" strokeWidth="1.6" />
        <path d="m21 21-4.35-4.35" stroke="#0EA5E9" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 11h6M11 8v6" stroke="#0EA5E9" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Fast Search & Filters",
    description:
      "Instantly find any transaction with full-text search, smart filters by category, wallet, date range, or amount.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Faint background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.04), rgba(129,140,248,0.03), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: "#737373" }}>
              Everything you need
            </span>
          </div>
          <h2
            className="font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#F2F2F2" }}
          >
            Built for modern finance
          </h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#737373" }}>
            Every feature is designed to make expense tracking effortless, insightful,
            and actually enjoyable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, accent }: Feature) {
  return (
    <div className="glass-card rounded-2xl p-7 group cursor-default">
      {/* Icon container */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${accent}12`,
          border: `1px solid ${accent}22`,
        }}
      >
        {icon}
      </div>

      <h3 className="font-semibold text-base mb-2.5" style={{ color: "#F2F2F2" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
        {description}
      </p>

      {/* Hover accent line */}
      <div
        className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${accent}60, transparent)` }}
      />
    </div>
  );
}
