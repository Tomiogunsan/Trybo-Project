/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      '': '2560px',
    },
    extend: {
     
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
