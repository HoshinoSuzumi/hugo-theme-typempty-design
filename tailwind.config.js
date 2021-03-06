/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Inria Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
