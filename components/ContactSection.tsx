"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { WEB3FORMS_KEY } from "@/lib/config";

type Status = "idle" | "loading" | "success" | "error";

const subjects = [
  "General question",
  "Partnership inquiry",
  "Bug report",
  "Feature request",
  "Other",
];

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#22D3EE" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M22 6l-10 7L2 6" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email",
    value: "support@spendly-ai.com",
    href: "mailto:support@spendly-ai.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#818CF8" strokeWidth="1.5"/>
        <path d="M12 8v4l3 3" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Response time",
    value: "Within 24 hours",
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#22C55E" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Support",
    value: "Available in English",
    href: null,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Spendly AI] ${form.subject}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setForm({ name: "", email: "", subject: subjects[0], message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.25), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: "#737373" }}>
              Get in touch
            </span>
          </div>
          <h2
            className="font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#F2F2F2" }}
          >
            We&apos;d love to hear from you
          </h2>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "#737373" }}>
            Have a question, partnership idea, or just want to say hi?
            Drop us a message and we&apos;ll get back to you quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{ background: "rgba(17,17,17,0.5)", border: "1px solid rgba(38,38,38,0.6)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(38,38,38,0.7)" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#737373" }}>{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium transition-colors hover:text-primary" style={{ color: "#F2F2F2" }}>
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: "#F2F2F2" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
            <p className="text-xs leading-relaxed px-1" style={{ color: "#737373" }}>
              By contacting us, you agree to our{" "}
              <a href="/privacy" className="underline hover:text-foreground transition-colors">Privacy Policy</a>
              {" "}and{" "}
              <a href="/terms" className="underline hover:text-foreground transition-colors">Terms of Use</a>.
            </p>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-3xl p-8"
              style={{
                background: "rgba(14,14,14,0.7)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(38,38,38,0.7)",
              }}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#F2F2F2" }}>Message sent!</h3>
                  <p className="text-sm" style={{ color: "#737373" }}>
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm underline transition-colors hover:text-foreground"
                    style={{ color: "#737373" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Name" required>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Alex Johnson"
                        required
                        className="contact-input w-full"
                      />
                    </FormField>
                    <FormField label="Email" required>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        required
                        className="contact-input w-full"
                      />
                    </FormField>
                  </div>

                  {/* Radix UI custom subject dropdown */}
                  <FormField label="Subject">
                    <Select.Root
                      value={form.subject}
                      onValueChange={(val) => setForm((prev) => ({ ...prev, subject: val }))}
                    >
                      <Select.Trigger
                        className="contact-input w-full flex items-center justify-between gap-2"
                        aria-label="Subject"
                      >
                        <Select.Value />
                        <Select.Icon asChild>
                          <ChevronDown size={14} style={{ color: "#737373", flexShrink: 0 }} />
                        </Select.Icon>
                      </Select.Trigger>

                      <Select.Portal>
                        <Select.Content
                          position="popper"
                          sideOffset={6}
                          style={{
                            background: "rgba(14,14,14,0.98)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            border: "1px solid rgba(38,38,38,0.8)",
                            borderRadius: 12,
                            boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                            zIndex: 100,
                            minWidth: "var(--radix-select-trigger-width)",
                            maxHeight: "var(--radix-select-content-available-height)",
                          }}
                        >
                          <Select.Viewport style={{ padding: 4 }}>
                            {subjects.map((s) => (
                              <Select.Item
                                key={s}
                                value={s}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: 8,
                                  padding: "9px 12px",
                                  borderRadius: 8,
                                  fontSize: 14,
                                  color: "#D4D4D4",
                                  cursor: "pointer",
                                  outline: "none",
                                  userSelect: "none",
                                }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLElement).style.background = "rgba(34,211,238,0.08)";
                                  (e.currentTarget as HTMLElement).style.color = "#F2F2F2";
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.background = "transparent";
                                  (e.currentTarget as HTMLElement).style.color = "#D4D4D4";
                                }}
                              >
                                <Select.ItemText>{s}</Select.ItemText>
                                <Select.ItemIndicator>
                                  <Check size={13} style={{ color: "#22D3EE" }} />
                                </Select.ItemIndicator>
                              </Select.Item>
                            ))}
                          </Select.Viewport>
                        </Select.Content>
                      </Select.Portal>
                    </Select.Root>
                  </FormField>

                  <FormField label="Message" required>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      required
                      rows={5}
                      className="contact-input w-full resize-none"
                    />
                  </FormField>

                  {status === "error" && (
                    <p className="text-sm" style={{ color: "#EF4444" }}>
                      Something went wrong. Please try again or email us at{" "}
                      <a href="mailto:support@spendly-ai.com" className="underline">support@spendly-ai.com</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#08080840" strokeWidth="3"/>
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="#080808" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        Sending…
                      </>
                    ) : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-input {
          background: rgba(22,22,22,0.9);
          border: 1px solid rgba(38,38,38,0.8);
          color: #F2F2F2;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
          width: 100%;
        }
        .contact-input:focus {
          border-color: rgba(34,211,238,0.4);
          box-shadow: 0 0 0 3px rgba(34,211,238,0.06);
        }
        .contact-input::placeholder {
          color: #737373;
        }
        .contact-input[data-placeholder] {
          color: #737373;
        }
      `}</style>
    </section>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium" style={{ color: "#D4D4D4" }}>
        {label}
        {required && <span className="ml-0.5" style={{ color: "#22D3EE" }}>*</span>}
      </label>
      {children}
    </div>
  );
}
