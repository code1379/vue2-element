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
      },
      // 数据统计
      {
        path: '/stats',
        name: 'Stats',
        component: () => import('../views/home/stats/stats.vue')
      },
      // 信息管理/列表展示
      {
        path: '/wms',
        name: 'Stats',
        component: () => import('../views/home/stats/stats.vue'),
        children: [
          {
            path: '/list',
            name: 'WmsList',
            component: () => import('../views/home/wms/list.vue')
          }
        ]
      },
      // ❌ 错误写法
      // {
      //   path: '/wms/list',
      //   name: 'WmsList',
      //   component: () => import('../views/home/wms/list.vue')
      // },
      // 用户管理/用户统计
      {
        path: '/user/stats',
        name: 'UserStats',
        component: () => import('../views/home/user/stats.vue')
      },
      // 用户管理/角色统计
      {
        path: '/user/role',
        name: 'UserRole',
        component: () => import('../views/home/user/role.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
