import axios from 'axios'

// 1、对axios二次封装
const requests = axios.create({
  // 基础路径，requests发出的请求在端口号后面会跟改baseURl
  baseURL: '/api',
  timeout: 5000
})

// 2、配置请求拦截器
requests.interceptors.request.use(config => {
  // config内主要是对请求头Header配置
  // 添加token
  if (localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJFYXN5IEJ1eSBDb21wYW55IiwiYXVkIjoiRWFzeUJ1eSIsInN1YiI6IkFsaWNlIiwiZXhwIjoxNjU2NTU4MTI3fQ.Zg_AG_N5TGyp4g0ZdQ8PC--i88FIKaWPZRmi6fF3uG7ph1uEva1RQgeQ-61QPUkzasjcgKdDUKTxMMs1rIJC6w';

  }
  return config
})


// 3、配置响应拦截器
requests.interceptors.response.use((res) => {
  // 成功的回调函数
  return res.data
}, (error) => {
  // 失败的回调函数
  console.log('响应失败' + error)
  return Promise.reject(new Error('fail'))
})
// 4、对外暴露
export default requests