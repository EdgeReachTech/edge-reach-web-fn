/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    },
  },
  extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/background.jpg')",
      },
    },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom-3': {
          clipPath: 'polygon(0% -4%, 60% 1%, 61% 34%, -1% 100%)',
        },
        '.clip-custom-1': {
          clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)'
        }

      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}