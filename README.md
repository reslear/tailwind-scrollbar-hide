# tailwind-scrollbar-hide

Tailwind plugin for hide scrollbars, although the element can still be scrolled if the element's content overflows.

[![npm](https://img.shields.io/npm/v/tailwind-scrollbar-hide)](https://www.npmjs.com/package/tailwind-scrollbar-hide)
![npm](https://img.shields.io/npm/dt/tailwind-scrollbar-hide)
![Dependents (via libraries.io)](https://img.shields.io/librariesio/dependents/npm/tailwind-scrollbar-hide?0)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![install size](https://packagephobia.com/badge?p=tailwind-scrollbar-hide@1.1.6)](https://packagephobia.com/result?p=tailwind-scrollbar-hide@1.1.6)

![Firefox >=64 Chrome >= 2 Safari >= 4 Internet Explorer >= 10 ](https://badges.herokuapp.com/browsers?googlechrome=2&firefox=64&safari=4&iexplore=10)


![tailwind-scrollbar-hide animation demo](https://user-images.githubusercontent.com/12596485/142972957-272010d3-29f6-4be7-99e1-dd03e7a8b92b.gif)

[Live demo](https://reslear.github.io/packages/tailwind-scroll-hide/index.html)


## Installation

Install the plugin from npm:

```sh
# Using npm
npm install tailwind-scrollbar-hide

# Using Yarn
yarn add tailwind-scrollbar-hide

# Using pnpm
pnpm add tailwind-scrollbar-hide
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

or restore default value use `scrollbar-default`

```html
<div class="w-4 scrollbar-hide md:scrollbar-default">...</div>
```

## License

[MIT](./LICENSE)
