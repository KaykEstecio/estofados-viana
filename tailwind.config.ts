import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        coffee: "rgb(var(--color-coffee) / <alpha-value>)",
        caramel: "rgb(var(--color-caramel) / <alpha-value>)",
        linen: "rgb(var(--color-linen) / <alpha-value>)",
        porcelain: "rgb(var(--color-porcelain) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
    },
  },
  plugins: [],
} satisfies Config;
