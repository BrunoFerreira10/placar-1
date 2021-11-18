import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: ['Dashboards', 'Dashboards'],
    title: 'Dashboards',
    component: () => import('../views/Dashboards.vue')
  },
  {
    path: '/queries/stats',
    name: ['Queries Stats', 'Stats'],
    title: 'Stats',
    component: () => import('../views/queries/Stats.vue')
  },
  {
    path: '/queries/tests',
    name: ['Queries Tests', 'Tests'],
    title: 'Tests',
    component: () => import('../views/queries/Tests.vue')
  },
  {
    path: '/queries/timers',
    name: ['Queries Timers', 'Timers'],
    title: 'Timers',
    component: () => import('../views/queries/Timers.vue')
  },
  {
    path: '/queries/vehicles',
    name: ['Queries Vehicles', 'Vehicles'],
    title: 'Vehicles',
    component: () => import('../views/queries/Vehicles.vue')
  },
  {
    path: '/reports/stats',
    name: ['Reports Stats', 'Stats'],
    title: 'Stats',
    component: () => import('../views/reports/Stats.vue')
  },
  {
    path: '/reports/tests',
    name: ['Reports Tests', 'Tests'],
    title: 'Tests',
    component: () => import('../views/reports/Tests.vue')
  },
  {
    path: '/reports/timers',
    name: ['Reports Timers', 'Timers'],
    title: 'Timers',
    component: () => import('../views/reports/Timers.vue')
  },
  {
    path: '/reports/vehicles',
    name: ['Reports Vehicles', 'Vehicles'],
    title: 'Vehicles',
    component: () => import('../views/reports/Vehicles.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
