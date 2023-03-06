/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slide-down 300ms ease-out forwards',
      },
      keyframes: {
        slide-down: {
          '0%, 100%': {transform: 'translateY(-3rem)'},
          '50%': {transform: 'translateY(0)'},
      }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
