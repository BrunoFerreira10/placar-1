import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@carbon/charts/styles-g100.css'
import chartsVue from "@carbon/charts-vue"
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(chartsVue)

Vue.use(Chartkick.use(Chart))

new Vue({
  router,
  store,
  vuetify,  
  render: h => h(App)
}).$mount('#app')



