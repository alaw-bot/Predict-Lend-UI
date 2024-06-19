import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AdminLogin from '../views/AdminLogin.vue';
import UserLogin from '../views/UserLogin.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/user-login',
    name: 'UserLogin',
    component: UserLogin
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
