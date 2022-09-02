// 当前模块为个人中心请求api，API进行统一管理，即对请求接口统一管理
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
