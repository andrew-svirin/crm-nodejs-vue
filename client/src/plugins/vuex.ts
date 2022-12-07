/**
 * Framework documentation: https://vuex.vuejs.org`
 */

// Composables
import { createStore } from 'vuex';

// Modules
import login from '@/modules/login/store';

// https://vuex.vuejs.org/guide/#the-simplest-store
export default createStore({
  strict: true,
  modules: {
    login,
  }
});
