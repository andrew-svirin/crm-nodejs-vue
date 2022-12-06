/**
 * Automatically included in `./src/main.ts`
 */

import { loadFonts } from './webfontloader';
import type { App } from '@vue/runtime-core';
import vuetify from '@/plugins/vuetify';
import vuex from '@/plugins/vuex';
import vueRouter from '@/plugins/vue-router';

export function registerPlugins (app: App) {
  loadFonts(app);

  app.use(vuetify);
  app.use(vuex);
  app.use(vueRouter);
}
