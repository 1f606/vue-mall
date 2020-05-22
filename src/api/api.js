import { get, post, put, del } from './http'

const baseURL = '/api'

export const login = (data) => post(`${baseURL}/user/login`, data)

export const register = (data) => post(`${baseURL}/user/register`, data)

export const productList = (id, pageSize = 8) => get(`${baseURL}/products?categoryId=${id}&pageSize=${pageSize}`)

export const userInfo = (data) => get(`${baseURL}/user`, data)

export const addCart = (data) => post(`${baseURL}/carts`, data)

export const cartCount = (data) => get(`${baseURL}/carts/products/sum`, data)

export const productInfo = (id) => get(`${baseURL}/products/${id}`)

export const cartList = (data) => get(`${baseURL}/carts`, data)

export const updateCart = (id, data) => put(`${baseURL}/carts/${id}`, data)

export const delProduct = (id, data) => del(`${baseURL}/carts/${id}`, data)

export const selectAll = (url) => put(`${baseURL}${url}`)

export const addressList = () => get(`${baseURL}/shippings`)

export const placeOrder = (data) => post(`${baseURL}/orders`, data)

export const orderDetail = (id) => get(`${baseURL}/orders/${id}`)

export const orderList = (data) => get(`${baseURL}/orders`, data)

export const pay = (data) => post(`${baseURL}/pay`, data)
