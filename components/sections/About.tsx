"use client";

import { motion } from "framer-motion";
import { Laptop, Brain, BarChart3, Network, Check, Compass, Target } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 border-b border-[var(--border-subtle)] relative overflow-hidden">
      {/* Swiss grid overlay */}
      <div className="absolute inset-0 swiss-grid pointer-events-none opacity-50" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <SectionHeader
            index="01"
            label="About"
            heading="About Me & Experience"
            meta="Lahore, PK"
          />
        </motion.div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Left Column: Focused Narrative & Competencies */}
          <motion.div
            className="lg:col-span-7 space-y-4 text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={item}>
              I am a Software Engineering undergraduate at The Superior University, Lahore, with hands-on
              experience delivering production software across two industry internships. At{" "}
              <strong className="text-[var(--text-primary)] font-semibold">TEYZIX CORE</strong>, I worked as a
              Full-Stack Intern architecting web platforms, authenticated REST APIs, and database schemas
              with Next.js, React, Node.js, MongoDB, and MySQL. At{" "}
              <strong className="text-[var(--text-primary)] font-semibold">Developer Hub</strong>, I engineered
              data pipelines, statistical cleaning, and executive Power BI dashboards using Python (Pandas, NumPy) and SQL.
            </motion.p>

            <motion.p variants={item}>
              My work bridges scalable full-stack development with applied artificial intelligence. From deploying
              autonomous AI lead qualification agents (FastAPI & Gemini API) to training regression models (~0.90 R²),
              my ambition is to grow as an <strong className="text-[var(--text-primary)] font-semibold">AI Engineer</strong>{" "}
              who designs intelligent, reliable systems that solve real-world business problems.
            </motion.p>

            {/* Core Competencies Checklist */}
            <motion.div
              variants={item}
              className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2"
            >
              {[
                "Full-Stack Web (Next.js 15, React, Node.js)",
                "Data Pipelines (Python, SQL, Power BI)",
                "Applied AI & Model Serving (FastAPI, Gemini API)",
                "Database Design & 3NF Normalization",
                "Clean RESTful API Design & Validation",
                "C++ Data Structures, Algorithms & OOP",
              ].map((strength) => (
                <div key={strength} className="flex items-center gap-2 text-xs text-[var(--text-primary)]">
                  <div className="w-3.5 h-3.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent-primary)] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{strength}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Compact Technical Domains Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-editorial dark:shadow-editorial-dark p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span className="mono-meta text-xs text-[var(--text-primary)] font-semibold">
                    Core Competencies
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">Verified</span>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    Icon: Laptop,
                    title: "Full-Stack Web Development",
                    desc: "Next.js 15, React, TypeScript, Node.js, Express, MongoDB, MySQL, JWT, Zustand, Tailwind.",
                  },
                  {
                    Icon: BarChart3,
                    title: "Data Analytics & Business Intel",
                    desc: "Python (Pandas, NumPy, Matplotlib), SQL (CTEs, Window Fns), Power BI dashboards.",
                  },
                  {
                    Icon: Brain,
                    title: "Applied AI & Machine Learning",
                    desc: "Scikit-Learn models, FastAPI async inference, Google Gemini API agent orchestration.",
                  },
                  {
                    Icon: Network,
                    title: "CS Fundamentals & Systems",
                    desc: "C++ Data Structures (Trees, Queues, Stacks), OOP, Cisco Packet Tracer (VLANs, OSPF).",
                  },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <div className="p-1.5 rounded bg-[var(--bg-card)] text-[var(--accent-primary)] mt-0.5 shrink-0 shadow-subtle">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--text-primary)]">{title}</h4>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="text-[var(--text-muted)]">Location</span>
                <span className="font-semibold text-[var(--text-primary)] text-xs">Lahore, PK (Open to Remote)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
