import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B2925",
        fern: "#0C5A4E",
        mint: "#E7F3EC",
        cream: "#F8F8F4",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};

export default config;