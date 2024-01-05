/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'yellow': {
          '1000': 'hsl(47, 88%, 63%)'
        },
        'white': {
          '1000': 'hsl(0, 0%, 100%)'
        },
        'gray': {
          '1000': 'hsl(0, 0%, 50%)'
        },
        'black': {
          '1000': 'hsl(0, 0%, 7%)'
        }
      }
    },
    fontFamily: {
      figtree: [`'Figtree'`,'sans-serif']
    }
  },
  plugins: [],
}

