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
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
};
