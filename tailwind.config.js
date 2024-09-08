/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        loboto: ['Loboto', 'sans-serif'],
         open: ['Open Sans', 'sans-serif']
      },
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
   
  ],
}
