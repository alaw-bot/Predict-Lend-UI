import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AdminLogin from '../views/AdminLogin.vue';
import UserLogin from '../views/UserLogin.vue';
import AdminInfo from '../views/AdminInfo.vue';
import UserInfo from '../views/UserInfo.vue'; // Import the UserInfo component
import UserRegister from '../views/UserRegister.vue';
import FillForm from '../views/FillForm.vue';
import Stats from '../views/Stats.vue';
import UserInfoInAdmin from '../views/UserInfoInAdmin.vue';


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
  {
    path: '/admin-info',
    name: 'AdminInfo',
    component: AdminInfo
  },
  {
    path: '/user-info', // Add the UserInfo route
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/User-Register',
    name: 'UserRegister',
    component: UserRegister
  },
  {
    path: '/fill-form',
    name: 'FillForm',
    component: FillForm
  },
  {
    path: '/UserInfoInAdmin',
    name: 'UserInfoInAdmin',
    component: UserInfoInAdmin,
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
