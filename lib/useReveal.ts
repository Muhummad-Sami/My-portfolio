"use client";

import { useEffect, useRef } from "react";

/**
 * useReveal — attaches a lightweight IntersectionObserver to an element ref.
 * Adds the `.in-view` class when the element enters the viewport.
 * Respects prefers-reduced-motion automatically via CSS.
 */
export function useReveal(threshold = 0.1, rootMargin = "0px 0px -60px 0px") {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
