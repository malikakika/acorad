const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  
  theme: {
    extend: {
      colors: {
        primary: '#6C2B3B',
        accent: '#a24d4c',
        sage: '#A0B29F',
        cream: '#FAF7F2',
        dark: '#2D2D2D',
        neutral: '#3A3A3A',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serifTitle: ['DM Serif Display', 'serif'],
      },

      animation: {
        float: 'float 6s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },

  plugins: [],
};
