"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading matching reference image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* 2-column layout matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Focused Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base"
          >
            <p>
              I am a Software Engineering undergraduate at The Superior University, Lahore, with hands-on
              experience delivering production software across two industry internships. At{" "}
              <strong className="text-white font-semibold">TEYZIX CORE</strong>, I worked as a Full-Stack
              Intern architecting authenticated REST APIs, scalable schemas, and modern web platforms with
              Next.js, React, Node.js, MongoDB, and MySQL.
            </p>

            <p>
              At <strong className="text-white font-semibold">Developer Hub</strong>, I engineered data
              pipelines, statistical exploratory analysis, and executive Power BI dashboards utilizing Python
              (Pandas, NumPy) and advanced SQL.
            </p>

            <p>
              My work bridges scalable full-stack development with applied artificial intelligence. From deploying
              autonomous AI lead qualification agents (FastAPI & Gemini API) to training regression models (~0.90 R²),
              I am passionate about designing reliable, high-performance systems that solve complex real-world problems.
            </p>

            {/* Core Competencies chips */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "Full-Stack Web (Next.js 15, React, Node.js)",
                "Data Pipelines (Python, SQL, Power BI)",
                "Applied AI & Model Serving (FastAPI, Gemini)",
                "Database Design & 3NF Normalization",
                "Clean RESTful API Architecture",
                "C++ Data Structures, Algorithms & OOP",
              ].map((strength) => (
                <div key={strength} className="flex items-center gap-2 text-xs text-white/90">
                  <div className="w-4 h-4 rounded-full bg-[#7C3AED]/30 text-[#C084FC] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Purple Pixel Mascot / Graphic matching reference screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#0D0B18]/80 border border-[#231C38] backdrop-blur-md relative group hover:border-[#7C3AED]/50 transition-all shadow-[0_0_30px_rgba(124,58,237,0.15)]"
          >
            {/* Ambient Purple Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/10 to-transparent rounded-3xl pointer-events-none" />

            {/* Pixel Art Illustration (matches the purple pixel mascot in screenshot) */}
            <div className="relative w-64 h-56 flex items-center justify-center">
              {/* Floating Sparkles / Pixel stars */}
              <span className="absolute top-2 right-4 text-[#C084FC] text-lg font-mono animate-pulse">✦</span>
              <span className="absolute top-6 left-6 text-[#A855F7] text-sm font-mono animate-bounce">✦</span>
              <span className="absolute bottom-4 right-8 text-[#8B5CF6] text-xs font-mono">✦</span>
              <span className="absolute bottom-8 left-4 text-[#D8B4FE] text-base font-mono animate-pulse">✦</span>

              {/* Pixel Cat SVG rendered with crisp pixelated styling */}
              <svg
                viewBox="0 0 32 32"
                className="w-44 h-44 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] image-pixelated transition-transform group-hover:scale-105 duration-300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ears */}
                <rect x="7" y="6" width="3" height="3" fill="#A855F7" />
                <rect x="22" y="6" width="3" height="3" fill="#A855F7" />
                <rect x="8" y="7" width="1" height="1" fill="#C084FC" />
                <rect x="23" y="7" width="1" height="1" fill="#C084FC" />
                {/* Head / Body */}
                <rect x="6" y="9" width="20" height="14" fill="#A855F7" rx="1" />
                {/* Cheeks / Glow */}
                <rect x="5" y="11" width="22" height="10" fill="#9333EA" />
                {/* Eyes */}
                <rect x="10" y="13" width="2" height="3" fill="#08070D" />
                <rect x="20" y="13" width="2" height="3" fill="#08070D" />
                <rect x="11" y="13" width="1" height="1" fill="#FFFFFF" />
                <rect x="21" y="13" width="1" height="1" fill="#FFFFFF" />
                {/* Cute Smile / Nose */}
                <rect x="15" y="16" width="2" height="1" fill="#C084FC" />
                <rect x="14" y="17" width="4" height="1" fill="#08070D" />
                {/* Tail */}
                <rect x="26" y="14" width="3" height="3" fill="#A855F7" />
                <rect x="27" y="11" width="2" height="4" fill="#A855F7" />
                {/* Paws */}
                <rect x="8" y="23" width="4" height="2" fill="#7C3AED" />
                <rect x="20" y="23" width="4" height="2" fill="#7C3AED" />
              </svg>
            </div>

            <div className="text-center mt-3 z-10">
              <span className="mono-meta text-xs text-[#D8B4FE] tracking-widest font-semibold">
                BUILDING THE FUTURE
              </span>
              <p className="text-xs text-gray-400 mt-1">
                Full-Stack Systems & Applied AI Solutions
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
