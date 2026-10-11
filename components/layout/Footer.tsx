"use client";

import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-serif text-xl font-bold tracking-tight text-[var(--text-primary)]">
              {PORTFOLIO_DATA.personal.name}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
              Software Engineering undergraduate at The Superior University, Lahore. Focused on
              full-stack systems, clean architecture, data pipelines, and applied AI tools.
            </p>
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{PORTFOLIO_DATA.personal.location}</span>
              <span className="mx-1">•</span>
              <span className="text-[var(--accent-primary)] font-medium">Available for Opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a
                  href="#about"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  About Biography
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Technical Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Education & Honors
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3">
            <h4 className="mono-meta text-xs text-[var(--text-muted)] tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-medium hover:underline pt-1"
              >
                <span>Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {PORTFOLIO_DATA.personal.name}. Software Engineer & Full-Stack Developer.</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
