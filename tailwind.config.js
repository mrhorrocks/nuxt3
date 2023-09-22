/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit', // This is already configured with "@nuxtjs/tailwindcss": "^6.8.0",
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
    listStyleType: {
      // none: 'none',
      // disc: 'disc',
      decimal: 'decimal',
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

