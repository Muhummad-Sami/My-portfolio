"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import SectionHeader from "@/components/layout/SectionHeader";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailSubject = encodeURIComponent(formData.subject || "Portfolio Contact Inquiry");
  const mailBody = encodeURIComponent(
    `Hello Muhammad Sami,\n\nName: ${formData.name || "[Your Name]"}\nEmail: ${formData.email || "[Your Email]"}\n\nMessage:\n${formData.message || "[Your Message]"}`
  );
  const directMailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailSubject}&body=${mailBody}`;
  const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_DATA.personal.email}&su=${mailSubject}&body=${mailBody}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Client-side quick checks
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({ type: "error", text: "Please enter your name (minimum 2 characters)." });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus({ type: "error", text: "Please write a message with at least 10 characters." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          text:
            data.message ||
            "Your message has been sent to Sami! You can also reach out directly at samirao9372@gmail.com.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          text: data.error || "Unable to send message. Please contact directly via samirao9372@gmail.com.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Network error occurred. Please contact directly via samirao9372@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 swiss-grid pointer-events-none opacity-50" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader index="06" label="Contact" heading="Get in Touch" meta="Lahore, PK" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="paper-surface rounded-xl p-6 sm:p-7 border border-[var(--border-subtle)] space-y-6">
              <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                Direct Contact
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Feel free to reach out directly regarding software development opportunities,
                internships, or freelance projects.
              </p>

              <div className="space-y-3.5 pt-2">
                {/* Email Item with copy */}
                <div className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="mono-meta text-[10px] text-[var(--text-muted)] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      Email Address
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--accent-primary)] hover:underline"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span className="text-emerald-500 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-xs sm:text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors block"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                  <div className="flex items-center gap-2 pt-1 text-[11px] font-mono">
                    <a
                      href={directGmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--accent-primary)] hover:underline"
                    >
                      <span>Compose in Gmail</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span className="text-[var(--text-muted)]">•</span>
                    <a
                      href={directMailtoUrl}
                      className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      Default Mail App
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                  <span className="mono-meta text-[10px] text-[var(--text-muted)] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    Phone & WhatsApp
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                      {PORTFOLIO_DATA.personal.phone}
                    </span>
                    <a
                      href="https://wa.me/923067591228"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <span className="mono-meta text-[10px] text-[var(--text-muted)] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    Location
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
                    {PORTFOLIO_DATA.personal.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="paper-surface rounded-xl p-6 sm:p-8 border border-[var(--border-subtle)] space-y-5"
            >
              <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                Send a Message
              </h3>

              {status && (
                <div
                  className={`p-4 rounded-lg text-xs leading-relaxed flex items-start gap-3 border ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
                      : "bg-red-500/10 border-red-500/30 text-red-800 dark:text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  )}
                  <span>{status.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="mono-meta text-[11px] text-[var(--text-muted)] block">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Miller"
                    className="w-full px-3.5 py-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="mono-meta text-[11px] text-[var(--text-muted)] block">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="mono-meta text-[11px] text-[var(--text-muted)] block">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineering Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="mono-meta text-[11px] text-[var(--text-muted)] block">
                  Message Details *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors resize-none"
                />
              </div>

              <div className="space-y-3 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-[var(--accent-primary)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-1 px-1">
                  <span>Prefer direct email?</span>
                  <div className="flex items-center gap-2 font-mono">
                    <a
                      href={directGmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Open in Gmail</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span>•</span>
                    <a
                      href={directMailtoUrl}
                      className="hover:text-[var(--text-primary)] transition-colors"
                    >
                      Mail App
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
