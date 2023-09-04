/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  jit: true, // Enable JIT mode
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
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

