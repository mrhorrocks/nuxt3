/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D675A9',
        secondary: {
          100: '#00E800',
          100: '#00BC00'
        }
      }
    },
  },
  plugins: [],
}

