import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        dark: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d1d1d1",
          400: "#b4b4b4",
          500: "#9a9a9a",
          600: "#818181",
          700: "#6a6a6a",
          800: "#454545",
          900: "#2a2a2a",
          950: "#121212",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(34,197,94,0.3)",
        "glow-lg": "0 0 40px rgba(34,197,94,0.2)",
        layered:
          "1px 1px 0 rgba(34,197,94,0.3), 2px 2px 0 rgba(34,197,94,0.2), 3px 3px 0 rgba(34,197,94,0.1), 4px 4px 20px rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #052e16 0%, #14532d 40%, #166534 100%)",
        "green-gradient":
          "linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
