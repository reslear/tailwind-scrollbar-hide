# tailwind-scrollbar-hide

[![npm](https://img.shields.io/npm/v/tailwind-scrollbar-hide)](https://www.npmjs.com/package/tailwind-scrollbar-hide)
![npm](https://img.shields.io/npm/dt/tailwind-scrollbar-hide)
![npm](https://img.shields.io/npm/dw/tailwind-scrollbar-hide)
[![install size](https://packagephobia.com/badge?p=tailwind-scrollbar-hide)](https://packagephobia.com/result?p=tailwind-scrollbar-hide)

Tailwind plugin for hide scrollbars, although the element can still be scrolled if the element's content overflows.

<img src="https://user-images.githubusercontent.com/12596485/142972957-272010d3-29f6-4be7-99e1-dd03e7a8b92b.gif" alt="tailwind-scrollbar-hide animation demo" width="400" />

[🕹 Live Playground](https://reslear.github.io/tailwind-scrollbar-hide/)

## Features

🎨 Tailwind v4.x, v3.x, v2.x.

📦 Zero dependencies

🛠️ Port for [unocss-preset-scrollbar-hide](https://github.com/reslear/unocss-preset-scrollbar-hide)

🎯 Pure CSS implementation for v4.x

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install tailwind-scrollbar-hide

# Using pnpm
pnpm add tailwind-scrollbar-hide

# Using Yarn
yarn add tailwind-scrollbar-hide
```

### Tailwind v4 support

![Firefox >=64 Chrome >= 2 Safari >= 4](https://badges.herokuapp.com/browsers?googlechrome=2&firefox=64&safari=4)


For Tailwind v4, you can use the following approach in your CSS configuration file:

```css
/* index.css */
@import 'tailwindcss';
@import 'tailwind-scrollbar-hide/v4';
```

This will automatically import and configure the plugin for Tailwind v4. 

> Note: Internet Explorer functionality has been dropped in Tailwind v4

### Tailwind v2.x, v3.x support

![Firefox >=64 Chrome >= 2 Safari >= 4 Internet Explorer >= 10](https://badges.herokuapp.com/browsers?googlechrome=2&firefox=64&safari=4&iexplore=10)


For Tailwind v2.x and v3.x, add the plugin to your config file:

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

or [using TypeScript](https://tailwindcss.com/docs/configuration#using-esm-or-type-script):

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
  theme: {
    // ...
  },
  plugins: [scrollbarHide]
} satisfies Config
```

## Usage

Use in you template `scrollbar-hide` for visual hiding scrollbar

```html
<div class="w-4 scrollbar-hide">...</div>
```

or restore default value use `scrollbar-default`

> ⚠️ webkit overriding not working https://github.com/reslear/tailwind-scrollbar-hide/issues/19#issuecomment-1086949110 need switch breakpoint system

```html
<div class="w-4 scrollbar-hide md:scrollbar-default">...</div>
```

## Plugin Inspiration

- https://github.com/tailwindlabs/tailwindcss-forms/tree/main
- https://github.com/tailwindlabs/tailwindcss/discussions/2310#discussioncomment-8592440

## License

[MIT](./LICENSE)