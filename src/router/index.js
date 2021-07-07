import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/components/Cart'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
