/**
 * Router documentation: https://router.vuejs.org/`
 */

// Helpers.
import { createRouter, createWebHistory } from 'vue-router';

// Modules for router.
import login from '@/modules/login/router';
import profile from '@/modules/profile/router';

const routes = [
  {path: '/', redirect: '/login'},
  ...login,
  ...profile,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
