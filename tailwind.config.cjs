/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '250px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary_color: "#E1B7BF", //text color
        bg_color: "#45335D",
      },
    }
  },
  plugins: [],
}
