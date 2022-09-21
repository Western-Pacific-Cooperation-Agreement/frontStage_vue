// 当前模块为**{{  }}**请求api，API进行统一管理，即对请求接口统一管理
import request from '@/utils/axios' //api可以理解为普通axios的第二次封装
                                    //=>第一次主要是配置信息，第二次业务逻辑

var qs = require('qs')              //引入qs，会方便我们数据的转换操作

const BaseURL = '/lsy'//基础首页路径 =>对应后端请求的 @RequestMapping("/act")

const get='/get'    //标识该请求方法为get请求

const post='/post'  //标识该请求方法为post请求方法

//******************以下为get方法请求集*************************
/** 
 * 方法名：{{  }}
 * 方法参数：{{  }}
 * 作者：WPCA-{{  }}
 * 描述：{{  }}
 * 时间：{{  }}年{{  }}月{{  }}日{{  }}:{{  }}:{{  }}
 * */

// 通过获得搜索的数据可以选择的数据，例如积分之类的等等
export const getSearchParam = () => {
  return request({
    url: BaseURL+get+'/searchParam',
    methods: 'get'
  })
}

/** 
 * 方法名：getAllAct()
 * 方法参数：无
 * 作者：WPCA-lsy
 * 描述：获取所有活动列表
 * 时间：2022年9月9日14:19:23
 * */

// 通过获得默认的活动列表
export const getAllAct = () => {
  return request({
    url: BaseURL+get+'/AllAct',
    method: 'get'
  })
}



//******************以下为post方法请求集*************************

/** 
 * 方法名：getSearchAct()
 * 方法参数：无
 * 作者：WPCA-lsy
 * 描述：获取搜索的活动
 * 时间：2022年9月19日
 * */
 export const getSearchAct = (data) => {
  return request({
    url: BaseURL+post+'/searchAct',
    method: 'post',
    data: data
  })
}
