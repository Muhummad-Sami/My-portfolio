"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading matching reference screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline matching reference design */}
        <div className="relative space-y-8 pl-4 sm:pl-8 before:absolute before:left-10 sm:before:left-14 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#7C3AED]/40">
          {PORTFOLIO_DATA.experience.map((exp, index) => {
            const year = exp.period.includes("2025") ? "2025" : "2026";

            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Purple Circular Year Badge matching reference design */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#7C3AED] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.5)] border-2 border-black">
                  {year}
                </div>

                {/* Experience Card */}
                <div className="flex-1 rounded-2xl bg-[#0D0B18]/85 backdrop-blur-md border border-[#231C38] p-6 hover:border-[#7C3AED]/50 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#231C38] mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-[#C084FC] mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        <span>{exp.period}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  {exp.highlights && (
                    <div className="space-y-2 pt-2">
                      <ul className="space-y-1.5 text-xs text-gray-300">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#8B5CF6] font-bold shrink-0">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies tags */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#231C38]">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full bg-[#181329] border border-[#2D2447] text-[10px] font-mono text-[#D8B4FE]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
