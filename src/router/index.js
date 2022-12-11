import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/index/index.vue'),
      meta: {
        title: '全酋付',
        rightTitle: '充值订单',
        jumpRouterPath: '/recharge/list'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/contact/index.vue'),
      meta: {
        title: '全酋付'
      }
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/user/index.vue'),
      meta: {
        title: '全酋付'
      }
    },
    {
      path: '/recharge/list',
      name: 'RechargeList',
      component: () => import('@/views/recharge/list.vue'),
      meta: {
        title: '充值订单'
      }
    }
  ]
});

export default router;
