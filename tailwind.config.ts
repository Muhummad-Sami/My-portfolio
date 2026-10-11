import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Light mode surface tokens ── */
        ivory: {
          50:  "#FDFCF9",
          100: "#F7F5EF",
          200: "#EDE9DF",
          300: "#DDD8CC",
          400: "#C9C5BB",
          500: "#A8A49C",
          600: "#777B76",
          700: "#4B524D",
          800: "#2E332F",
          900: "#202321",
        },
        /* ── Dark mode surfaces ── */
        graphite: {
          50:  "#F2F1EB",
          100: "#B2B8B2",
          200: "#6B736B",
          300: "#3A413E",
          400: "#2A2F2D",
          500: "#242927",
          600: "#202523",
          700: "#1D2120",
          800: "#171A19",
          900: "#0F1110",
        },
        /* ── Forest Green accent ── */
        forest: {
          50:  "#E8F5EF",
          100: "#C5E6D5",
          200: "#9ED0B7",
          300: "#76C6A3",   /* dark mode accent */
          400: "#3DA882",
          500: "#1E8A66",
          600: "#145C46",   /* light mode accent (primary) */
          700: "#0E4333",
          800: "#092D22",
          900: "#041811",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "Charter", "Bitstream Charter", "Sitka Text", "Cambria", "Georgia", "serif"],
        sans:  ["var(--font-sans)",  "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono:  ["var(--font-mono)",  "JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        editorial:      "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -4px rgba(0,0,0,0.06)",
        "editorial-lg": "0 2px 4px rgba(0,0,0,0.04), 0 20px 48px -8px rgba(0,0,0,0.10)",
        "editorial-dark":    "0 1px 2px rgba(0,0,0,0.3), 0 8px 24px -4px rgba(0,0,0,0.35)",
        "editorial-dark-lg": "0 2px 4px rgba(0,0,0,0.4), 0 20px 48px -8px rgba(0,0,0,0.5)",
        subtle: "0 1px 2px rgba(0,0,0,0.04)",
        card:   "0 0 0 1px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "xl2": "1rem",
        "xl3": "1.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease both",
        "slide-up": "slideUp 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
