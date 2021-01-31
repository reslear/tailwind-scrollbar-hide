module.exports = {
  darkMode: false,
  purge: [
    './playground/index.html',
    './playground/src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      container: {
        center: true,
        padding: '2rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('./src/index')]
}
