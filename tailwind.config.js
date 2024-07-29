
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'coral-red': '#FF6B6B',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

