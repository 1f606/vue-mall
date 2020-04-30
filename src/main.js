import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as apis from './api/api'
import './router-permission'
import './assets/style/reset.scss'
import './assets/style/_global.scss'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'

Vue.use(VueLazyload, {
  loading: '../public/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)

const mock = true
if (mock) {
  require('./mock/api')
}

Vue.config.productionTip = false
Vue.prototype.$apis = apis

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
