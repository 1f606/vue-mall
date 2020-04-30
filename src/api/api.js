import { get, post } from './http'

const baseURL = 'http://mall-pre.springboot.cn'

export const login = (data) => post(`${baseURL}/user/login`, data)

export const register = (data) => post(`${baseURL}/user/register`, data)

export const productList = (id, pageSize = 8) => get(`${baseURL}/products?categoryId=${id}&pageSize=${pageSize}`)

export const userInfo = (data) => get(`${baseURL}/user`, data)

export const addCart = (id) => post(`${baseURL}/carts?productId=${id}&&selected=true`)

export const cartCount = (data) => get(`${baseURL}/carts/products/sum`, data)

export const productInfo = (id) => get(`${baseURL}/products/${id}`)
