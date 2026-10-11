import React from "react";

interface SectionHeaderProps {
  index: string;    // e.g. "01"
  label: string;    // e.g. "About"
  heading: string;  // e.g. "About Me"
  meta?: string;    // optional right-side detail
}

/**
 * Consistent section header: editorial number tag + serif heading + Swiss divider.
 * This is a server component — no framer-motion here; animate from the parent.
 */
export default function SectionHeader({ index, label, heading, meta }: SectionHeaderProps) {
  return (
    <div className="mb-12 pb-4 border-b border-[var(--border-subtle)] flex items-end justify-between gap-4">
      <div>
        <p className="mono-meta text-xs text-[var(--accent-primary)] mb-1">
          {index} / {label}
        </p>
        <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          {heading}
        </h2>
      </div>
      {meta && (
        <span className="mono-meta text-[10px] text-[var(--text-muted)] hidden sm:block shrink-0">
          {meta}
        </span>
      )}
    </div>
  );
}
