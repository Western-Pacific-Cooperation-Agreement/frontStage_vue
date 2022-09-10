// 当前模块为**首页**请求api，API进行统一管理，即对请求接口统一管理
import request from '@/utils/axios' //api可以理解为普通axios的第二次封装
                                    //=>第一次主要是配置信息，第二次业务逻辑

var qs = require('qs')              //引入qs，会方便我们数据的转换操作

const BaseURL = '/home'//基础首页路径 =>对应后端请求的@RequestMapping("/home")

const get='/get'    //标识该请求方法为get请求

const post='/post'  //标识该请求方法为post请求方法

//******************以下为get方法请求集 **注意这里的命名要求*************************

/** 
 * 方法名：getRotationChart()
 * 方法参数：void
 * 作者：WPCA-XieQijiang
 * 描述：获得轮播图数据
 * 时间：2022年9月9日14:19:23
 * */
export function getRotationChart() {
    return request({
      url: ''+BaseURL+get+'/rotationChart',//这里的get+'/rotationChart =>对应后端请求的GetMapping("/get/rotationChart")
      method: 'get',
    })
  }

/** 
 * 方法名：getHotAct()
 * 方法参数：void
 * 作者：WPCA-XieQijiang
 * 描述：获得轮播图数据
 * 时间：2022年9月9日14:19:23
 * */
 export function getHotAct() {
    return request({
      url: ''+BaseURL+get+'/hotAct',
      method: 'get',
    })
}

/** 
 * 方法名：getRecomendAct()
 * 方法参数：void
 * 作者：WPCA-XieQijiang
 * 描述：获得轮播图数据
 * 时间：2022年9月9日14:19:23
 * */
 export function getRecommendAct() {
    return request({
      url: ''+BaseURL+get+'/recommendAct',
      method: 'get',
    })
}

//******************以下为post方法请求集 注意这里的命名要求*************************

//暂无void