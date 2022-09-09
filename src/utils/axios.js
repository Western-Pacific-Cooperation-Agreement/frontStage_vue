//建立axios拦截器 
import axios from 'axios'
import router from '../router'
import { Message } from "element-ui";

//后端端口
axios.defaults.baseURL = "http://localhost:18888"

//模拟端口

const request = axios.create({
    timeout: 10000, //10s
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
request.interceptors.response.use(
	response => {

		console.log("response ->" + response)

		let res = response.data

		if (res.code === 200) {
			return response
		} else {
           
			Message({
                message:'错误信息：'+ res.msg,
                type:'error'
            
            })
            //router.push("/login")
			return Promise.reject(response.data.msg)
		}
	},
	error => {

		console.log(error)

		if (error.response.data) {
			error.massage = error.response.data.msg
		}

		if (error.response.status === 401) {
			router.push("/login")
		}
        Message({
            message:"错误信息："+error.massage,
            type:'error'
        
        })
		return Promise.reject(error)
	}
)


export default request


