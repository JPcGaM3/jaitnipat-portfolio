import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../components/sections/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
