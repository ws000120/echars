import axios from "axios";

const http = axios.create({
  baseURL: '',
  timeout: 1000,
})
//请求拦截器
http.interceptors.request.use(function (config) {
  // config.withCredentials = true
  // config.headers = {
  //   // 'token': '',
  //   Authorization: '',
  //   'Content-Type': 'application/json',
  // }
  //请求之前做的事情
  return config
}, function (error) {
  //请求错误做的事情
  return Promise.reject(error)
})
http.interceptors.response.use(function (response) {
  //响应数据做的事情
  return response.data
}, function (error) {
  //响应错误做的事情
  return Promise.reject(error)
})

export default http
