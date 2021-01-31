# tailwind-scrollbar-hide

tailwindcss plugin hide scrollbar

[Demo](https://reslear.github.io/packages/tailwind-scroll-hide/index.html)

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install tailwind-scrollbar-hide

# Using Yarn
yarn add tailwind-scrollbar-hide
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
```

## Usage

Use in you template `scrollbar-hide` for visual hiding scrollbar

```html
<div class="w-4 scrollbar-hide">...</div>
```
