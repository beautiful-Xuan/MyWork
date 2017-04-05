import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import shopping from '@/views/shopping'
import lists from '@/views/Home/lists'
import user from '@/views/user'
import set from '@/views/user/set'
import order from '@/views/user/order'
import strategy from '@/views/user/strategy'
import account from '@/views/user/account'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/home/lists/:type',
      name: 'lists',
      component: lists
    },
    {
      path: '/shopping/:type',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/user/set',
      name: 'set',
      component: set
    },
    {
      path: '/user/order',
      name: 'order',
      component: order
    },
    {
      path: '/user/strategy',
      name: 'strategy',
      component: strategy
    },
    {
      path: '/user/account',
      name: 'account',
      component: account
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ]
})
