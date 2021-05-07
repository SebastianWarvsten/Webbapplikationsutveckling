import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contylist from '../views/Contylist.vue'
import Slieshow from '../views/Slieshow.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contylist',
    name: 'Contylist',
    component: Contylist
  },
  {
    path: '/slieshow',
    name: 'Slieshow',
    component: Slieshow
  },
]

const router = new VueRouter({
  routes
})

export default router
