import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contylist from '../views/Contylist.vue'
import Slieshow from '../views/Slieshow.vue'
import VueOnlineProp from "vue-online-prop"


Vue.use(VueOnlineProp)
Vue.use(VueRouter)

const routes = [
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
    path: '/',
    name: 'Home',
    component: Home
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
