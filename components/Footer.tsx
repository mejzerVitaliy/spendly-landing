export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ borderTop: "1px solid rgba(38,38,38,0.6)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Spendly AI"
              width={40}
              height={40}
              className="rounded-xl shrink-0"
              style={{ boxShadow: "0 0 14px rgba(34,211,238,0.3)" }}
            />
            <div>
              <p className="text-sm font-semibold leading-tight" style={{ color: "#F2F2F2" }}>Spendly AI</p>
              <p className="text-xs" style={{ color: "#737373" }}>Smart Expense Tracking</p>
            </div>
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
