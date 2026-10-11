"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Server,
  LayoutGrid,
  X,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Linkedin,
} from "lucide-react";
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

// ── colour chips per category ──────────────────────────────────────────────
const CAT_STYLE: Record<string, string> = {
  "Full-Stack Development": "bg-sky-500/10 text-sky-700 dark:text-sky-400",
  "AI & Machine Learning": "bg-violet-500/10 text-violet-700 dark:text-violet-400",
  "Data Analysis": "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  "Systems & Networking": "bg-rose-500/10 text-rose-700 dark:text-rose-400",
};

// ── single compact project card ────────────────────────────────────────────
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.28, delay: index * 0.04 }}
      className="group flex flex-col bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl overflow-hidden hover:border-[var(--border-strong)] hover:shadow-editorial transition-all duration-200"
    >
      {/* ── header band ── */}
      <div className="flex items-center justify-between px-5 pt-5 pb-0">
        <span
          className={`inline-block px-2 py-0.5 text-[10px] font-mono rounded font-medium ${CAT_STYLE[project.category] ?? "bg-[var(--accent-subtle)] text-[var(--accent-primary)]"}`}
        >
          {project.category}
        </span>
        <span className="text-[11px] font-mono text-[var(--text-muted)]">{project.year}</span>
      </div>

      {/* ── body ── */}
      <div className="flex flex-col flex-1 px-5 pt-3 pb-5 gap-3">
        {/* title */}
        <div>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left group/title focus:outline-none"
          >
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover/title:text-[var(--accent-primary)] transition-colors leading-snug">
              {project.title}
            </h3>
          </button>
          <p className="text-xs font-serif italic text-[var(--accent-primary)] mt-0.5 leading-snug">
            {project.subtitle}
          </p>
        </div>

        {/* description */}
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* metrics chip if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 text-[10px] font-mono py-1 px-2.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            {project.metrics.map((m, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                <span className="text-[var(--text-muted)]">{m.label}:</span>
                <span className="text-[var(--accent-primary)] font-semibold">{m.value}</span>
              </span>
            ))}
          </div>
        )}

        {/* tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* divider */}
        <div className="border-t border-[var(--border-subtle)]" />

        {/* action row */}
        <div className="flex items-center gap-2 pt-0.5 flex-wrap">
          {/* Case study */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--accent-primary)] hover:underline"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>

          <div className="flex-1" />

          {/* Live demo */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-mono bg-[var(--accent-subtle)] border border-[var(--accent-border)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
              title="View live deployment"
            >
              <ExternalLink className="w-3 h-3" />
              Live
            </a>
          )}

          {/* Backend link (for AI CRM Agent split architecture) */}
          {(project as any).liveBackendUrl && (
            <a
              href={(project as any).liveBackendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="API Backend"
            >
              <Server className="w-3 h-3" />
              API
            </a>
          )}

          {/* LinkedIn Video Demo */}
          {project.linkedinPostUrl && (
            <a
              href={project.linkedinPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-mono bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 hover:bg-sky-500 hover:text-white transition-colors"
              title="View LinkedIn video demo"
            >
              <Linkedin className="w-3 h-3" />
              Demo
            </a>
          )}

          {/* GitHub */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="Source code"
            >
              <Github className="w-3 h-3" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ── main section ───────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = PORTFOLIO_DATA.projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const counts = CATEGORIES.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] =
      cat === "All"
        ? PORTFOLIO_DATA.projects.length
        : PORTFOLIO_DATA.projects.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="absolute inset-0 swiss-grid pointer-events-none opacity-50" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-subtle)] mb-10"
        >
          <div>
            <span className="mono-meta text-xs text-[var(--accent-primary)] font-semibold">
              02 / Projects
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-1">
              Projects & Case Studies
            </h2>
          </div>
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shrink-0 px-3.5 py-2 rounded-md border border-[var(--border-strong)] bg-[var(--bg-card)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>@Muhummad-Sami</span>
            <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
          </a>
        </motion.div>

        {/* ── category filters ── */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all ${
                  active
                    ? "bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-sm"
                    : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]"
                }`}
              >
                {cat}
                <span
                  className={`text-[10px] rounded-full px-1.5 py-0.5 font-semibold ${active ? "bg-white/20 text-white" : "bg-[var(--bg-primary)] text-[var(--text-muted)]"}`}
                >
                  {counts[cat]}
                </span>
              </button>
            );
          })}

          {activeCategory !== "All" && (
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="flex items-center gap-1 ml-1 px-2.5 py-1.5 rounded-full border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <X className="w-3 h-3" />
              Clear
            </button>
          )}
        </div>

        {/* ── empty state ── */}
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm text-[var(--text-muted)]">No projects in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-3 text-xs font-mono text-[var(--accent-primary)] underline"
            >
              View all projects
            </button>
          </div>
        )}

        {/* ── projects grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* ── footer note ── */}
        <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>
            Showing {filtered.length} of {PORTFOLIO_DATA.projects.length} projects
          </span>
          <a
            href={`${PORTFOLIO_DATA.personal.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[var(--accent-primary)] transition-colors font-mono"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>All {22} GitHub repositories</span>
          </a>
        </div>
      </div>

      {/* ── case study modal ── */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
