"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import SectionHeader from "@/components/layout/SectionHeader";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="absolute inset-0 swiss-grid pointer-events-none opacity-50" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader index="04" label="Experience" heading="Work Experience" />
        </motion.div>

        {/* Timeline / Editorial Experience List */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="paper-surface paper-surface-hover rounded-xl p-6 sm:p-8 border border-[var(--border-subtle)] space-y-6"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <span className="mono-meta text-[10px] px-2 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-base text-[var(--accent-primary)] font-medium mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {exp.technologies && (
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
