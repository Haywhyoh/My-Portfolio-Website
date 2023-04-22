/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens
    },
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      body: ['Manrope']
    },
    colors: {
      'white': '#ffffff',
      'yellow': '#FEC447',
      'red': '#ff014f',
      'blue': '#00c0ff',
      'black_bg': '#012b45',
      'dark_blue': '#040836',
      'layout_black': 'rgba(0, 0, 0, 0.2)',
      'layout_black2': 'rgba(0, 0, 0, 0.5)',
      'upwork': '#6fda44',
      'fiverr': '#1dbf73',
      'black_text': '#202942'
    },
   
    extend: {
      backgroundImage: {
        'dark_bg': "url('./src/assets/images/banner.jpeg')"
      },
    }
  },
  plugins: []
};
