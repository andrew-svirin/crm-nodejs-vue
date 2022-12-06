/**
 * Router documentation: https://router.vuejs.org/`
 */

// Helpers.
import { createRouter, createWebHistory } from 'vue-router';

// Modules for router.

const routes = [
  {path: '/', redirect: '/login'},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
