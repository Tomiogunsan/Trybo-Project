/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      '3xl: '2560px',
    },
    extend: {
     
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
