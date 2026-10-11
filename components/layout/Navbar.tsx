"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
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
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [activeSection, setActive]      = useState("");

  /* ── Scroll listener ───────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_ITEMS.map((n) => n.href.replace("#", "")).filter(Boolean);
      const threshold = window.scrollY + 130;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= threshold) { setActive(sections[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Mobile menu keyboard / scroll lock ─────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* ── Brand ──────────────────────────────── */}
        <Link
          href="/"
          className="group flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-sm"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-200">
            {PORTFOLIO_DATA.personal.shortName}
          </span>
          <span className="mono-meta text-[10px] text-[var(--text-muted)] hidden sm:inline opacity-70 group-hover:opacity-100 transition-opacity">
            / dev
          </span>
        </Link>

        {/* ── Desktop nav ────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((n) => {
            const isActive = activeSection === n.href.replace("#", "");
            return (
              <a
                key={n.href}
                href={n.href}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide uppercase rounded-md transition-colors duration-150 nav-link-underline ${
                  isActive
                    ? "text-[var(--accent-primary)] active"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {n.label}
                {/* Active indicator dot */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-primary)]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── Right actions ──────────────────────── */}
        <div className="flex items-center gap-2">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] rounded-lg hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            CV
          </a>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
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
            className="md:hidden fixed inset-0 top-[57px] z-50 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] px-6 py-8 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              <p className="mono-meta text-[10px] text-[var(--text-muted)] mb-4 tracking-widest">Navigation</p>
              {NAV_ITEMS.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="group flex items-center justify-between py-3.5 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span className="font-serif text-lg">{n.label}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </nav>

            <div className="pt-8 border-t border-[var(--border-subtle)] space-y-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-mono text-xs uppercase tracking-wider hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                View & Download CV (PDF)
              </a>

              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>{PORTFOLIO_DATA.personal.location}</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="hover:text-[var(--accent-primary)] underline underline-offset-2 transition-colors"
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
