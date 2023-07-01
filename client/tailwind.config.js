/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e74c3c",
        secondary: "#c0392b",
      },
    },
  },
  plugins: [],
}