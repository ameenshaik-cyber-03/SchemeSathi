/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDF4',
          100: '#E8F5EE',
          200: '#C6E7D2',
          500: '#10B981',
          600: '#059669',
          700: '#0B7B4B',
          800: '#065F38',
          900: '#034125',
        }
      }
    },
  },
  plugins: [],
}
