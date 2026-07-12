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
        parchment: {
          50: "#FDF8F0",
          100: "#FAF0E2",
          200: "#F5E1C5",
          300: "#EDD0A5",
          400: "#E2B97E",
          500: "#D4A05A",
          600: "#C08840",
          700: "#9E6D30",
          800: "#7A5525",
          900: "#5C3F1B",
        },
        espresso: {
          50: "#F5F0EB",
          100: "#E6DDD4",
          200: "#CDB9A8",
          300: "#B3947C",
          400: "#9A7558",
          500: "#7D5A3C",
          600: "#5E4330",
          700: "#463224",
          800: "#2E2118",
          900: "#1A120E",
        },
        gold: {
          50: "#FDF9EE",
          100: "#FAF0D2",
          200: "#F4DFA0",
          300: "#ECC963",
          400: "#E0AF33",
          500: "#C8951B",
          600: "#A67614",
          700: "#805712",
          800: "#5E4010",
          900: "#3E2A0C",
        },
        sage: {
          50: "#F4F5F0",
          100: "#E5E8DB",
          200: "#CED4BA",
          300: "#B2BC92",
          400: "#95A26D",
          500: "#7A8852",
          600: "#5F6B3E",
          700: "#475130",
          800: "#303822",
          900: "#1C2014",
        },
        clay: {
          50: "#FBF5F0",
          100: "#F3E6D8",
          200: "#E6CDB2",
          300: "#D5AC82",
          400: "#C48D57",
          500: "#B07438",
          600: "#935D2B",
          700: "#724822",
          800: "#52341A",
          900: "#352212",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Cambria", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "organic-sm": "0 1px 2px 0 rgba(90, 63, 27, 0.05)",
        "organic": "0 1px 3px 0 rgba(90, 63, 27, 0.08), 0 1px 2px -1px rgba(90, 63, 27, 0.08)",
        "organic-md": "0 4px 6px -1px rgba(90, 63, 27, 0.08), 0 2px 4px -2px rgba(90, 63, 27, 0.06)",
        "organic-lg": "0 10px 15px -3px rgba(90, 63, 27, 0.08), 0 4px 6px -4px rgba(90, 63, 27, 0.06)",
        "organic-xl": "0 20px 25px -5px rgba(90, 63, 27, 0.08), 0 8px 10px -6px rgba(90, 63, 27, 0.06)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        "linen": "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%239E6D30' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
