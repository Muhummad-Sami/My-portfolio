"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

const TOTAL_FRAMES = 240;

function pad(n: number) {
  return String(n).padStart(3, "0");
}

function frameUrl(i: number) {
  return `/frames/ezgif-frame-${pad(i + 1)}.jpg`;
}

/* ─────────────────────────────────────────────────────────────────
   Ultra-Smooth & Fast Scroll-Driven Cinematic Canvas Background
   - Instant 1st frame visible immediately (zero black screen)
   - Fast batched preloading of all frames without GC thrashing
   - Fluid responsive lerp (diff * 0.3) that never lags behind scroll
   - Off-screen buffer & cached 2D context for max 60+ FPS
───────────────────────────────────────────────────────────────── */
function ScrollBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const frames = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrame = useRef<number>(0);
  const targetFrame = useRef<number>(0);
  const lastDrawnFrame = useRef<number>(-1);
  const rafId = useRef<number>(0);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  /* ── Find the closest loaded frame to target ── */
  const getNearestLoaded = useCallback((target: number): HTMLImageElement | null => {
    if (frames.current[target]?.complete) return frames.current[target];
    for (let r = 1; r < TOTAL_FRAMES; r++) {
      const up = target + r;
      if (up < TOTAL_FRAMES && frames.current[up]?.complete) return frames.current[up];
      const down = target - r;
      if (down >= 0 && frames.current[down]?.complete) return frames.current[down];
    }
    return null;
  }, []);

  /* ── Draw frame on canvas ── */
  const draw = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let ctx = ctxRef.current;
    if (!ctx) {
      ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctxRef.current = ctx;
    }

    const img = getNearestLoaded(frameIdx);
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.drawImage(img, dx, dy, dw, dh);
    lastDrawnFrame.current = frameIdx;
  }, [getNearestLoaded]);

  /* ── Resize canvas to window dimensions × DPR ── */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pw = Math.round(window.innerWidth * dpr);
    const ph = Math.round(window.innerHeight * dpr);

    if (canvas.width !== pw || canvas.height !== ph) {
      canvas.width = pw;
      canvas.height = ph;
      if (ctxRef.current) {
        ctxRef.current.imageSmoothingEnabled = true;
        ctxRef.current.imageSmoothingQuality = "high";
      }
    }
    draw(Math.round(currentFrame.current));
  }, [draw]);

  /* ── Preload frames progressively and fast ── */
  useEffect(() => {
    let isCancelled = false;

    // 1. Immediately load frame 0
    const img0 = new Image();
    img0.decoding = "async";
    img0.src = frameUrl(0);
    img0.onload = () => {
      if (isCancelled) return;
      frames.current[0] = img0;
      setFirstFrameLoaded(true);
      resizeCanvas();
      draw(0);
    };

    // 2. High priority: load the next 30 frames immediately for instant responsiveness
    for (let i = 1; i < Math.min(40, TOTAL_FRAMES); i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = frameUrl(i);
      img.onload = () => {
        if (!isCancelled) frames.current[i] = img;
      };
    }

    // 3. Batch load remaining frames in small chunks
    let currentBatch = 40;
    const BATCH_SIZE = 12;

    function loadNextBatch() {
      if (isCancelled || currentBatch >= TOTAL_FRAMES) return;
      const end = Math.min(currentBatch + BATCH_SIZE, TOTAL_FRAMES);
      for (let i = currentBatch; i < end; i++) {
        const img = new Image();
        img.decoding = "async";
        img.src = frameUrl(i);
        img.onload = () => {
          if (!isCancelled) frames.current[i] = img;
        };
      }
      currentBatch = end;
      if (currentBatch < TOTAL_FRAMES) {
        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(loadNextBatch, { timeout: 150 });
        } else {
          setTimeout(loadNextBatch, 25);
        }
      }
    }

    const timer = setTimeout(loadNextBatch, 50);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [resizeCanvas, draw]);

  /* ── Track Scroll Position ── */
  useEffect(() => {
    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      targetFrame.current = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  /* ── Smooth rAF Loop (Exponential Lerp: 0.3 for fast, fluid motion) ── */
  useEffect(() => {
    function loop() {
      const cur = currentFrame.current;
      const tgt = targetFrame.current;
      const diff = tgt - cur;

      if (Math.abs(diff) > 0.05) {
        // Fast, buttery-smooth lerp: adjusts 30% per tick, zero lag
        currentFrame.current += diff * 0.32;
        const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame.current)));
        if (frameIdx !== lastDrawnFrame.current) {
          draw(frameIdx);
        }
      } else if (cur !== tgt) {
        currentFrame.current = tgt;
        draw(tgt);
      }

      rafId.current = requestAnimationFrame(loop);
    }

    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, [draw]);

  return (
    <>
      {/* ── Fallback Instant Background Image (Zero black flash) ── */}
      <img
        src="/frames/ezgif-frame-001.jpg"
        alt=""
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -3,
          display: "block",
          opacity: firstFrameLoaded ? 0 : 1,
          transition: "opacity 0.2s ease-out",
        }}
      />

      {/* ── Fullscreen HD Canvas Background ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -2,
          display: "block",
          background: "transparent",
        }}
      />

      {/* ── Subtle Contrast Overlay Veil ── */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 30%, rgba(0,0,0,0.12) 70%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </>
  );
}

export default function Home() {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <ScrollBackgroundCanvas />
      <Hero />
      <About />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
