/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     
      keyframes: {
        slide: {
          '0%, 100%': {transform: 'translateY(-3rem)'},
          '50%': {transform: 'translateY(0)'},
      }
      }, 
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
