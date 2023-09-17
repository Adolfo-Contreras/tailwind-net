/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      scale: {
        '101': '1.01',
      },
      flexGrow: {
        2:'2',
        3: '3',
        4:'4'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
    const newUtilities = {
      '.hovGrow': {
        '@apply transform transition-transform': '',
      },
    };

    addUtilities(newUtilities); //I LITTERALLY LOST IT WHEN I FIGURED OUT THIS WAS POSSIBLE
  },],
}

