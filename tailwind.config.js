/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emlak: {
          navy: "#0F172A",
          "navy-light": "#1E293B",
          gold: "#D97706",
          "gold-hover": "#B45309",
          "gold-light": "#FEF3C7",
          cream: "#F8FAFC",
          slate: "#64748B",
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"]
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease-out forwards"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
};
