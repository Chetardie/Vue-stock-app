import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResourse from 'vue-resource'
import {routes} from './router/routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResourse)

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
});

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
