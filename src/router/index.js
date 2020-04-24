import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLayout from '../views/components/HomeLayout'
import index from '../views/pages/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeLayout',
    component: HomeLayout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: index
      }, {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/pages/product.vue')
      }, {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/pages/detail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/pages/login.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/pages/cart.vue')
  },
  {
    path: '/order',
    name: 'OrderLayout',
    component: () => import('../views/components/OrderLayout.vue'),
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: () => import('../views/pages/orderList.vue')
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('../views/pages/orderConfirm.vue')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('../views/pages/orderPay.vue')
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('../views/pages/alipay.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
