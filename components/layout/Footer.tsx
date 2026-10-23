"use client";

import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[#231C38] bg-[#0A0814]/90 backdrop-blur-md mt-24 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-serif italic text-2xl font-bold tracking-tight text-[#C084FC]">
              samicreates <span className="text-xs font-mono font-normal text-gray-400 not-italic">({PORTFOLIO_DATA.personal.name})</span>
            </h3>
            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              Software Engineering undergraduate at The Superior University, Lahore. Focused on
              full-stack systems, clean architecture, data pipelines, and applied AI tools.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>{PORTFOLIO_DATA.personal.location}</span>
              <span className="mx-1">•</span>
              <span className="text-[#C084FC] font-medium">Available for Opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-gray-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#C084FC] transition-colors"
                >
                  About Biography
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-[#C084FC] transition-colors"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-[#C084FC] transition-colors"
                >
                  Technical Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-[#C084FC] transition-colors"
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-gray-400 hover:text-[#C084FC] transition-colors"
                >
                  Education & Honors
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#C084FC] transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-gray-300 font-semibold">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-[#8B5CF6]" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#8B5CF6]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8B5CF6]" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C084FC] font-medium hover:underline pt-1"
              >
                <span>Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#231C38] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {PORTFOLIO_DATA.personal.name}. Software Engineer & Full-Stack Developer.</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#2D2447] bg-[#141024] text-gray-300 hover:text-white hover:border-[#7C3AED] hover:bg-[#7C3AED]/20 transition-all"
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

