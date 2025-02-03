/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"], // For headers
        sans: ["Poppins", "sans-serif"], // For other text
      },
    },
  },
  plugins: [],
};
