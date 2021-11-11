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
    name: ['Stats', 'Stats'],
    title: 'Stats',
    component: () => import('../views/queries/Stats.vue')
  },
  {
    path: '/queries/tests',
    name: ['Tests', 'Tests'],
    title: 'Tests',
    component: () => import('../views/queries/Tests.vue')
  },
  {
    path: '/queries/timers',
    name: ['Timers', 'Timers'],
    title: 'Timers',
    component: () => import('../views/queries/Timers.vue')
  },
  {
    path: '/queries/vehicles',
    name: ['Vehicles', 'Vehicles'],
    title: 'Vehicles',
    component: () => import('../views/queries/Vehicles.vue')
  },
  {
    path: '/reports/stats',
    name: ['Stats', 'Stats'],
    title: 'Stats',
    component: () => import('../views/reports/Stats.vue')
  },
  {
    path: '/reports/tests',
    name: ['Tests', 'Tests'],
    title: 'Tests',
    component: () => import('../views/reports/Tests.vue')
  },
  {
    path: '/reports/timers',
    name: ['Timers', 'Timers'],
    title: 'Timers',
    component: () => import('../views/reports/Timers.vue')
  },
  {
    path: '/reports/vehicles',
    name: ['Vehicles', 'Vehicles'],
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
