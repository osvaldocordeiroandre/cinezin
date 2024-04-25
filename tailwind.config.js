/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        iframeFade:{
        '0%': {opacity: '1'},
        '50%': {opacity: '.8'},
        '100%': {opacity: '1'},
      }
      },
      animation: {
        'iframe-Fade': 'iframeFade 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}