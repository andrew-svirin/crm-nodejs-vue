/**
 * Router documentation: https://router.vuejs.org/`
 */

// Helpers.
import { createRouter, createWebHistory } from 'vue-router';

// Modules for router.
import login from '@/modules/login/router';

const routes = [
  {path: '/', redirect: '/login'},
  ...login,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
