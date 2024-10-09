const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@apideck/components/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        //
      },
      colors: {
        gray: colors.slate,
        primary: {
          50: '#E9F7F0',  // Lightest shade of LB Coated Core Green
          100: '#c0e7d4',
          200: '#77b800',  // LB Apple Green
          300: '#4a8f37',  // Slightly lighter than LB Coated Core Green
          400: '#006a4d',  // LB Coated Core Green
          500: '#024731',  // Lloyds Bank Racing Green
          600: '#02422c',
          700: '#023d28',
          800: '#023824',
          900: '#02331f'
        }        
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
