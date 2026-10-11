"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Layers, Cpu, ArrowUpRight, Linkedin } from "lucide-react";
import { Project } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg-primary)] border border-[var(--border-strong)] rounded-xl shadow-2xl z-10 text-[var(--text-primary)]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="mono-meta text-[11px] px-2.5 py-1 rounded bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Header info */}
            <div>
              <h2
                id="modal-project-title"
                className="editorial-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]"
              >
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[var(--accent-primary)] font-serif italic mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Actions (GitHub + Live Demo) */}
            <div className="flex flex-wrap items-center gap-3 pt-1 border-b border-[var(--border-subtle)] pb-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent-primary)] text-white text-xs font-medium hover:bg-[var(--accent-hover)] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Live Deployment</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] text-xs font-medium hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Source Code</span>
                </a>
              )}

              {project.linkedinPostUrl && (
                <a
                  href={project.linkedinPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-medium hover:bg-sky-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Video Demo</span>
                </a>
              )}

              <a
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:underline ml-auto"
              >
                <span>Permanent Link</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded LinkedIn Video Demo (if available) */}
            {project.embedIframeUrl && (
              <div className="space-y-3 p-4 sm:p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <div className="flex items-center justify-between">
                  <span className="mono-meta text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-sky-500" />
                    Interactive Dashboard & Video Walkthrough
                  </span>
                  {project.linkedinPostUrl && (
                    <a
                      href={project.linkedinPostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--accent-primary)] hover:underline"
                    >
                      <span>Open on LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <div className="w-full flex justify-center overflow-hidden rounded-lg bg-black/5 dark:bg-black/20 p-2 sm:p-4">
                  <iframe
                    src={project.embedIframeUrl}
                    height="399"
                    width="504"
                    frameBorder="0"
                    allowFullScreen
                    title={`${project.title} - LinkedIn Embedded Video`}
                    className="max-w-full rounded border border-[var(--border-subtle)] shadow-sm"
                  />
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <h3 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider mb-2.5">
                Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Engineering Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div>
              <h3 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider mb-3">
                Key Features & Capabilities
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* My Personal Contribution */}
            <div className="p-5 rounded-lg paper-surface border border-[var(--border-strong)] space-y-2">
              <h3 className="mono-meta text-xs text-[var(--accent-primary)] font-semibold tracking-wider">
                My Direct Contribution & Implementation
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* Case Study Details (if present) */}
            {project.caseStudy && (
              <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)]">
                <h3 className="editorial-heading text-xl font-bold text-[var(--text-primary)]">
                  Technical Case Study
                </h3>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    Architecture & Data Flow
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.caseStudy.architecture}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                      Engineering Challenges Overcome
                    </h4>
                    <ul className="space-y-2">
                      {project.caseStudy.challenges.map((c, idx) => (
                        <li key={idx} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                          <span className="text-amber-600 dark:text-amber-400 font-mono">▸</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                      Verifiable Technical Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.caseStudy.outcomes.map((o, idx) => (
                        <li key={idx} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                          <span className="text-[var(--accent-primary)] font-mono">✓</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer of modal */}
          <div className="px-6 py-4 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span>Source verified from CV & GitHub repository</span>
            <button
              onClick={onClose}
              type="button"
              className="px-3 py-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--border-strong)] text-[var(--text-primary)]"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
