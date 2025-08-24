# tailwind-scrollbar-hide

[![npm](https://img.shields.io/npm/v/tailwind-scrollbar-hide)](https://www.npmjs.com/package/tailwind-scrollbar-hide)
![npm](https://img.shields.io/npm/dt/tailwind-scrollbar-hide)
![npm](https://img.shields.io/npm/dw/tailwind-scrollbar-hide)
[![install size](https://packagephobia.com/badge?p=tailwind-scrollbar-hide)](https://packagephobia.com/result?p=tailwind-scrollbar-hide)
![Human Coded](https://img.shields.io/badge/human-coded-44CC11?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wZXJzb24tc3RhbmRpbmctaWNvbiBsdWNpZGUtcGVyc29uLXN0YW5kaW5nIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjUiIHI9IjEiLz48cGF0aCBkPSJtOSAyMCAzLTYgMyA2Ii8+PHBhdGggZD0ibTYgOCA2IDIgNi0yIi8+PHBhdGggZD0iTTEyIDEwdjQiLz48L3N2Zz4=)

Tailwind plugin for hide scrollbars, although the element can still be scrolled if the element's content overflows.

<img src="https://user-images.githubusercontent.com/12596485/142972957-272010d3-29f6-4be7-99e1-dd03e7a8b92b.gif" alt="tailwind-scrollbar-hide animation demo" width="400" />

[🕹 Live Playground](https://reslear.github.io/tailwind-scrollbar-hide/)

> 💡 **Note**: You might not need this plugin, just add these utilities to your Tailwind config using [complex utilities](https://tailwindcss.com/docs/adding-custom-styles#complex-utilities) (see [example](https://github.com/reslear/tailwind-scrollbar-hide/issues/31#issuecomment-2922855576)), or continue using this plugin for a ready-to-use solution.

## Features

🎨 Tailwind v4.x, v3.x, v2.x.

📦 Zero dependencies

🎯 Pure CSS implementation for v4.x

🛠️ Port for [unocss-preset-scrollbar-hide](https://github.com/reslear/unocss-preset-scrollbar-hide)

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
> Note: Internet Explorer functionality has been dropped in Tailwind v4

For Tailwind v4, you can use the following approach in your CSS configuration file:

```css
/* index.css */
@import 'tailwindcss';
@import 'tailwind-scrollbar-hide/v4';
```

This will automatically import and configure the plugin for Tailwind v4. 

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
