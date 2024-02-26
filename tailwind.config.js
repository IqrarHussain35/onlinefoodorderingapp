/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dullPink: "#C21760", // Example custom color
        pink: "#F5267E",
        white: "#FFFFFF",
        black: "#333333",
        lightPink: "#fef2f2",
        lightPink2: "#FAD9E7",
        grey: "#929292",
        lightgrey: "#FAFAFA",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
};
