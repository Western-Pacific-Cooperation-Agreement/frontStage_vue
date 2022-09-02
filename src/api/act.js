// 当前模块为活动请求api，API进行统一管理，即对请求接口统一管理
import requests from '@/utils/request'

var qs = require('qs')

const BaseURL = 'http://localhost:8080/'

// 获取页面数据
export const getPageParam = () => {
    return requests({
      url: BaseURL + '/getParam',
      method: 'get'
    })
  }

// 获取活动页面详情数据
export const getActivityInfo = (id) => {
  console.log(" 获取页面数据")
  console.log(BaseURL + 'getActivityInfo'+'?actId='+id);
  return requests({
    url: BaseURL + '/getActivityInfo'+'?actId='+id,
    method: 'get'
  })
}
