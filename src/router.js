import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Arena from './views/Arena.vue'
import TierList from './views/TierList.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/arena',
      name: 'arena',
      component: Arena,
    },
    {
      path: '/tier-list',
      name: 'tier-list',
      component: TierList,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})
