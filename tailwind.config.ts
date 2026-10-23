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
          50:  "#FFFFFF",
          100: "#E2E8F0",
          200: "#94A3B8",
          300: "#475569",
          400: "#332F45",
          500: "#1A1A28",
          600: "#14141F",
          700: "#101018",
          800: "#09090E",
          900: "#050508",
        },
        /* ── Crimson / Ruby Studio Neon accent ── */
        crimson: {
          50:  "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
        },
        forest: {
          50:  "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FB7185",
          400: "#F43F5E",
          500: "#E11D48",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
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
