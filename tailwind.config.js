/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#659DBD',
        'accent': '#8D8741',
        'secondary': '#BC986A',
        'tertiary': '#FBEEC1',
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}
