/**
 * Router documentation: https://router.vuejs.org/`
 */

// Helpers.
import { createRouter, createWebHistory } from 'vue-router';

// Modules for router.
import login from '@/modules/login/router';
import profile from '@/modules/profile/router';
import user from '@/modules/user/router';

const routes = [
  {path: '/', redirect: '/login'},
  ...login,
  ...profile,
  ...user,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
