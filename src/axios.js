
//建立axios拦截器 
import axios from 'axios'
import router from './router'
import {ElMessage } from 'element-ui'
//后端端口
//axios.defaults.baseURL = "http://localhost:8081"

//模拟端口

const request = axios.create({
    timeout: 5000, //5s
    headers: {//请求头
        'Content-Type': 'application/json; charset=utf-8'
    }
})
//设置拦截
request.interceptors.request.use(config => {
    config.headers['Authorization'] = localStorage.getItem("token") // 请求头带上token
    return config
})
//状态不为200 为异常状态 
request.interceptors.response.use(response => {
        let res = response.data;
        console.log("response")
        console.log(res)
        if (res.code === 200) {
            return response
        } else {
            ElMessage.error(res.msg? res.msg :'系统异常！')
            return Promise.reject(response.data.msg)
        }
    },
    error => {
        console.log(error)
        if(error.response.data) {
            error.message = error.response.data.msg
        }
        if(error.response.status === 401) {
            router.push("/login")
        }

        ElMessage.error(error.message? error.message :'系统异常！')
        return Promise.reject(error)
    }
)

const open1 = () => {
    ElMessage({
        showClose: true,
        message: 'This is a message.',
    })
}
export default request


