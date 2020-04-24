import { get, post } from './http'

const baseURL = 'http://mall-pre.springboot.cn'

export const login = (data) => get(`${baseURL}/user/login`, data)

export const register = (data) => post(`${baseURL}/user/register`, data)

export const productList = (id) => get(`${baseURL}/products?categoryId=${id}`)
