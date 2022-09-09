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
export const getSearchList = (
  actName/**关键活动名词*/,
  actPlace/**活动区域*/,
  startTime/**活动开始时间*/,
  endTime/**活动截止报名时间*/,
  asso/**活动部门*/,
  actType/**活动性质*/,
  integral/**活动积分*/,
  actObject/**关键活动名词*/,
  fuzzySearch/**模糊搜索*/,
  ) => {
  return request({
    url: BaseURL+get+'/SearchList'
    +'?actName='+actName+'&'
    +'?actPlace='+actPlace+'&'
    +'?startTime='+startTime+'&'
    +'?endTime='+endTime+'&'
    +'?asso='+asso+'&'
    +'?actType='+actType+'&'
    +'?integral='+integral+'&'
    +'?actObject='+actObject+'&'
    +'?fuzzySearch='+fuzzySearch+'&'
    ,
    methods: 'get'
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
    url: BaseURL +get+'/activityInfo'+'?actId='+id,
    methods: 'get'
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
 * 描述：获得轮播图数据
 * 时间：2022年9月9日14:19:23
 * */

export const addCollectedAct = (id) => {
  return request({
    url: BaseURL +post+'/addCollectedAct'+'?actId='+id,
    methods: post
  })
}
  
  //报名活动
  /** 
 * 方法名：addSignUpAct()
 * 方法参数：活动的id
 * 作者：WPCA-XieQijiang
 * 描述：报名参加活动
 * 时间：2022年9月9日14:19:23
 * */
export const addSignUpAct = (id) => {
  return request({
    url: BaseURL +post+'/addSignUpAct'+'?actId='+id,
    methods: post
  })
}

//收藏活动
  /** 
 * 方法名：addCollectedAct()
 * 方法参数：活动的id
 * 作者：WPCA-XieQijiang
 * 描述：获得轮播图数据
 * 时间：2022年9月9日14:19:23
 * */

   export const cancelCollectedAct = (id) => {
    return request({
      url: BaseURL +post+'/cancelCollectedAct'+'?actId='+id,
      methods: post
    })
  }
    

    /** 
   * 方法名：addSignUpAct()
   * 方法参数：活动的id
   * 作者：WPCA-XieQijiang
   * 描述：取消报名参加活动
   * 时间：2022年9月9日14:19:23
   * */
  export const cancelSignUpAct = (id) => {
    return request({
      url: BaseURL +post+'/cancelSignUpAct'+'?actId='+id,
      methods: post
    })
  }
  