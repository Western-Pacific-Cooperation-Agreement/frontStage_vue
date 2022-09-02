const Mock = require ('mockjs')

const romdom= Mock.Random//获得Random对象

let Result = {

    code:200,
    msg:'操作成功',
    date:null

}

//获取验证码
Mock.mock('/captcha','get',()=>{
    Result.data={
        token:romdom.string(32),
            captchaImg:romdom.dataImage('100x40','p7n5w')
    }
return Result

})
//登入请求
Mock.mock('/login','post',()=>{

   // Result.code=400
   // Result.msg='验证码错误'
    return Result

})
//获得用户信息
Mock.mock('/sys/userInfo','get',()=>{

    Result.data={
        id:"1",
        username:"test",
        avater:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    }
    return Result


})
//登出
Mock.mock('/logout','post',()=>{

    return Result

})
//导航
Mock.mock('/sys/menu/nav','get',()=>{
    let navs=[
        {
        name:'SysManage',
        title:'系统管理',
        icon:'location',
        component:'',
        path:'',
        children:[
            {
                name: 'SysUser',
                title: '用户管理',
                icon: 'avatar',
                path: '/sys/users',
                component:'sys/User',
                children: []

            },
            {
                name: 'SysRole',
                title: '角色管理',
                icon: 'fold',
                path: '/sys/roles',
                component:'sys/Roles',
                children: []
            },
            {
                name: 'SysMenu',
                title: '菜单管理',
                icon: 'grid',
                path: '/sys/menus',
                component:'sys/Menus',
                children: []
            }
        ]
    }
        ,
        {
            name: 'SysTools',
            title: '系统工具',
            icon: 'setting',
            path: '',
            component:'',
            children: [
                {
                    name: 'SysDict',
                    title: '数字字典',
                    icon: 'collection',
                    component:'',
                    path: '/sys/dicts',
                    children: []
                }
            ]
        }]
    let authoritys=['sys:user:list','sys:user:save','sys:user:save']

    Result.data={
        navs:navs,
        authoritys:authoritys
    }

    return Result

})

//
Mock.mock('/sys/menu/list','get',()=>{
    Result.data=[
        {
            id: 1,
            date: '2016-05-01',
            name: '系统管理',
            address: '上海市普陀区金沙江路 1519 弄',
            statu:1,
            perms:1,
            type:0,
            path: '/sys/roles',
            icon:"location",
            children: [{
                id: 1-1,
                date: '2016-05-01',
                icon: 'avatar',
                name: '用户管理',
                type:2,
                path: '/sys/roles',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                id: 1-2,
                date: '2016-05-01',
                name: '角色管理',
                icon: 'fold',
                type:2,
                path: '/sys/roles',
                address: '上海市普陀区金沙江路 1519 弄'
            },
                {
                    id: 1-3,
                    date: '2016-05-01',
                    name: '菜单管理',
                    type:1,
                    icon: 'grid',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
            ]
        },
            {
                id: 2,
                date: '2016-05-02',
                name: '系统工具',
                icon:'setting',
                address: '上海市普陀区金沙江路 1518 弄',
                statu:1,
                type:0,
                children: [{
                    id: 1-3,
                    date: '2016-05-01',
                    name: '数据字典',
                    icon: 'collection',
                    type:2,
                    address: '上海市普陀区金沙江路 1519 弄'

                }]
            }]
    return Result

})

//角色
Mock.mock(RegExp('/sys/menu/info/*'),'get',()=>{
    Result.data={
        "id": 3,
        "statu":1,
        "parentId":1,
        "name":"角色管理",
        "path":"/sys/roles",
        "perms":"sys:role:list",
        "component": 'sys/Role',
        "type":1,
        "icon": "fold",
        "orderNum":2,
        "children":[]
    }
    return Result

})
Mock.mock(RegExp('/sys/menu/delete/*'),'post',()=>{
    Result.data={
        "id": 3,
        "statu":1,
        "parentId":1,
        "name":"角色管理",
        "path":"/sys/roles",
        "perms":"sys:role:list",
        "component": 'sys/Role',
        "type":1,
        "icon": "fold",
        "orderNum":2,
        "children":[]
    }
    return Result

})
Mock.mock(RegExp('/sys/menu/*'),'get',()=>{
    return Result
})


//角色管理


Mock.mock(RegExp('/sys/role/list'),'get',()=>{
    Result.data={
        "records":[
            {   "id": 3,
                "created":"2022年5月17日22:28:21",
                "updated":"2022年5月17日22:28:34",
                "statu":1,
                "name":"普通用户",
                "code":"normal",
                "remark":"只有基本查看功能",
                "menuIds":[]
            },
            {
                "id": 6,
                "created":"2022年5月17日22:28:21",
                "updated":"2022年5月17日22:28:34",
                "statu":1,
                "name":"管理员",
                "code":"admin",
                "remark":"最高权限",
                "menuIds":[]
            }
        ],
        "total":2,
        "size":10,
        "current":1,
        "orders":[],
        "optimizeCountSq1":true,
        "hitCount":false,
        "countId":null,
        "maxLimit":null,
        "searchCount":true,
        "pages":1
    }
    return Result
})
Mock.mock(RegExp("/sys/role/info/*"),'get',()=>{
    Result.data={
        "id": 6,
        "created":"2022年5月17日22:28:21",
        "updated":"2022年5月17日22:28:34",
        "statu":1,
        "name":"管理员",
        "code":"admin",
        "remark":"最高权限",
        "menuIds":[2]

    }
    return Result

})
Mock.mock(RegExp("/sys/role/*"),'post',()=>{

    return Result

})
//用户管理
Mock.mock(RegExp('/sys/user/list'),'get',()=>{
    Result.data={
        "records":[
            {   "id": 3,
                "created":"2022年5月17日22:28:21",
                "updated":"2022年5月17日22:28:34",
                "statu":1,
                "email" :"1234qq@com",
                "username":"普通用户",
                "info":"小明",
                "phone":121314,
                "code":"normal",
                "remark":"只有基本查看功能",
                "menuIds":[]
            },
            {
                "id": 6,
                "created":"2022年5月17日22:28:21",
                "updated":"2022年5月17日22:28:34",
                "email" :"1234qq@com",
                "statu":1,
                "phone":121314,
                "username":"管理员",
                "code":"admin",
                "remark":"最高权限",
                "menuIds":[]
            }
        ],
        "total":2,
        "size":10,
        "current":1,
        "orders":[],
        "optimizeCountSq1":true,
        "hitCount":false,
        "countId":null,
        "maxLimit":null,
        "searchCount":true,
        "pages":1
    }
    return Result
})
Mock.mock(RegExp("/sys/user/info/*"),'get',()=>{
    Result.data={
        "id": 6,
        "created":"2022年5月17日22:28:21",
        "updated":"2022年5月17日22:28:34",
        "statu":1,
        "roles":"管理员",
        "name":"管理员",
        "code":"admin",
        "remark":"最高权限",
        "menuIds":[2]

    }
    return Result
})
Mock.mock(RegExp("/sys/user/*"),'post',()=>{
    return Result

})


Mock.mock(RegExp("/getActivityInfo"),'get',()=>{
    Result.data={
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    }
    return Result
})
