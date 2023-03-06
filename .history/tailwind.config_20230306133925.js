/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animat
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
