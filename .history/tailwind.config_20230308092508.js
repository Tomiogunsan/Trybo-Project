/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    3x
    extend: {
     
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
