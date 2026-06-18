const examples = [
  {
    input: 'coffee at starbucks 4.50$',
    emoji: "☕",
    name: "Starbucks",
    sub: "Coffee & Drinks · Auto-categorized",
    amount: "-$4.50",
    color: "#22D3EE",
  },
  {
    input: "🎤  \"grocery store forty two dollars\"",
    emoji: "🛒",
    name: "Grocery Store",
    sub: "Food & Dining · Voice input",
    amount: "-$42.00",
    color: "#22C55E",
  },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">
      {/* Background glow */}
      <div
        className="animate-glow-pulse pointer-events-none absolute inset-[-20%] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.12), rgba(129,140,248,0.06), transparent 70%)" }}
      />

      {/* Main card */}
      <div
        className="relative rounded-3xl p-6"
        style={{
          background: "rgba(14,14,14,0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(38,38,38,0.8)",
          boxShadow: "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,211,238,0.04)",
        }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(34,211,238,0.12)", border: "1px solid rgba(34,211,238,0.2)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.6 2.8-1.6 3.8L20 16H4l4.6-5.2A5 5 0 0 1 7 7a5 5 0 0 1 5-5z" stroke="#22D3EE" strokeWidth="1.6" strokeLinejoin="round"/>
                <path d="M8 16v1a4 4 0 0 0 8 0v-1" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-sm font-medium" style={{ color: "#F2F2F2" }}>AI Transaction Parser</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 rounded-full animate-pulse" style={{ background: "#22C55E" }} />
            <span className="text-[10px] font-medium" style={{ color: "#22C55E" }}>Active</span>
          </div>
        </div>

        {/* Transaction examples */}
        <div className="space-y-4">
          {examples.map((ex, i) => (
            <TransactionExample key={i} {...ex} />
          ))}
        </div>

        {/* Bottom hint */}
        <div
          className="mt-6 pt-4 flex items-center gap-2"
          style={{ borderTop: "1px solid rgba(38,38,38,0.7)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#737373" strokeWidth="1.5"/>
            <path d="M12 8v4l3 3" stroke="#737373" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-[11px]" style={{ color: "#737373" }}>Processes in under 300ms · Works in any language</span>
        </div>
      </div>

      {/* Floating chip — top right, inside bounds */}
      <div
        className="absolute -top-3 -right-3 rounded-2xl px-4 py-2.5"
        style={{
          background: "rgba(14,14,14,0.9)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(38,38,38,0.7)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        <p className="text-[10px] mb-0.5" style={{ color: "#737373" }}>Auto-categorized</p>
        <p className="text-sm font-bold" style={{ color: "#22C55E" }}>97.4% accuracy</p>
      </div>

      {/* Floating chip — bottom left, inside bounds */}
      <div
        className="absolute -bottom-10 -left-8 rounded-2xl px-4 py-2.5"
        style={{
          background: "rgba(14,14,14,0.9)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(38,38,38,0.7)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        <p className="text-[10px] mb-0.5" style={{ color: "#737373" }}>Supported inputs</p>
        <p className="text-sm font-bold" style={{ color: "#F2F2F2" }}>Text + 🎤 Voice</p>
      </div>
    </div>
  );
}

function TransactionExample({
  input,
  emoji,
  name,
  sub,
  amount,
  color,
}: (typeof examples)[0]) {
  return (
    <div className="space-y-2">
      {/* Raw input */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl font-mono text-sm"
        style={{ background: "rgba(22,22,22,0.9)", border: "1px solid rgba(38,38,38,0.7)" }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="#737373" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ color: "#D4D4D4" }}>{input}</span>
      </div>

      {/* Parsed result */}
      <div
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
        style={{ background: `${color}08`, border: `1px solid ${color}20` }}
      >
        <span className="text-xl shrink-0">{emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate" style={{ color: "#F2F2F2" }}>{name}</p>
          <p className="text-[10px]" style={{ color: "#737373" }}>{sub}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-sm font-semibold" style={{ color: "#F2F2F2" }}>{amount}</span>
          <div
            className="w-4 h-4 rounded-full flex items-center justify-center"
            style={{ background: `${color}20` }}
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
