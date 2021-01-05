import Vue from 'vue'
import VueRouter from 'vue-router'

import recommend from "@/views/recommend/recommend.vue"
import singer from "@/views/singer/singer.vue"
import rank from "@/views/rank/rank.vue"
import search from "@/views/search/search.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/recommend"
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: recommend
  },
  {
    path: '/singer',
    name: 'singer',
    component: singer
  },
  {
    path: '/rank',
    name: 'rank',
    component: rank
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
]

const router = new VueRouter({
  routes
})

export default router
