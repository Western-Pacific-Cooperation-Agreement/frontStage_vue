// 当前模块为**活动**请求api，API进行统一管理，即对请求接口统一管理
import request from '@/utils/axios' //api可以理解为普通axios的第二次封装
                                    //=>第一次主要是配置信息，第二次业务逻辑

var qs = require('qs')              //引入qs，会方便我们数据的转换操作

const BaseURL = '/act'//基础首页路径 =>对应后端请求的@RequestMapping("/act")

const get='/get'    //标识该请求方法为get请求

const post='/post'  //标识该请求方法为post请求方法

//******************以下为get方法请求集 **注意这里的命名要求*************************

//**********************以下为搜索界面请求 */

/** 
 * 方法名：getDefultList()
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述：获得默认（或推荐的）的活动列表
 * 时间：2022年9月9日14:19:23
 * */

// 通过获得搜索的数据可以选择的数据，例如积分之类的等等
export const getSearchParam = () => {
  return request({
    url: BaseURL+get+'/searchParam',
    methods: 'get'
  })
}

/** 
 * 方法名：getDefultList()
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述：获得默认（或推荐的）的活动列表
 * 时间：2022年9月9日14:19:23
 * */

// 通过获得默认的活动列表
export const getDefultList = () => {
  return request({
    url: BaseURL+get+'/DefultList',
    methods: 'get'
  })
}
/** 
 * 方法名：getSearchList()
 * 方法参数：界面的搜索参数
 * 作者：WPCA-XieQijiang
 * 描述：获得搜索的数据列表
 * 时间：2022年9月9日14:19:23
 * */
// 通过关键词等相关数据搜索获取活动列表
export const getSearchList = (form
  ) => {
  return request({
    url: BaseURL+get+'/SearchList?'+qs.stringify(form),
    methods: 'get'
  })
}
/** 
 * 方法名：getSearchListBySQL()
 * 方法参数：界面的搜索SQL参数
 * 作者：WPCA-XieQijiang
 * 描述：获得搜索的数据列表
 * 时间：2022年9月9日14:19:23
 * */
// 通过关键词等相关数据搜索获取活动列表
export const getSearchListBySQL = (sql
  ) => {
    console.log( BaseURL+get+'/SearchListBySQL');
  return request({
    url: BaseURL+get+'/SearchListBySQL/',
    method: 'post',
    data:{sql:sql}
  })
}
export const getSearchListBySimpleSQL = (ssql
  ) => {
    console.log( BaseURL+get+'/SearchListBySimpleSQL');
  return request({
    url: BaseURL+get+'/SearchListBySimpleSQL/',
    method: 'post',
    data:{ssql:ssql}
  })
}
//**********************以下为活动详情界面请求 */
/** 
 * 方法名：getActivityInfo()
 * 方法参数：活动的id
 * 作者：WPCA-XieQijiang
 * 描述： 通过活动的id获取页面详情数据
 * 时间：2022年9月9日14:19:23
 * */
export const getActivityInfo = (id) => {
  return request({
    url: BaseURL +get+'/activityInfo/'+id,
    method: 'get'
  })
}

/** 
 * 方法名：getUserCollected()
 * 方法参数：活动的id
 * 作者：WPCA-XieQijiang
 * 描述： 通过活动的id获取用户是否收藏了该活动
 * 时间：2022年9月9日14:19:23
 * */
 export const getUserCollected = (id) => {
  return request({
    url: BaseURL +get+'/userCollected/'+id,
    method: 'get'
  })
}

/** 
 * 方法名：getUserApplied()
 * 方法参数：活动的id
 * 作者：WPCA-XieQijiang
 * 描述： 通过活动的id获取用户是否报名了该活动
 * 时间：2022年9月10日16:35:28
 * */
 export const getUserApplied = (id) => {
  return request({
    url: BaseURL +get+'/userApplied/'+id,
    method: 'get'
  })
}
/** 
 * 方法名：getUserInfo()
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述： 获得当前用户信息
 * 时间：2022年9月10日16:35:28
 * */
 export function getUserInfo(){
  return request({
    url: BaseURL +get+'/userInfo',
    method: 'get'
  })
}

/** 
 * 方法名：getUserInfo()
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述： 获得用角色信息
 * 时间：2022年9月10日16:35:28
 * */
 export function getRoleInfo(){
  return request({
    url: BaseURL +get+'/roleInfo',
    method: 'get'
  })
}

/** 
 * 方法名：getActObject()
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述： 获得活动对象信息
 * 时间：2022年9月10日16:35:28
 * */
 export function getActObject(){
  return request({
    url: BaseURL +get+'/actObject',
    method: 'get'
  })
}

/** 
 * 方法名：getActAsso()
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述： 获得用部门信息
 * 时间：2022年9月10日16:35:28
 * */
 export function getActAsso(){
  return request({
    url: BaseURL +get+'/actAsso',
    method: 'get'
  })
}
/** 
 * 方法名：getActUser()
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述： 获得负责人信息
 * 时间：2022年9月11日09:35:03
 * */
 export function getActUser(id){
  return request({
    url: BaseURL +get+'/actUser/'+id,
    method: 'get'
  })
}

/** 
 * 方法名：getActType()
 * 方法参数：无
 * 作者：WPCA-XieQijiang
 * 描述： 获得活动类型信息
 * 时间：2022年9月11日09:35:03
 * */
 export function getActType(){
  return request({
    url: BaseURL +get+'/actType/',
    method: 'get'
  })
}

//******************以下为post方法请求集 注意这里的命名要求*************************

//**********************以下为搜索界面请求 */

  //暂无

//**********************以下为活动详情界面请求 */
  
  //收藏活动
  /** 
 * 方法名：addCollectedAct()
 * 方法参数：活动的id
 * 作者：WPCA-XieQijiang
 * 描述：收藏
 * 时间：2022年9月9日14:19:23
 * */

export function addCollectedAct(id){

  return request({
    url: BaseURL +post+'/addCollectedAct',
    method:  'post',
    data: {id:id}
  })
}
  
  //报名活动
  /** 
 * 方法名：addSignUpAct()
 * 方法参数：活动的id
 * 作者：WPCA-XieQijiang
 * 描述：报名
 * 时间：2022年9月9日14:19:23
 * */
export function addSignUpAct(id){
  return request({
    url: BaseURL +post+'/addSignUpAct',
    method:  'post',
    data: {id:id}
  })
}

//收藏活动
  /** 
 * 方法名：addCollectedAct()
 * 方法参数：活动的id
 * 作者：WPCA-XieQijiang
 * 描述：取消收藏
 * 时间：2022年9月9日14:19:23
 * */

export function cancelCollectedAct(id){
    const params = new URLSearchParams()
    params.append('id',id)

    return request({
      url: BaseURL +post+'/cancelCollectedAct',
      method: 'post',
      data: {id:id}
    })
}
    

    /** 
   * 方法名：addSignUpAct()
   * 方法参数：活动的id
   * 作者：WPCA-XieQijiang
   * 描述：取消报名
   * 时间：2022年9月9日14:19:23
   * */
  export function cancelSignUpAct(id) {
    const params = new URLSearchParams()
    params.append('id',id)
    return request({
      url: BaseURL +post+'/cancelSignUpAct',
      method:  'post',
      data: {id:id}
    },)
  }
  