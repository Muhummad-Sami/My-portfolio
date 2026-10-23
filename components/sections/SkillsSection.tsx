"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Code2, Server, Database, BarChart3, Cpu, Network } from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "Full-Stack Web Development": Server,
  "Databases & Data Storage": Database,
  "Data Analysis & Business Intelligence": BarChart3,
  "AI & Machine Learning": Cpu,
  "Systems, Networking & DevOps": Network,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading matching reference screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skill category cards matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.title] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col bg-[#0D0B18]/85 backdrop-blur-md rounded-2xl border border-[#231C38] p-6 hover:border-[#7C3AED]/50 hover:shadow-[0_0_25px_rgba(124,58,237,0.2)] transition-all duration-300"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 pb-3 border-b border-[#231C38] mb-4">
                  <div className="p-2 rounded-xl bg-[#1A142E] text-[#C084FC] group-hover:bg-[#7C3AED]/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {category.title}
                  </h3>
                </div>

                {category.description && (
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                )}

                {/* Skill pills matching reference design */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={skill.context}
                      className="inline-block px-3 py-1 rounded-full bg-[#181329] border border-[#2D2447] text-xs font-mono text-[#D8B4FE] hover:border-[#7C3AED] hover:text-white hover:bg-[#7C3AED]/20 transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
