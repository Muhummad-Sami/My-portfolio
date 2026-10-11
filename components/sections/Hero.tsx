"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail, MessageSquare, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

/* ─── Generative particle network canvas ───────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;

    const getAccent = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-primary")
        .trim() || "#145C46";

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
    }

    const COUNT = 32;
    let particles: Particle[] = [];

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1.2 + Math.random() * 1.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const accent = getAccent();

      const DIST = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `${accent}${Math.round((1 - d / DIST) * 24).toString(16).padStart(2, "0")}`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${accent}45`;
        ctx.fill();
      });
    };

    const update = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });
    };

    const loop = () => {
      update();
      draw();
      animId = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    resize();
    init();
    loop();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative py-12 md:py-20 border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Swiss grid overlay */}
      <div className="absolute inset-0 swiss-grid pointer-events-none opacity-50" aria-hidden="true" />
      <ParticleCanvas />
      <div
        className="absolute -top-28 -right-28 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(20,92,70,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── LEFT COLUMN: Core Identity ── */}
          <motion.div
            className="lg:col-span-7 space-y-5"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Status badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-secondary)] text-xs font-mono shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-forest-600 dark:bg-forest-300 animate-pulse-slow" />
                <span>Available for Roles · Software Engineering @ Superior University</span>
              </span>
            </motion.div>

            {/* Name & Tagline */}
            <motion.div variants={item} className="space-y-2">
              <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight">
                Muhammad <span className="text-[var(--accent-primary)]">Sami Abid</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-[var(--text-primary)] leading-snug">
                Software Engineering Student · Full-Stack Web Developer · Aspiring AI Engineer
              </p>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              variants={item}
              className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl"
            >
              Undergraduate engineer with hands-on internship experience across full-stack web platforms,
              data pipelines, and machine learning deployments. Passionate about building intelligent,
              production-ready systems that connect modern web architecture with applied AI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-2.5 pt-1"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-white font-medium text-xs sm:text-sm hover:bg-[var(--accent-hover)] transition-all shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all font-medium text-xs sm:text-sm shadow-subtle"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all text-xs font-mono"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CV (PDF)</span>
              </a>

              <div className="flex items-center gap-1.5 ml-auto sm:ml-2">
                {[
                  { href: PORTFOLIO_DATA.personal.github, label: "GitHub", icon: <Github className="w-4 h-4" /> },
                  { href: PORTFOLIO_DATA.personal.linkedin, label: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
                  { href: `mailto:${PORTFOLIO_DATA.personal.email}`, label: "Email", icon: <Mail className="w-4 h-4" /> },
                ].map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-subtle)] transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Technical Profile Snapshot ── */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-editorial dark:shadow-editorial-dark p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span className="mono-meta text-xs text-[var(--text-primary)] font-semibold">
                    Core Technical Domains
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">Lahore, PK</span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-600 dark:bg-forest-300 shrink-0" />
                    <h3 className="text-xs font-semibold text-[var(--text-primary)]">
                      Full-Stack Web Architecture
                    </h3>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] pl-3.5 leading-relaxed">
                    Next.js 15, React, TypeScript, Node.js, Express, MongoDB, MySQL, REST APIs, Tailwind.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-400 dark:bg-forest-400 shrink-0" />
                    <h3 className="text-xs font-semibold text-[var(--text-primary)]">
                      Data Analytics & Business Intelligence
                    </h3>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] pl-3.5 leading-relaxed">
                    Python (Pandas, NumPy), Advanced SQL (CTEs, Window Functions), Power BI & EDA.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-300 dark:bg-forest-300 shrink-0" />
                    <h3 className="text-xs font-semibold text-[var(--text-primary)]">
                      Applied AI & Machine Learning
                    </h3>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] pl-3.5 leading-relaxed">
                    Scikit-Learn regression models, asynchronous FastAPI serving & Gemini API automation.
                  </p>
                </div>
              </div>

              <div className="pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="text-[var(--text-muted)]">Track Record</span>
                <span className="font-semibold text-[var(--text-primary)] text-xs">
                  2 Internships (TEYZIX CORE · DevHub)
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
