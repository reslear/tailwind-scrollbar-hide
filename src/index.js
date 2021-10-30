const plugin = require('tailwindcss/plugin')

const scrollbarHide = plugin(function ({ addUtilities }) {
  addUtilities({
    '.scrollbar-hide': {
      /* Firefox */
      'scrollbar-width': 'none',

      /* Safari and Chrome */
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '.scrollbar-default': {
      /* Firefox */
      'scrollbar-width': 'auto',

      /* Safari and Chrome */
      '&::-webkit-scrollbar': {
        display: 'block'
      }
    }
  })
})

module.exports = scrollbarHide
