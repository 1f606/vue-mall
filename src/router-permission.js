import axios from 'axios'
import router from './router'
import { Message } from 'element-ui'

axios.interceptors.response.use(response => {
  if (response.data.status === 10) {
    if (window.location.hash !== '#/index') {
      router.push('/login').then(() => {
        Message('请重新登录')
      })
    }
  }
  return response.data.data
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
        Message(`连接错误${err.response.status}`)
    }
  } else {
    Message('连接到服务器失败')
  }
  Message(err.data.msg)
  return Promise.reject(err.response)
})
