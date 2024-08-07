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
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(0%)' },
        '20%': { transform: 'translateX(-100%)' },
        '40%': { transform: 'translateX(-200%)' },
        '60%': { transform: 'translateX(-300%)' },
        '80%': { transform: 'translateX(-400%)' },
        '100%': { transform: 'translateX(-500%)' },
      },
    },
    animation: {
      slide: 'slide 10s linear infinite',
    },
  }
    ,
  
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.clip-custom-3': {
    //       clipPath: 'polygon(0% -4%, 60% 1%, 61% 34%, -1% 100%)',
    //     },
    //     '.clip-custom-1': {
    //       clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)'
    //     }

    //   }

    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // },
  ],
}