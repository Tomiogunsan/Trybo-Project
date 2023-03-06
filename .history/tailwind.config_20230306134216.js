/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slide-down 300ms ease-out forwards',
      },
      key
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
