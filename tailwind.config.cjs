/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans KR', 'Arial', 'sans-serif'],
        nanum: ['Nanum Gothic', 'serif'],
        single: ['Single Day', 'cursive'],
        blackhan: ['Black Han Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        yclover: ['YClover-Bold'],
      },
    },
  },
  plugins: [],
};
