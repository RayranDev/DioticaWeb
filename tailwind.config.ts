import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-ink": "var(--primary-ink)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        surface: "var(--surface)",
        line: "var(--line)",
        muted: "var(--muted)",
      },
      fontFamily: {
        title: ["var(--font-poppins)", "Poppins", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        custom: "var(--radius)",
      },
      maxWidth: {
        wrap: "var(--maxw)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        hover: "var(--shadow-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
