import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertCircle, ArrowUpRight, Linkedin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Muhammad Sami Abid`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Title Header */}
        <header className="space-y-4 pb-8 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span className="mono-meta text-xs px-2.5 py-1 rounded bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold">
              {project.category}
            </span>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              Year {project.year}
            </span>
          </div>

          <h1 className="editorial-heading text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[var(--accent-primary)]">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed pt-2">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[var(--accent-primary)] text-white text-xs font-medium hover:bg-[var(--accent-hover)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Deployment</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] text-xs font-medium hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code Repository</span>
              </a>
            )}

            {project.linkedinPostUrl && (
              <a
                href={project.linkedinPostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-medium hover:bg-sky-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Video Demo</span>
              </a>
            )}
          </div>
        </header>

        {/* Embedded LinkedIn Video Demo (if available) */}
        {project.embedIframeUrl && (
          <section className="space-y-4 p-5 sm:p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            <div className="flex items-center justify-between">
              <span className="mono-meta text-xs text-[var(--text-muted)] flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-sky-500" />
                Interactive Dashboard & Video Walkthrough
              </span>
              {project.linkedinPostUrl && (
                <a
                  href={project.linkedinPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent-primary)] hover:underline"
                >
                  <span>Open on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <div className="w-full flex justify-center overflow-hidden rounded-xl bg-black/5 dark:bg-black/20 p-2 sm:p-4">
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
          </section>
        )}

        {/* Tech Stack */}
        <section className="space-y-3">
          <h2 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider">
            Technology Stack & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Problem Statement</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Technical Solution</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-4">
          <h2 className="editorial-heading text-2xl font-bold text-[var(--text-primary)]">
            Key Features & System Capabilities
          </h2>
          <ul className="space-y-3">
            {project.keyFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-2 shrink-0" />
                <span className="leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Personal Contribution */}
        <section className="p-6 rounded-xl paper-surface border border-[var(--border-strong)] space-y-2">
          <h2 className="mono-meta text-xs text-[var(--accent-primary)] font-semibold tracking-wider">
            Verified Individual Contribution
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.contribution}
          </p>
        </section>

        {/* Case Study Deep Dive (if present) */}
        {project.caseStudy && (
          <section className="space-y-8 pt-8 border-t border-[var(--border-subtle)]">
            <h2 className="editorial-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Architecture & Implementation Deep-Dive
            </h2>

            <div className="space-y-3">
              <h3 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider">
                System Architecture
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.caseStudy.architecture}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider">
                  Challenges Tackled
                </h3>
                <ul className="space-y-2">
                  {project.caseStudy.challenges.map((c, idx) => (
                    <li key={idx} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 font-mono">▸</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider">
                  Verifiable Outcomes
                </h3>
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
          </section>
        )}

        {/* Bottom Navigation */}
        <footer className="pt-10 border-t border-[var(--border-subtle)] flex items-center justify-between">
          <Link
            href="/#projects"
            className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] hover:underline flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>

          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Regarding ${encodeURIComponent(project.title)}`}
            className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            Inquire about this project →
          </a>
        </footer>
      </div>
    </article>
  );
}
