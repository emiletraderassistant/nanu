import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tinta: "var(--tinta)",
        pizarra: "var(--pizarra)",
        electrico: "var(--electrico)",
        piedra: "var(--piedra)",
        hueso: "var(--hueso)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        "display": "-0.04em",
        "h1": "-0.03em",
        "h2": "-0.02em",
        "logo": "-0.05em",
        "caption": "0.12em",
      },
      fontSize: {
        "display": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "700" }],
        "h1": ["clamp(2rem, 3.5vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "600" }],
        "h2": ["clamp(1.5rem, 2.4vw, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "h3": ["1.125rem", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body": ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
        "caption": ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.12em", fontWeight: "500" }],
        "micro": ["0.625rem", { lineHeight: "1.4", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

export default config;
