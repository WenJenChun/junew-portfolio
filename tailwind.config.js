/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        jOrange: '#ff8200',
        jBlack: '#1F1F1F',
      },
      fontFamily:{
        sans:['Quicksand'],
      }
    },
  },
  plugins: [],
}
