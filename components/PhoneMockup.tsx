const transactions = [
  { emoji: "🛒", name: "Grocery Store", sub: "Food & Drink", amount: "-$45.20", income: false },
  { emoji: "☕", name: "Starbucks",     sub: "Coffee",       amount: "-$6.50",  income: false },
  { emoji: "💼", name: "Salary",        sub: "Income",       amount: "+$3,200", income: true  },
  { emoji: "🎬", name: "Netflix",       sub: "Entertainment",amount: "-$15.99", income: false },
];

const quickActions = [
  { icon: "↑", label: "Send",    color: "#22D3EE" },
  { icon: "↓", label: "Receive", color: "#22C55E" },
  { icon: "+", label: "Add",     color: "#818CF8" },
];

export default function PhoneMockup() {
  return (
    <div className="relative animate-phone" style={{ width: 295, height: 608 }}>
      {/* Ambient glow behind phone */}
      <div
        className="animate-glow-pulse absolute inset-[-12%] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.18), rgba(129,140,248,0.08), transparent 70%)" }}
      />

      {/* Outer bezel */}
      <div
        className="relative w-full h-full rounded-[50px] p-[3px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,211,238,0.35) 0%, rgba(38,38,38,0.5) 40%, rgba(192,132,252,0.25) 100%)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        {/* Inner screen */}
        <div className="w-full h-full rounded-[48px] overflow-hidden flex flex-col" style={{ background: "#0C0C0E" }}>
          {/* Status bar */}
          <div className="relative flex items-center justify-between px-7 pt-4 pb-2 shrink-0">
            <span className="text-[11px] font-semibold" style={{ color: "rgba(242,242,242,0.85)" }}>9:41</span>

            {/* Dynamic Island */}
            <div
              className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full"
              style={{ width: 110, height: 32, background: "#000" }}
            />

            {/* Status icons */}
            <div className="flex items-center gap-1.5" style={{ color: "rgba(242,242,242,0.8)" }}>
              {/* Signal bars */}
              <div className="flex items-end gap-px" style={{ height: 11 }}>
                {[4, 6, 8, 11].map((h, i) => (
                  <div
                    key={i}
                    className="w-[2.5px] rounded-sm"
                    style={{ height: h, background: i < 3 ? "rgba(242,242,242,0.85)" : "rgba(242,242,242,0.25)" }}
                  />
                ))}
              </div>
              {/* WiFi */}
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M1.2 4C3.1 1.9 4.7 1.2 6.5 1.2S9.9 1.9 11.8 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M3.0 6.2C4.0 5.0 5.2 4.5 6.5 4.5S9.0 5.0 10.0 6.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <circle cx="6.5" cy="9" r="1.1" fill="currentColor" />
              </svg>
              {/* Battery */}
              <div className="flex items-center gap-0.5">
                <div className="w-6 h-3 rounded-[3px] border flex items-center p-px" style={{ borderColor: "rgba(242,242,242,0.5)" }}>
                  <div className="h-full rounded-sm" style={{ width: "80%", background: "#22C55E" }} />
                </div>
                <div className="w-[2px] h-1.5 rounded-sm" style={{ background: "rgba(242,242,242,0.4)" }} />
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-hidden flex flex-col px-4 pb-2">
            {/* Greeting */}
            <div className="pt-1 pb-3">
              <p className="text-[12px]" style={{ color: "#737373" }}>Good morning 👋</p>
              <p className="text-[15px] font-semibold" style={{ color: "#F2F2F2" }}>Alex Johnson</p>
            </div>

            {/* Balance card */}
            <div
              className="rounded-2xl p-4 mb-3 relative overflow-hidden shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.13) 0%, rgba(129,140,248,0.07) 100%)",
                border: "1px solid rgba(34,211,238,0.2)",
              }}
            >
              {/* Decoration blob */}
              <div
                className="absolute -right-6 -top-6 w-20 h-20 rounded-full blur-2xl pointer-events-none"
                style={{ background: "rgba(34,211,238,0.18)" }}
              />
              <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "#737373" }}>Total Balance</p>
              <p className="text-[28px] font-bold leading-none mb-2" style={{ color: "#F2F2F2" }}>
                $12,450<span className="text-[18px]">.80</span>
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
                  <span className="text-[10px] font-medium" style={{ color: "#22C55E" }}>+2.4% this month</span>
                </div>
                <span className="text-[9px]" style={{ color: "#737373" }}>Jun 2024</span>
              </div>
              {/* Mini sparkline */}
              <svg viewBox="0 0 240 36" className="w-full mt-3" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 26 C20 26 28 14 48 14 C68 14 76 22 96 18 C116 14 124 6 144 5 C164 4 172 9 192 7 C212 5 222 11 240 9"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 26 C20 26 28 14 48 14 C68 14 76 22 96 18 C116 14 124 6 144 5 C164 4 172 9 192 7 C212 5 222 11 240 9 L240 36 L0 36 Z"
                  fill="url(#sparkGrad)"
                />
              </svg>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-3 gap-2 mb-3 shrink-0">
              {quickActions.map(({ icon, label, color }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 py-2.5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{ background: `${color}1a`, color }}
                  >
                    {icon}
                  </div>
                  <span className="text-[10px]" style={{ color: "#737373" }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Recent transactions */}
            <div className="shrink-0">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] font-semibold" style={{ color: "#F2F2F2" }}>Recent</p>
                <span className="text-[9px] font-medium" style={{ color: "#22D3EE" }}>See all →</span>
              </div>
              <div className="space-y-1.5">
                {transactions.map((tx) => (
                  <div
                    key={tx.name}
                    className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      {tx.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10.5px] font-medium truncate" style={{ color: "rgba(242,242,242,0.9)" }}>{tx.name}</p>
                      <p className="text-[9px]" style={{ color: "#737373" }}>{tx.sub}</p>
                    </div>
                    <span
                      className="text-[10.5px] font-semibold shrink-0"
                      style={{ color: tx.income ? "#22C55E" : "#F2F2F2" }}
                    >
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom tab bar */}
          <div
            className="shrink-0 flex items-center justify-around px-4 py-2.5"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(10px)",
            }}
          >
            {[
              { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", active: true },
              { d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",  active: false },
              { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",   active: false },
              { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", active: false },
            ].map(({ d, active }, i) => (
              <div
                key={i}
                className="p-2 rounded-xl"
                style={active ? { background: "rgba(34,211,238,0.12)" } : {}}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d={d} stroke={active ? "#22D3EE" : "#737373"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
