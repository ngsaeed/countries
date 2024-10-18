import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import CountriesView from '@/views/CountriesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'countries',
    component: CountriesView
  },
  {
    path: '/details/:name',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
