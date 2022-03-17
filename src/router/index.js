import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../pages/login/index.vue';
const routes = [
  {
    path: '/',
    component: Login,
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
