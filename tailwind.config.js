/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
