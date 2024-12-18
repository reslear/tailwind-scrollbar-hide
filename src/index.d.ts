// inspired https://github.com/tailwindlabs/tailwindcss-forms/blob/main/src/index.d.ts

declare function plugin(): {
  handler: () => void
}

declare namespace plugin {
  const __isOptionsFunction: true
}

export = plugin
