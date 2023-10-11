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
  // If you want to support toggling dark mode manually 
  // instead of relying on the operating system preference, 
  // use the class strategy instead of the media strategy:
  darkMode: 'class', // or 'media'
  theme: {
    // fontFamily: {
    //   sans: [
    //     'ui-sans-serif',
    //     'system-ui',
    //     '-apple-system',
    //     'BlinkMacSystemFont',
    //     '"Segoe UI"',
    //     'Roboto',
    //     '"Helvetica Neue"',
    //     'Arial',
    //     '"Noto Sans"',
    //     'sans-serif',
    //     '"Apple Color Emoji"',
    //     '"Segoe UI Emoji"',
    //     '"Segoe UI Symbol"',
    //     '"Noto Color Emoji"',
    //   ],
    //   serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    //   mono: ['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','"Liberation Mono"','"Courier New"','monospace'],
    // },
    extend: {
      colors: {
        primary: '#D675A9',
        secondary: {
          100: '#00E800',
          200: '#00BC00'
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

