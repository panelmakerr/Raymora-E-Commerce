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
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          950: "#052E16",
        },
        lime: {
          50: "#F7FEE7",
          100: "#ECFCCB",
          200: "#D9F99D",
          300: "#BEF264",
          400: "#A3E635",
          500: "#84CC16",
          600: "#65A30D",
          700: "#4D7C0F",
          800: "#3F6212",
          900: "#365314",
          950: "#1A2E05",
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
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.3)",
        "glow-lime": "0 0 20px rgba(132, 204, 22, 0.3)",
        "glow-lg": "0 0 40px rgba(34, 197, 94, 0.2)",
        "3d": "0 1px 0 #22c55e, 0 2px 0 #1fa34e, 0 3px 0 #1c9344, 0 4px 0 #19833b, 0 5px 0 #167332, 0 6px 0 #136329, 0 7px 0 #105320, 0 8px 15px rgba(0,0,0,0.4)",
        "3d-lime": "0 1px 0 #84cc16, 0 2px 0 #7ab814, 0 3px 0 #70a412, 0 4px 0 #669010, 0 5px 0 #5c7c0e, 0 6px 0 #52680c, 0 7px 0 #48540a, 0 8px 15px rgba(0,0,0,0.4)",
        "3d-white": "0 1px 0 #d1d1d1, 0 2px 0 #c4c4c4, 0 3px 0 #b7b7b7, 0 4px 0 #aaaaaa, 0 5px 0 #9d9d9d, 0 6px 0 #909090, 0 7px 0 #838383, 0 8px 15px rgba(0,0,0,0.3)",
        "layered": "1px 1px 0 rgba(34,197,94,0.3), 2px 2px 0 rgba(34,197,94,0.2), 3px 3px 0 rgba(34,197,94,0.1), 4px 4px 0 rgba(34,197,94,0.05), 5px 5px 20px rgba(0,0,0,0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient": "linear-gradient(135deg, #052E16 0%, #14532D 25%, #166534 50%, #15803D 75%, #16A34A 100%)",
        "lime-gradient": "linear-gradient(135deg, #22C55E 0%, #84CC16 50%, #A3E635 100%)",
        "hero-gradient": "linear-gradient(180deg, #052E16 0%, #14532D 40%, #166534 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "slide-3d": "slide3d 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "text-3d": "text3d 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(34, 197, 94, 0.5)" },
        },
        slide3d: {
          "0%": { transform: "perspective(800px) rotateY(-10deg) translateX(-30px)", opacity: "0" },
          "100%": { transform: "perspective(800px) rotateY(0deg) translateX(0)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        text3d: {
          "0%, 100%": { transform: "perspective(500px) rotateX(0deg)", textShadow: "0 1px 0 #22c55e, 0 2px 0 #1fa34e, 0 3px 0 #1c9344, 0 4px 0 #19833b, 0 5px 10px rgba(0,0,0,0.3)" },
          "50%": { transform: "perspective(500px) rotateX(5deg)", textShadow: "0 2px 0 #22c55e, 0 4px 0 #1fa34e, 0 6px 0 #1c9344, 0 8px 0 #19833b, 0 10px 20px rgba(0,0,0,0.4)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
