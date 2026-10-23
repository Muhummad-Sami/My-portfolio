"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16"
    >
      <div className="relative max-w-4xl mx-auto flex flex-col items-center space-y-6">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B5CF6]/60 bg-black/50 backdrop-blur-md text-[#D8B4FE] text-xs font-mono tracking-wide shadow-[0_0_24px_rgba(139,92,246,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            Available for new Projects &amp; Roles
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-2"
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-tight"
            style={{ textShadow: "0 2px 32px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6)" }}
          >
            Hey! , I am{" "}
            <span
              className="text-[#A855F7]"
              style={{ textShadow: "0 0 40px rgba(168,85,247,0.7), 0 2px 20px rgba(0,0,0,0.8)" }}
            >
              Sami
            </span>
          </h1>
          <h2
            className="text-xl sm:text-3xl md:text-4xl font-bold text-white/90 tracking-normal"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
          >
            Full-Stack Developer · Aspiring AI Engineer
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed mx-auto"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}
        >
          Software Engineering undergraduate at Superior University, Lahore. I craft scalable,
          functional digital platforms and intelligent ML pipelines that bring complex systems to life.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-sm transition-all shadow-[0_0_32px_rgba(124,58,237,0.5)] hover:shadow-[0_0_48px_rgba(124,58,237,0.75)] hover:scale-[1.03] active:scale-[0.97]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm text-white font-semibold text-sm transition-all hover:border-[#8B5CF6]/70 hover:bg-[#7C3AED]/20 hover:scale-[1.03] active:scale-[0.97]"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social & CV links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex items-center justify-center gap-3 pt-2"
        >
          <a
            href="/cv"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:border-[#8B5CF6]/60 text-xs font-mono transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[#A855F7]" />
            Curriculum Vitae
          </a>

          <div className="flex items-center gap-2">
            {[
              { href: PORTFOLIO_DATA.personal.github,   label: "GitHub",   icon: <Github className="w-3.5 h-3.5" /> },
              { href: PORTFOLIO_DATA.personal.linkedin,  label: "LinkedIn", icon: <Linkedin className="w-3.5 h-3.5" /> },
              { href: `mailto:${PORTFOLIO_DATA.personal.email}`, label: "Email", icon: <Mail className="w-3.5 h-3.5" /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white/70 hover:text-white hover:border-[#8B5CF6]/70 hover:bg-[#7C3AED]/25 transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 flex flex-col items-center gap-1.5 text-[11px] font-mono text-white/50"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-[#A855F7] animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
