/**
 * Framework documentation: https://vuex.vuejs.org`
 */

// Composables
import { createStore } from 'vuex';

// Modules
import profile from '@/modules/profile/store';
import user from '@/modules/user/store';

// https://vuex.vuejs.org/guide/#the-simplest-store
export default createStore({
  strict: true,
  modules: {
    profile,
    user,
  }
});
