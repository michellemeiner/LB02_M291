import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Definition of the different paths and which component to load
export const routes = [
  {
    path: '/',
    component: () =>
      import('../components/BlackFridayShop.vue')
  },
  {
    path: '/help',
    component: () =>
      import('../components/Help.vue')
  }
]

// creation of the Vue router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
