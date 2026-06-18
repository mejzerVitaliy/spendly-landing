const steps = [
  {
    number: "01",
    accent: "#22D3EE",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#22D3EE" strokeWidth="1.5" />
        <path d="M8 12h8M12 16V8" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Add Transactions",
    description:
      "Type naturally — 'coffee $5' or 'grocery 42 usd' — or just speak it aloud. AI parses the intent, amount, and category instantly. Manual entry is always available too.",
    tag: "AI & Voice",
  },
  {
    number: "02",
    accent: "#818CF8",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="9" height="9" rx="2" stroke="#818CF8" strokeWidth="1.5" />
        <rect x="13" y="3" width="9" height="9" rx="2" stroke="#818CF8" strokeWidth="1.5" />
        <rect x="2" y="14" width="9" height="7" rx="2" stroke="#818CF8" strokeWidth="1.5" />
        <rect x="13" y="14" width="9" height="7" rx="2" stroke="#818CF8" strokeWidth="1.5" />
      </svg>
    ),
    title: "Organize & Budget",
    description:
      "Group transactions by wallet and category automatically. Set monthly budgets per category and watch real-time progress bars keep you on track.",
    tag: "Wallets & Categories",
  },
  {
    number: "03",
    accent: "#22C55E",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 20V8l4.5-5 4 3.5L16 2l5 5v13H3z" stroke="#22C55E" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 14c.5-2 2-3.5 4-3.5s3.5 1.5 4 3.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Analyze & Grow",
    description:
      "Explore beautiful charts, monthly comparisons, and AI-generated insights that reveal exactly where your money goes — so you can spend smarter.",
    tag: "Insights",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Decorative top border glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: "#737373" }}>
              How it works
            </span>
          </div>
          <h2
            className="font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#F2F2F2" }}
          >
            Three steps to clarity
          </h2>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "#737373" }}>
            From your first transaction to deep financial insights — Spendly AI keeps it
            simple at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <StepCard key={step.number} {...step} index={i} />
          ))}
        </div>
      </div>

      {/* Decorative bottom border glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.15), transparent)" }}
      />
    </section>
  );
}

function StepCard({
  number,
  accent,
  icon,
  title,
  description,
  tag,
  index,
}: (typeof steps)[0] & { index: number }) {
  return (
    <div className="relative flex flex-col items-start">
      {/* Chevron connector to next card (desktop only) */}
      {index < steps.length - 1 && (
        <div
          className="hidden md:flex absolute top-[13px] -right-4 lg:-right-6 z-10 w-8 h-8 items-center justify-center rounded-full"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
        </div>
      )}

      {/* Number + icon row */}
      <div className="flex items-center gap-4 mb-6">
        {/* Icon circle */}
        <div
          className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0"
          style={{
            background: `${accent}12`,
            border: `1px solid ${accent}28`,
            boxShadow: `0 0 20px ${accent}10`,
          }}
        >
          {icon}
        </div>

        {/* Step number */}
        <span
          className="text-6xl font-black leading-none select-none"
          style={{
            color: "transparent",
            WebkitTextStroke: `1px ${accent}30`,
          }}
        >
          {number}
        </span>
      </div>

      {/* Tag */}
      <div
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-4 text-[10px] font-semibold tracking-wide uppercase"
        style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}22` }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: accent }}
        />
        {tag}
      </div>

      <h3
        className="text-xl font-bold mb-3 tracking-tight"
        style={{ color: "#F2F2F2" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
        {description}
      </p>

      {/* Vertical connector for mobile */}
      {index < steps.length - 1 && (
        <div
          className="md:hidden mt-8 mb-2 self-center w-px h-10"
          style={{ background: `linear-gradient(to bottom, ${accent}40, transparent)` }}
        />
      )}
    </div>
  );
}
