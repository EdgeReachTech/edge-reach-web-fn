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
        '.clip-img': {
          clipPath: 'polygon(99% 1% 99% 1%, 1% 0%, 1% 0%, 1% 16%, 1% 16%, 5% 25%, 5% 25%, 15% 36%, 15% 36%, 23% 42%, 23% 42%, 36% 50%, 36% 50%,47% 57%, 47% 57%, 59% 64%, 59% 64%, 68% 69%, 68% 69%, 79% 80%, 79% 80%, 92% 92%, 92% 92%, 98% 98%, 98% 98%)',
        },
        

      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}