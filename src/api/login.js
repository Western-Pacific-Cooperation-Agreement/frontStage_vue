// 当前模块为登录请求api，API进行统一管理，即对请求接口统一管理
import request from '@/utils/axios'


var qs = require('qs')              //引入qs，会方便我们数据的转换操作

//登入请求 比较特殊 并且全局唯一 这里我们就不需要进行配置基础地址
// const BaseURL = '/act'//基础首页路径 =>对应后端请求的@RequestMapping("/act")

// const get='/get'    //标识该请求方法为get请求

// const post='/post'  //标识该请求方法为post请求方法

/***************************Get请求集 */
/** 
 * 方法名：getCaptcha
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述： 获取验证码
 * 时间：2022年9月9日15:14:04
 * */

 export function getCaptcha() {
  return request({
    url: '/captcha',
    method: 'get',//  =>注意啦，登入请求后端采用的是spring security进行拦截
  })
}



/***************************Post请求集 */

/** 
 * 方法名：login
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述： 请求登入
 * 时间：2022年9月9日15:14:08
 * */
 export function login(param) {
  console.log('/login?'+param);
  return request({
    url: ''+'/login?'+param,
    method: 'post',//  =>注意啦，登入请求后端采用的是spring security进行拦截
  })
}


/** 
 * 方法名：logout()
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述： 退出登入
 * 时间：2022年9月9日14:19:23
 * */
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
