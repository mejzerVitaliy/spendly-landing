import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#080808" }} />
        <div
          className="animate-blob absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.18), rgba(34,211,238,0.04), transparent 70%)" }}
        />
        <div
          className="animate-blob-alt absolute top-1/2 -right-48 w-[640px] h-[640px] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(192,132,252,0.14), rgba(34,211,238,0.04), transparent 70%)" }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/3 w-[440px] h-[440px] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(129,140,248,0.1), transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.045) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,#080808_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-8">
              <span
                className="flex h-2 w-2 rounded-full animate-pulse"
                style={{ background: "#22D3EE", boxShadow: "0 0 6px #22D3EE" }}
              />
              <span className="text-[11px] text-muted-foreground font-medium tracking-[0.12em] uppercase">
                AI-Powered Personal Finance
              </span>
            </div>

            <h1
              className="animate-fade-up delay-100 font-bold leading-[1.04] tracking-tight mb-6"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
            >
              <span style={{ color: "#F2F2F2" }}>Stop guessing</span>
              <br />
              <span className="gradient-text">where your money</span>
              <br />
              <span style={{ color: "#F2F2F2" }}>goes</span>
            </h1>

            <p
              className="animate-fade-up delay-200 text-lg leading-relaxed mb-10 max-w-[480px]"
              style={{ color: "#737373" }}
            >
              Type <span style={{ color: "#D4D4D4" }}>&ldquo;coffee 4.50&rdquo;</span> or speak it aloud — AI categorizes,
              organizes, and surfaces insights you actually care about.
              No spreadsheets. No manual entry. Just clarity.
            </p>

            {/* Social proof chips */}
            <div className="animate-fade-up delay-200 flex flex-wrap gap-2 mb-8">
              {[
                { label: "Text & Voice AI input", color: "#22D3EE" },
                { label: "Auto-categorized", color: "#22C55E" },
                { label: "100+ currencies", color: "#EAB308" },
                { label: "AI Insights & Coach", color: "#C084FC" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${color}12`, border: `1px solid ${color}30`, color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                  {label}
                </span>
              ))}
            </div>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary px-8 py-4 items-center gap-3 inline-flex text-base">
                Join the Waitlist — Free
              </a>
              <a href="#app-showcase" className="btn-ghost px-8 py-4 text-base items-center gap-3 inline-flex">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.22)" }}
                >
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M1 1.5L9 6L1 10.5V1.5Z" fill="#22D3EE" />
                  </svg>
                </span>
                See it in action
              </a>
            </div>
          </div>

          <div className="animate-fade-up delay-200 flex justify-center lg:justify-end pt-8 pb-8 px-4">
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
