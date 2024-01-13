/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34568B",
        secondary: "#F2AA4C",
        accent: "#967BB6",
        neutral: "#EFEFEF",
        highlight: "#2E8B57",
        supportive: "#4A4A4A",
      },
      fontFamily: {
        primary: "Roboto",
        secondary: "Work Sans",
      },
      screens: {
        xs: '480px'
      }
    },
  },
  plugins: [Myclass],
};
