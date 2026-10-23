"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({ type: "error", text: "Please enter your name." });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setStatus({ type: "error", text: "Please enter a message (minimum 5 characters)." });
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
          text: data.message || "Message delivered successfully! I will reply shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          text: data.error || "Unable to send message via form. Please use direct email.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Network error occurred. You can reach me directly via email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">

        {/* ── Centered Section Header (matches reference screenshot) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        {/* ── Two-Column Container (matches reference screenshot) ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

          {/* Left Card: Send me a message form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 rounded-3xl bg-[#0D0B18]/90 backdrop-blur-md border border-[#231C38] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7C3AED]/40 transition-all shadow-[0_0_30px_rgba(124,58,237,0.1)]"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs text-gray-300 font-medium block">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#231C38] bg-[#141024] text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-colors placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs text-gray-300 font-medium block">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#231C38] bg-[#141024] text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-colors placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs text-gray-300 font-medium block">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#231C38] bg-[#141024] text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-colors resize-none placeholder:text-gray-500"
                  />
                </div>

                {status && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      status.type === "success"
                        ? "bg-green-950/40 border border-green-800 text-green-300"
                        : "bg-red-950/40 border border-red-800 text-red-300"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{status.text}</span>
                  </div>
                )}

                {/* Purple pill button matching screenshot */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.35)] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Card: Info & My Socials (matches reference screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 rounded-3xl bg-[#0D0B18]/90 backdrop-blur-md border border-[#231C38] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7C3AED]/40 transition-all shadow-[0_0_30px_rgba(124,58,237,0.1)]"
          >
            <div className="space-y-6">
              <p className="text-sm text-gray-300 leading-relaxed">
                I&apos;m always open to discussing new opportunities, creative engineering projects, or
                internship / full-time software engineering roles. Whether you have a specific project in
                mind or just want to explore possibilities, I&apos;d love to connect.
              </p>

              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                  <span>Web & Mobile Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                  <span>Applied AI & Machine Learning Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                  <span>Data Pipelines & Executive BI Dashboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                  <span>Clean Database Architecture & API Serving</span>
                </div>
              </div>
            </div>

            {/* My Socials (matches reference screenshot) */}
            <div className="pt-8 border-t border-[#231C38] mt-6">
              <h4 className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">
                My Socials
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#2D2447] bg-[#141024] flex items-center justify-center text-gray-300 hover:text-white hover:border-[#7C3AED] hover:bg-[#7C3AED]/20 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#2D2447] bg-[#141024] flex items-center justify-center text-gray-300 hover:text-[#C084FC] hover:border-[#7C3AED] hover:bg-[#7C3AED]/20 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="w-10 h-10 rounded-full border border-[#2D2447] bg-[#141024] flex items-center justify-center text-gray-300 hover:text-[#C084FC] hover:border-[#7C3AED] hover:bg-[#7C3AED]/20 transition-all"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
