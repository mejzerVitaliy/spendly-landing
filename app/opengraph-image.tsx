import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Spendly AI — Smart Expense Tracking Powered by AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Background glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(192,132,252,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#22D3EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 32px rgba(34,211,238,0.5)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L3 6.5V13.5L10 18L17 13.5V6.5L10 2Z" stroke="#080808" strokeWidth="2" strokeLinejoin="round" />
              <path d="M10 2V18M3 6.5L17 13.5M17 6.5L3 13.5" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#F2F2F2",
              letterSpacing: "-0.5px",
            }}
          >
            Spendly AI
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            maxWidth: 900,
            marginBottom: 28,
          }}
        >
          <span style={{ color: "#F2F2F2" }}>Smart Expense Tracking</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #22D3EE 0%, #818CF8 50%, #C084FC 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Powered by AI
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#737373",
            textAlign: "center",
            maxWidth: 680,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Type or speak transactions naturally. AI categorizes, organizes,
          and surfaces the insights you care about.
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Text + Voice AI", "Multi-Currency", "Spending Analytics", "Free"].map((f) => (
            <div
              key={f}
              style={{
                padding: "10px 20px",
                borderRadius: 9999,
                background: "rgba(34,211,238,0.08)",
                border: "1px solid rgba(34,211,238,0.2)",
                color: "#22D3EE",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {f}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 16,
            color: "#4a4a4a",
            letterSpacing: "0.05em",
          }}
        >
          spendly-ai.com
        </div>
      </div>
    ),
    { ...size }
  );
}
