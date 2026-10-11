"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
      type="button"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent-primary)] text-white text-xs font-medium hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
    >
      <Printer className="w-3.5 h-3.5" />
      <span>Print or Save as PDF</span>
    </button>
  );
}
