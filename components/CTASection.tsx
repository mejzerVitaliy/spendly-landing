import { Apple, Play } from "lucide-react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/config";

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative top border */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.25), transparent)" }}
      />

      {/* Large glow blob */}
      <div className="animate-glow-pulse pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="w-[700px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.1), rgba(129,140,248,0.06), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span
            className="flex h-2 w-2 rounded-full animate-pulse"
            style={{ background: "#22C55E", boxShadow: "0 0 6px #22C55E" }}
          />
          <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: "#737373" }}>
            Live on the App Store
          </span>
        </div>

        <h2
          className="font-bold tracking-tight mb-6 leading-[1.05]"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#F2F2F2" }}
        >
          Ready to{" "}
          <span className="gradient-text">take control</span>?
        </h2>

        <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "#737373" }}>
          Spendly AI is free to download, right now, on the App Store. No account
          required — just install it and log your first expense in seconds.
        </p>

        {/* Primary CTA — real App Store link */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-base mb-6"
        >
          <Apple size={20} color="#080808" />
          Download on the App Store
        </a>

        <p className="text-xs mb-8" style={{ color: "#4a4a4a" }}>
          Free to download · No account required
        </p>

        {/* Google Play — Android build not out yet */}
        <div className="flex items-center justify-center">
          <StoreBadge
            href={GOOGLE_PLAY_URL}
            icon={<Play size={18} color="#737373" />}
            store="Coming soon to Android"
            sub="Get it on"
            disabled
          />
        </div>
      </div>
    </section>
  );
}

function StoreBadge({
  href,
  icon,
  store,
  sub,
  disabled,
}: {
  href: string;
  icon: React.ReactNode;
  store: string;
  sub: string;
  disabled?: boolean;
}) {
  return (
    <a
      href={disabled ? undefined : href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-ghost flex items-center gap-3 px-6 py-3"
      style={disabled ? { minWidth: 170, pointerEvents: "none", opacity: 0.5 } : { minWidth: 170 }}
      aria-disabled={disabled}
    >
      {icon}
      <div className="text-left">
        <p className="text-[9px] leading-none mb-0.5" style={{ color: "#737373" }}>{sub}</p>
        <p className="text-sm font-semibold" style={{ color: disabled ? "#737373" : "#F2F2F2" }}>{store}</p>
      </div>
    </a>
  );
}
