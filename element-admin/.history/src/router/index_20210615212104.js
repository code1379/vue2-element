import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
    children: [
      // 首页，进来展示
      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/home/index/index.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
