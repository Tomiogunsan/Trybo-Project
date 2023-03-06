/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'a'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
