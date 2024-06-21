/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mp': {'max': '368px'},

        'cd': {'max': '995px'},

        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '688px'},
        // => @media (max-width: 639px) { ... }
      },
      keyframes: {
        iframeFade:{
        '0%': {opacity: '1'},
        '50%': {opacity: '.8'},
        '100%': {opacity: '1'},
      },
       TranslateY: {
          '0%': {transform: 'translateY(20%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
       }
      },
      animation: {
        'iframe-Fade': 'iframeFade 2s ease-in-out infinite',
        'Tranform-Y': 'TranslateY .5s ease-in-out'
      }
    },
  },
  plugins: [],
}