/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slide-down 300ms ease-out forwards',
      },
      keyframes: {
        slide: {''}
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
