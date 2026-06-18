const statCards = [
  {
    label: "Total Spent",
    value: "$2,847",
    sub: "This month",
    change: "−12% vs last",
    positive: false,
    accent: "#22D3EE",
  },
  {
    label: "Amount Saved",
    value: "$1,200",
    sub: "This month",
    change: "+8% vs last",
    positive: true,
    accent: "#22C55E",
  },
  {
    label: "Budget Used",
    value: "68%",
    sub: "Of monthly limit",
    change: "On track",
    positive: true,
    accent: "#818CF8",
  },
];

const categories = [
  { name: "Food & Dining",   pct: 35, color: "#22D3EE",  amount: "$998" },
  { name: "Shopping",        pct: 28, color: "#818CF8",  amount: "$797" },
  { name: "Transport",       pct: 20, color: "#C084FC",  amount: "$569" },
  { name: "Entertainment",   pct: 10, color: "#EAB308",  amount: "$285" },
  { name: "Other",           pct: 7,  color: "#737373",  amount: "$199" },
];

const chartMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 -right-64 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.05), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: "#737373" }}>
              Financial intelligence
            </span>
          </div>
          <h2
            className="font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#F2F2F2" }}
          >
            Your money, visualized
          </h2>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "#737373" }}>
            A real-time dashboard that turns raw numbers into clear, actionable insights.
          </p>
        </div>

        {/* Dashboard container */}
        <div
          className="rounded-3xl relative overflow-hidden"
          style={{
            background: "rgba(14, 14, 14, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(38, 38, 38, 0.8)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,211,238,0.04)",
          }}
        >
          {/* Glow accent top-left */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.25), transparent)" }}
          />

          {/* Dashboard header bar */}
          <div
            className="flex items-center justify-between px-8 py-5"
            style={{ borderBottom: "1px solid rgba(38,38,38,0.7)" }}
          >
            <div>
              <p className="text-base font-semibold" style={{ color: "#F2F2F2" }}>Spending Overview</p>
              <p className="text-xs mt-0.5" style={{ color: "#737373" }}>June 2024 • All wallets</p>
            </div>
            {/* Period pills */}
            <div className="flex items-center gap-1 rounded-full p-1" style={{ background: "rgba(26,26,26,0.8)", border: "1px solid rgba(38,38,38,0.6)" }}>
              {["Week", "Month", "Year"].map((p) => (
                <button
                  key={p}
                  className="px-4 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={
                    p === "Month"
                      ? { background: "rgba(34,211,238,0.12)", color: "#22D3EE", border: "1px solid rgba(34,211,238,0.2)" }
                      : { color: "#737373" }
                  }
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Stat cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {statCards.map((c) => (
                <StatCard key={c.label} {...c} />
              ))}
            </div>

            {/* Main content: chart + categories */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Spending trend chart */}
              <div
                className="lg:col-span-2 rounded-2xl p-6"
                style={{ background: "rgba(17,17,17,0.6)", border: "1px solid rgba(38,38,38,0.6)" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#F2F2F2" }}>Spending Trend</p>
                    <p className="text-xs mt-0.5" style={{ color: "#737373" }}>vs. last month</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs" style={{ color: "#737373" }}>
                    <span className="flex items-center gap-1.5">
                      <span className="w-5 h-0.5 rounded-full inline-block" style={{ background: "#22D3EE" }} />
                      This month
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-5 h-0.5 rounded-full inline-block" style={{ background: "#262626" }} />
                      Last month
                    </span>
                  </div>
                </div>

                {/* SVG Line Chart */}
                <div className="relative">
                  <svg viewBox="0 0 540 180" className="w-full" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="areaGradPrev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#262626" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#262626" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Grid lines */}
                    {[30, 70, 110, 150].map((y) => (
                      <line key={y} x1="40" y1={y} x2="540" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    ))}

                    {/* Y-axis labels */}
                    {[
                      { y: 30, label: "$3.5k" },
                      { y: 70, label: "$3.0k" },
                      { y: 110, label: "$2.5k" },
                      { y: 150, label: "$2.0k" },
                    ].map(({ y, label }) => (
                      <text key={y} x="34" y={y + 4} textAnchor="end" fontSize="10" fill="#737373">
                        {label}
                      </text>
                    ))}

                    {/* Previous month area (ghost) */}
                    <path
                      d="M40 130 C98 130 138 105 196 115 C254 125 294 95 352 100 C410 105 450 85 508 90 L508 170 L40 170 Z"
                      fill="url(#areaGradPrev)"
                    />
                    <path
                      d="M40 130 C98 130 138 105 196 115 C254 125 294 95 352 100 C410 105 450 85 508 90"
                      fill="none"
                      stroke="rgba(38,38,38,0.8)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="4 3"
                    />

                    {/* Current month area */}
                    <path
                      d="M40 118 C98 118 138 78 196 88 C254 98 294 58 352 62 C410 66 450 74 508 68 L508 170 L40 170 Z"
                      fill="url(#areaGrad)"
                    />
                    <path
                      d="M40 118 C98 118 138 78 196 88 C254 98 294 58 352 62 C410 66 450 74 508 68"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* Data points */}
                    {[
                      { x: 40, y: 118 },
                      { x: 148, y: 78 },
                      { x: 254, y: 88 },
                      { x: 352, y: 62 },
                      { x: 430, y: 74 },
                      { x: 508, y: 68 },
                    ].map(({ x, y }, i) => (
                      <g key={i}>
                        <circle cx={x} cy={y} r="4" fill="#22D3EE" />
                        <circle cx={x} cy={y} r="7" fill="rgba(34,211,238,0.12)" />
                      </g>
                    ))}

                    {/* X-axis month labels */}
                    {chartMonths.map((m, i) => (
                      <text
                        key={m}
                        x={40 + i * ((508 - 40) / 5)}
                        y="175"
                        textAnchor="middle"
                        fontSize="10"
                        fill="#737373"
                      >
                        {m}
                      </text>
                    ))}
                  </svg>
                </div>
              </div>

              {/* Categories breakdown */}
              <div
                className="rounded-2xl p-5 flex flex-col"
                style={{ background: "rgba(17,17,17,0.6)", border: "1px solid rgba(38,38,38,0.6)" }}
              >
                <p className="text-sm font-semibold mb-5" style={{ color: "#F2F2F2" }}>By Category</p>
                <div className="space-y-4 flex-1">
                  {categories.map((cat) => (
                    <CategoryRow key={cat.name} {...cat} />
                  ))}
                </div>

                {/* Total */}
                <div
                  className="mt-6 pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(38,38,38,0.6)" }}
                >
                  <span className="text-xs" style={{ color: "#737373" }}>Total</span>
                  <span className="text-sm font-bold" style={{ color: "#F2F2F2" }}>$2,847</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  sub,
  change,
  positive,
  accent,
}: (typeof statCards)[0]) {
  return (
    <div
      className="rounded-2xl p-5 relative overflow-hidden"
      style={{ background: "rgba(17,17,17,0.6)", border: "1px solid rgba(38,38,38,0.6)" }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 w-20 h-20 rounded-full blur-2xl opacity-20"
        style={{ background: accent }}
      />
      <p className="text-xs mb-2" style={{ color: "#737373" }}>{label}</p>
      <p className="text-2xl font-bold mb-1" style={{ color: "#F2F2F2" }}>{value}</p>
      <p className="text-[10px] mb-2" style={{ color: "#737373" }}>{sub}</p>
      <span
        className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full"
        style={{
          background: positive ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
          color: positive ? "#22C55E" : "#EF4444",
          border: `1px solid ${positive ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`,
        }}
      >
        {change}
      </span>
    </div>
  );
}

function CategoryRow({
  name,
  pct,
  color,
  amount,
}: (typeof categories)[0]) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
          <span className="text-xs" style={{ color: "#D4D4D4" }}>{name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold" style={{ color: "#F2F2F2" }}>{amount}</span>
          <span className="text-[10px] w-7 text-right" style={{ color: "#737373" }}>{pct}%</span>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-1 rounded-full" style={{ background: "rgba(38,38,38,0.8)" }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: color, boxShadow: `0 0 6px ${color}50` }}
        />
      </div>
    </div>
  );
}
