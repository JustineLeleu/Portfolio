/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        'gray' : '#1E1E1E',
        'grayLight' : '#242424',
        'grayWhite' : '#e6e6e6',
        'textWhite' : '#D9D9D9',
        'borderGreen' : '#1BF0CA',
      },
      fontFamily: {
        inter : ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

