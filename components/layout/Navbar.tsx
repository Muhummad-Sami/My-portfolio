"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

const NAV_ITEMS = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActive] = useState("");

  /* ── Scroll listener ───────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map((n) => n.href.replace("#", "")).filter(Boolean);
      const threshold = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= threshold) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Mobile menu keyboard / scroll lock ─────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/75 dark:bg-black/80 light:bg-white/85 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-purple-200/60 py-3 shadow-lg shadow-black/30"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent dark:from-black/70 light:from-white/70 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* ── Brand ── */}
        <Link
          href="/"
          className="group flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] rounded-md px-1"
        >
          <span className="font-serif italic text-2xl sm:text-3xl font-extrabold tracking-tight text-[#C084FC] group-hover:text-white transition-colors duration-200 drop-shadow-[0_0_18px_rgba(192,132,252,0.6)]">
            Sami Abid
          </span>
          <span className="mono-meta text-[11px] font-semibold text-purple-200/90 dark:text-purple-200/90 light:text-purple-800 tracking-wider hidden sm:inline drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            / Software Engineer
          </span>
        </Link>

        {/* ── Desktop nav ────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Main navigation">
          {NAV_ITEMS.map((n) => {
            const isActive = activeSection === n.href.replace("#", "");
            return (
              <a
                key={n.href}
                href={n.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-[#7C3AED]/40 border border-[#A855F7]/60 shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                    : "text-white/80 hover:text-white hover:bg-white/10 dark:text-white/80 dark:hover:text-white dark:hover:bg-purple-900/30 light:text-purple-950/80 light:hover:text-purple-900 light:hover:bg-purple-100/80 border border-transparent hover:border-white/10"
                }`}
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        {/* ── Right actions ──────────────────────── */}
        <div className="flex items-center gap-2.5">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold rounded-full border border-purple-500/50 bg-purple-900/30 text-purple-200 hover:bg-[#7C3AED] hover:text-white hover:border-[#A855F7] hover:shadow-[0_0_16px_rgba(168,85,247,0.5)] transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5 text-[#C084FC] group-hover:text-white" />
            CV
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/20 bg-black/40 text-white/90 hover:text-white hover:bg-white/15 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "menu"}
                initial={{ opacity: 0, rotate: mobileOpen ? -90 : 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ──────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-[57px] z-50 bg-[#0A0714]/95 dark:bg-[#0A0714]/95 light:bg-white/95 backdrop-blur-2xl border-t border-purple-500/30 px-6 py-8 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              <p className="mono-meta text-[10px] text-purple-300 font-semibold mb-2 tracking-widest uppercase">
                Navigation
              </p>
              {NAV_ITEMS.map((n, i) => {
                const isActive = activeSection === n.href.replace("#", "");
                return (
                  <motion.a
                    key={n.href}
                    href={n.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    className={`group flex items-center justify-between py-3 px-3 rounded-lg border transition-all ${
                      isActive
                        ? "bg-purple-900/30 border-purple-500/50 text-[#C084FC] font-bold"
                        : "border-transparent text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="font-serif text-lg tracking-wide">{n.label}</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-purple-200 space-y-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-purple-500/50 bg-purple-900/40 text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#7C3AED] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all"
              >
                <FileText className="w-4 h-4 text-[#C084FC]" />
                View &amp; Download CV (PDF)
              </a>

              <div className="flex items-center justify-between text-xs text-purple-200/80 pt-2">
                <span>{PORTFOLIO_DATA.personal.location}</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="hover:text-white underline underline-offset-2 transition-colors font-mono"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
