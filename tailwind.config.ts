import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFAF4",
          100: "#FAF4E9",
          200: "#F3E8D6",
          300: "#E9D8C0",
        },
        ink: {
          DEFAULT: "#2A2520",
          soft: "#5B5249",
          faint: "#8A7F73",
        },
        moss: {
          50: "#F1F5EF",
          100: "#E0E9DC",
          200: "#C2D3BB",
          300: "#9DB893",
          400: "#779A6D",
          500: "#587E51",
          600: "#43643E",
          700: "#365033",
          800: "#2C402A",
          900: "#243523",
        },
        clay: {
          50: "#FCF2ED",
          100: "#F8E2D7",
          200: "#F0C4AF",
          300: "#E5A184",
          400: "#D97F5F",
          500: "#C96343",
          600: "#AE4C31",
          700: "#8F3C28",
        },
        honey: {
          50: "#FDF8EA",
          100: "#FAEDC4",
          200: "#F4DA8F",
          300: "#EDC15A",
          400: "#E5A832",
          500: "#D08C1D",
          600: "#A96B17",
          700: "#865217",
        },
        rose: {
          50: "#FCF3F1",
          100: "#F9E2DE",
          200: "#F2C6BE",
          300: "#E8A399",
          400: "#D87F74",
          500: "#C25E54",
        },
        night: {
          900: "#121512",
          800: "#191D19",
          700: "#222722",
          600: "#2E352E",
        },
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(42,37,32,0.04), 0 12px 32px -12px rgba(42,37,32,0.14)",
        lift: "0 2px 4px rgba(42,37,32,0.05), 0 24px 56px -20px rgba(42,37,32,0.24)",
        glow: "0 0 0 1px rgba(88,126,81,0.12), 0 20px 48px -24px rgba(88,126,81,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--tw-rotate))" },
          "50%": { transform: "translateY(-10px) rotate(var(--tw-rotate))" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.06)", opacity: "0.8" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        float: "float 7s ease-in-out infinite",
        breathe: "breathe 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
