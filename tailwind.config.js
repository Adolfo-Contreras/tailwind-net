/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
    const newUtilities = {
      '.hovGrow': {
        '@apply transform transition-transform': '',
      },
      '.cardGradient':{
        '@apply ': '',
      },
    };

    addUtilities(newUtilities); //I LITTERALLY LOST IT WHEN I FIGURED OUT THIS WAS POSSIBLE
  },],
}

