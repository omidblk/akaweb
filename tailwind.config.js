const { colors } = require('./src/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   // Using CSS variables
      //   primary: "#000" ,// 'var(--color-primary)',
      //   secondary: 'var(--color-secondary)'
      // }
      colors : colors
    }
  },
  plugins: [],
}

