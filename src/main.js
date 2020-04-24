import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as apis from './api/api'
import { Message } from 'element-ui'
import './assets/style/reset.scss'
import './assets/style/_global.scss'

const mock = true
if (mock) {
  require('./mock/api')
}

axios.interceptors.response.use(response => {
  if (response.data.status === 401) {
    router.push('/login').then(() => {
      Message('请重新登录')
    })
  }
  return response.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 10:
        router.push('/login').then(() => {
          Message('请重新登录')
        })
        break
      case 11:
        break
      default:
        console.log(`连接错误${err.response.status}`)
    }
  } else {
    console.log('连接到服务器失败')
  }
  return Promise.resolve(err.response)
})

Vue.config.productionTip = false
Vue.prototype.$apis = apis

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
