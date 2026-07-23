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
        accent: "var(--accent)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        surface: "var(--surface)",
        line: "var(--line)",
        muted: "var(--muted)",
      },
      fontFamily: {
        serif: ["var(--font-outfit)", "Outfit", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        custom: "var(--radius)",
      },
      maxWidth: {
        wrap: "var(--maxw)",
      },
    },
  },
  plugins: [],
};
export default config;
