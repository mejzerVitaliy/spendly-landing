export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ borderTop: "1px solid rgba(38,38,38,0.6)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "#22D3EE", boxShadow: "0 0 10px rgba(34,211,238,0.35)" }}
            >
              <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L3 6.5V13.5L10 18L17 13.5V6.5L10 2Z" stroke="#080808" strokeWidth="2" strokeLinejoin="round" />
                <path d="M10 2V18M3 6.5L17 13.5M17 6.5L3 13.5" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-sm font-semibold" style={{ color: "#F2F2F2" }}>Spendly AI</span>
            <span className="text-xs" style={{ color: "#737373" }}>—</span>
            <span className="text-xs" style={{ color: "#737373" }}>Smart Expense Tracking</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-xs transition-colors duration-200 hover:text-foreground"
              style={{ color: "#737373" }}
            >
              Privacy Policy
            </a>
            <span className="w-px h-3" style={{ background: "#262626" }} />
            <a
              href="/terms"
              className="text-xs transition-colors duration-200 hover:text-foreground"
              style={{ color: "#737373" }}
            >
              Terms of Use
            </a>
            <span className="w-px h-3" style={{ background: "#262626" }} />
            <a
              href="mailto:support@spendly-ai.com"
              className="text-xs transition-colors duration-200 hover:text-foreground"
              style={{ color: "#737373" }}
            >
              support@spendly-ai.com
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "#737373" }}>
            © {new Date().getFullYear()} Spendly AI. All rights reserved.
          </p>
        </div>
      </div>

      {/* Very subtle bottom glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.12), transparent)" }}
      />
    </footer>
  );
}
