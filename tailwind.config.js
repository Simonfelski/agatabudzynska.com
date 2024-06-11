/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#185854',
        secondary: '#ede8e4',
        buttonHover: '#1DD893',
        buttonTwo: '#cd4d41',
      }
    },
  },
  plugins: [],
}