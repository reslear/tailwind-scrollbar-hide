import type { PluginCreator } from 'tailwindcss/types/config.js'

/**
 * Tailwind plugin for hide scrollbars, although the element can still be scrolled if the element's content overflows.
 */
const scrollbarHide: PluginCreator = ({ addUtilities }) =>
  addUtilities({
    '.scrollbar-hide': {
      // TODO: remove IE and Edge support
      /* IE and Edge */
      '-ms-overflow-style': 'none',

      /* Firefox */
      'scrollbar-width': 'none',

      /* Safari and Chrome */
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },

    '.scrollbar-default': {
      // TODO: remove IE and Edge support
      /* IE and Edge */
      '-ms-overflow-style': 'auto',

      /* Firefox */
      'scrollbar-width': 'auto',

      /* Safari and Chrome */
      '&::-webkit-scrollbar': {
        display: 'block'
      }
    }
  })

// override type for v3/4 compatibility
export default scrollbarHide as () => void
