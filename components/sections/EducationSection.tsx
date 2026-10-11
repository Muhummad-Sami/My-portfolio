"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Languages, Check, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import SectionHeader from "@/components/layout/SectionHeader";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="absolute inset-0 swiss-grid pointer-events-none opacity-50" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader index="05" label="Education" heading="Education & Certifications" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider mb-4">
              Degrees
            </h3>

            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="paper-surface paper-surface-hover rounded-xl p-6 border border-[var(--border-subtle)] space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)]">
                    <div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-[var(--accent-primary)] font-medium">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-[var(--text-muted)] flex sm:flex-col sm:items-end gap-2">
                      <span>{edu.period}</span>
                      {edu.grade && (
                        <span className="px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold">
                          Score: {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider mb-4">
                Certifications
              </h3>

              <div className="space-y-4">
                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className="p-4 rounded-xl paper-surface border border-[var(--border-subtle)] space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                          {cert.name}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0">
                        {cert.year}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] pl-6">
                      Issued by <span className="font-medium text-[var(--text-primary)]">{cert.issuer}</span>
                    </p>

                    {cert.credentialNote && (
                      <p className="text-[11px] text-[var(--text-muted)] pl-6 leading-normal">
                        {cert.credentialNote}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4">
              <h3 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider">
                Soft Skills & Languages
              </h3>

              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Problem-Solving",
                  "Clear Communication",
                  "Team Collaboration",
                  "Eagerness to Learn",
                  "Time Management",
                  "Adaptability",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Languages className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>Languages</span>
                </span>
                <span className="font-mono text-xs text-[var(--text-primary)]">
                  Urdu (Native) • English (Intermediate)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
