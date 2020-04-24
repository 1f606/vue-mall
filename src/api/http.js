import axios from 'axios'

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装get请求
 * @param {*} url
 * @param {*} data
 */
export function get (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, data)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}
