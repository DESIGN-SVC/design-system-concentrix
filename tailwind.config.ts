/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-top": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-bottom": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-left": "slide-left 0.5s ease-in-out",
        "slide-right": "slide-right 0.5s ease-in-out",
        "slide-top": "slide-top 0.5s ease-in-out",
        "slide-bottom": "slide-bottom 0.5s ease-in-out",
      },
      colors: {
        black: "#000",
        white: "#fff",
        transparent: "transparent",
        current: "currentColor",
        green: {
          50: "#ECF5F0",
          500: "#178844",
        },
        blue: {
          10: "#E9FCFA",
          60: "#7CEEE0",
          500: "#007380",
          800: "#003D5B",
        },
        pink: {
          50: "#FAEAEF",
          400: "#CC3262",
        },
        orange: {
          50: "#FFE6CC",
          500: "#FF8400",
        },
        gray: {
          20: "#D5D5D5",
          40: "#AAAAAB",
          60: "#7F8080",
          700: "#2A2B2C",
        },
        aqua: {
          300: "#25E2CC",
        },
      },
    },
  },
  plugins: [],
};
