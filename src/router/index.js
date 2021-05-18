import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contestants from '../views/Contestants.vue'
import Contylist from '../views/Contylist.vue'
import Slideshow from '../views/Slideshow.vue'
import Mail from '../views/Mail.vue'
import VueOnlineProp from "vue-online-prop"



Vue.use(VueOnlineProp)
Vue.use(VueRouter)

const routes = [
  {
    path: '/contestants',
    name: 'Contestants',
    component: Contestants
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
    path: '/slideshow',
    name: 'Slideshow',
    component: Slideshow
  },
  {
    path: '/mail',
    name: 'Mail',
    component: Mail
  },
]

const router = new VueRouter({
  routes
})

export default router
