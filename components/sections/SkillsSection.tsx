"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Code2, Server, Database, BarChart3, Cpu, Network } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Programming Languages":                Code2,
  "Full-Stack Web Development":           Server,
  "Databases & Data Storage":             Database,
  "Data Analysis & Business Intelligence": BarChart3,
  "AI & Machine Learning":               Cpu,
  "Systems, Networking & DevOps":        Network,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="absolute inset-0 swiss-grid pointer-events-none opacity-50" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader index="03" label="Skills" heading="Skills & Technologies" />
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.skills.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.title] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.42, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-[var(--bg-card)] rounded-xl border border-[var(--border-subtle)] p-5 hover:border-[var(--border-strong)] hover:shadow-editorial dark:hover:shadow-editorial-dark transition-all duration-200"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 pb-3 border-b border-[var(--border-subtle)] mb-4">
                  <div className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--accent-primary)] group-hover:bg-[var(--accent-subtle)] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[var(--text-primary)] leading-tight">
                    {category.title}
                  </h3>
                </div>

                {category.description && (
                  <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">{category.description}</p>
                )}

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={skill.context}
                      className="inline-block px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)] hover:border-[var(--accent-border)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-subtle)] transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-10 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] flex items-center justify-between"
        >
          <span>
            No subjective percentage bars. Each competency is validated by actual repository commits or academic transcripts.
          </span>
          <span className="font-mono text-[11px] text-[var(--accent-primary)] hidden sm:inline">
            CV Verified
          </span>
        </motion.div>
      </div>
    </section>
  );
}
