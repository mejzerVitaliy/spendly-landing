import Link from "next/link";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{ background: "#080808", color: "#F2F2F2" }}>
      {/* Minimal top bar */}
      <header
        className="sticky top-0 z-50"
        style={{ background: "rgba(8,8,8,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(38,38,38,0.5)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "#22D3EE", boxShadow: "0 0 10px rgba(34,211,238,0.35)" }}
            >
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L3 6.5V13.5L10 18L17 13.5V6.5L10 2Z" stroke="#080808" strokeWidth="2" strokeLinejoin="round" />
                <path d="M10 2V18M3 6.5L17 13.5M17 6.5L3 13.5" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-sm font-semibold" style={{ color: "#F2F2F2" }}>Spendly AI</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm transition-colors hover:text-foreground"
            style={{ color: "#737373" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3" style={{ color: "#F2F2F2" }}>{title}</h1>
          <p className="text-sm" style={{ color: "#737373" }}>Last updated: {lastUpdated}</p>
        </div>

        <div className="prose-legal">{children}</div>
      </main>

      {/* Footer */}
      <footer
        className="mt-20 py-8"
        style={{ borderTop: "1px solid rgba(38,38,38,0.5)" }}
      >
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs" style={{ color: "#737373" }}>
          <span>© {new Date().getFullYear()} Spendly AI. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <a href="mailto:support@spendly-ai.com" className="hover:text-foreground transition-colors">support@spendly-ai.com</a>
          </div>
        </div>
      </footer>

      <style>{`
        .prose-legal h2 {
          color: #F2F2F2;
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(38,38,38,0.7);
        }
        .prose-legal h3 {
          color: #D4D4D4;
          font-size: 1rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .prose-legal p {
          color: #737373;
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .prose-legal ul {
          color: #737373;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          line-height: 1.8;
        }
        .prose-legal ul li {
          margin-bottom: 0.25rem;
          list-style-type: disc;
        }
        .prose-legal a {
          color: #22D3EE;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .prose-legal strong {
          color: #D4D4D4;
          font-weight: 600;
        }
        .prose-legal .highlight-box {
          background: rgba(34,211,238,0.05);
          border: 1px solid rgba(34,211,238,0.15);
          border-radius: 12px;
          padding: 16px 20px;
          margin: 1.5rem 0;
        }
        .prose-legal .highlight-box p {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}
