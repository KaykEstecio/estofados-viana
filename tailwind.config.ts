import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        ink: "#2B2118",
        coffee: "#4A3328",
        caramel: "#B9824A",
        linen: "#E8DED2",
        porcelain: "#FFFDF9",
      },
    },
  },
  plugins: [],
} satisfies Config;
