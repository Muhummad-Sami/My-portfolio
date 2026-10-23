"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Server, Linkedin } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import ProjectModal from "@/components/projects/ProjectModal";

const CATEGORIES = [
  "All",
  "Full-Stack Development",
  "AI & Machine Learning",
  "Data Analysis",
  "Systems & Networking",
] as const;

type CategoryType = (typeof CATEGORIES)[number];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex flex-col bg-[#0D0B18]/90 backdrop-blur-md border border-[#231C38] rounded-2xl overflow-hidden hover:border-[#7C3AED]/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.25)] transition-all duration-300"
    >
      {/* ── Top Preview Banner (matches image cards in screenshot) ── */}
      <div className="relative h-44 w-full bg-gradient-to-br from-[#1E1438] via-[#120D24] to-[#0A0714] flex items-center justify-center overflow-hidden border-b border-[#231C38]">
        {/* Subtle decorative purple pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B18] via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-2 text-center px-4">
          <span className="text-3xl font-mono text-[#C084FC] group-hover:scale-110 transition-transform">
            ⚡
          </span>
          <span className="text-xs font-mono text-[#D8B4FE] tracking-widest uppercase font-semibold">
            {project.category}
          </span>
        </div>

        <span className="absolute top-3 right-3 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-gray-300">
          {project.year}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5 gap-3.5">
        <div>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left group/title focus:outline-none w-full"
          >
            <h3 className="text-lg font-bold text-white group-hover/title:text-[#C084FC] transition-colors leading-snug">
              {project.title}
            </h3>
          </button>
          <p className="text-xs text-[#A855F7] font-medium mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech Stack Pills matching reference design */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-[#181329] border border-[#2D2447] text-[#D8B4FE]"
            >
              {t}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-white/5 text-gray-400">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* ── Action Buttons (matches purple 'View Details' pill in screenshot) ── */}
        <div className="pt-2 border-t border-[#231C38] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="flex-1 inline-flex items-center justify-center py-2 px-4 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-medium transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
          >
            <span>View Details</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#2D2447] bg-[#181329] flex items-center justify-center text-gray-300 hover:text-white hover:border-[#7C3AED] transition-colors"
              title="View GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#2D2447] bg-[#181329] flex items-center justify-center text-gray-300 hover:text-[#C084FC] hover:border-[#7C3AED] transition-colors"
              title="View Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = PORTFOLIO_DATA.projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Centered Section Header (matches reference screenshot) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My Projects
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            A collection of projects I&apos;ve worked on, ranging from full-stack web applications
            to intelligent machine learning deployments and data pipelines.
          </p>
        </motion.div>

        {/* ── Category Filter Pills ── */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar flex-wrap">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  active
                    ? "bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                    : "bg-[#0E0B18] border border-[#231C38] text-gray-400 hover:text-white hover:border-[#7C3AED]/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── 3-Column Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
