import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import allproducts from '../components/all_products.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import shoppingcart from '../components/shopping_cart.vue'
import personalcenter from '../components/personal_center.vue'
import payment from '../components/payment.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/allproducts',
      name: 'allproducts',
      component: allproducts
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart
    },
    {
      path: '/personalcenter',
      name: 'personalcenter',
      component: personalcenter
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    }
  ]
})
