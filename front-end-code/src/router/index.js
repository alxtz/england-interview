import Vue from 'vue'
import Router from 'vue-router'

// components

// pages
import LandingPage from '@/pages/LandingPage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }
  ]
})
