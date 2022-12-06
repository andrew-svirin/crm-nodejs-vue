import type { App } from '@vue/runtime-core';

/**
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export function loadFonts (app: App) {
  const webFontLoader = import('webfontloader');

  webFontLoader.then((loader) => loader.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  }));
}
