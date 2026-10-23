"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Languages, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading matching reference design */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#C084FC] font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#A855F7]" />
              <span>Academic Degrees</span>
            </h3>

            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="rounded-2xl bg-[#0D0B18]/85 backdrop-blur-md border border-[#231C38] p-6 hover:border-[#7C3AED]/50 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-[#231C38]">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-[#C084FC] mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-gray-400 flex sm:flex-col sm:items-end gap-2 shrink-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        <span>{edu.period}</span>
                      </span>
                      {edu.grade && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#181329] border border-[#2D2447] text-[#D8B4FE] font-medium">
                          Score: {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
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
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#C084FC] font-semibold mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#A855F7]" />
                <span>Certifications</span>
              </h3>

              <div className="space-y-4">
                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className="p-5 rounded-2xl bg-[#0D0B18]/85 backdrop-blur-md border border-[#231C38] hover:border-[#7C3AED]/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-[#1A142E] text-[#C084FC] shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-white leading-snug">
                          {cert.name}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-gray-400 shrink-0">
                        {cert.year}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 pl-8">
                      Issued by <span className="font-medium text-[#D8B4FE]">{cert.issuer}</span>
                    </p>

                    {cert.credentialNote && (
                      <p className="text-[11px] text-gray-400 pl-8 leading-normal">
                        {cert.credentialNote}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="p-6 rounded-2xl bg-[#0D0B18]/85 backdrop-blur-md border border-[#231C38] space-y-4">
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#C084FC] font-semibold">
                Professional Strengths
              </h3>

              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Problem-Solving",
                  "Clear Communication",
                  "Team Collaboration",
                  "Fast Self-Learner",
                  "Time Management",
                  "Clean Architecture",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full bg-[#181329] border border-[#2D2447] text-xs font-mono text-[#D8B4FE] hover:border-[#7C3AED] hover:text-white transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#231C38] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Languages className="w-4 h-4 text-[#A855F7]" />
                  <span>Languages</span>
                </span>
                <span className="font-mono text-xs text-[#D8B4FE]">
                  Urdu (Native) • English (Professional)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
