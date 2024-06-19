import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AdminLogin from '../views/AdminLogin.vue';


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

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
