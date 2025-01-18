import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scrollLoop: 'scrollUp 10s linear infinite',
        scrollContinousDesktop: 'scrollContinous 20s linear infinite'
      },
      keyframes: {
        scrollUp: {
          '0%': {
            transform: 'translatex(100)',
          },
          '100%': {
            transform: 'translatex(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
}