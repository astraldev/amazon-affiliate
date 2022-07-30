/* eslint-env node */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo': "'Exo 2', sans-serif",
        'inconsolata': "Inconsolata, sans-serif"
      }
    },
  },
  plugins: [],
}
