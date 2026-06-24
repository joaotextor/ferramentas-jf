/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-light": "#fffad7",
        "primary-dark": "#091527",
        "secondary-light": "#478df6",
        // frontend-jf palette
        "jf-bg":            "#071427",
        "jf-surface":       "#0E1F38",
        "jf-card":          "#142B4D",
        "jf-border":        "#1F3A60",
        "jf-border-soft":   "#1A2E4F",
        "jf-ink":           "#E8EFF8",
        "jf-text":          "#CBD5E1",
        "jf-text-muted":    "#94A3B8",
        "jf-primary":       "#60A5FA",
        "jf-primary-hover": "#93C5FD",
        "jf-secondary":     "#3B82F6",
        "jf-accent":        "#93C5FD",
        "jf-code-bg":       "#050D1F",
      },
      fontFamily: {
        serif: ["var(--font-serif)", '"Source Serif 4"', "serif"],
        sans:  ["var(--font-inter)", "Inter", "sans-serif"],
        mono:  ["var(--font-mono)",  '"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};