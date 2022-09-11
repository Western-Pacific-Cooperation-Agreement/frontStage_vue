<template>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="name"
        label="活动名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="id"
        label="活动编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="association"
        label="所属社团"
        width="120">
      </el-table-column>
      <el-table-column
        prop="nature"
        label="活动性质"
        width="120">
      </el-table-column>
      <el-table-column
        prop="integral"
        label="活动积分"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="活动地点"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="审核状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="reply"
        label="审核回复"
        width="120">
      </el-table-column>
      
      <el-table-column
        prop="startDate"
        label="活动开始时间"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"  v-if="!(scope.row.zip==='存档')">编辑</el-button>
          <el-button type="text" size="small" v-if="(scope.row.zip==='未通过')">重新提交申请</el-button>
          <el-button type="text" size="small" v-if="(scope.row.zip==='通过')">查看</el-button>
          <el-button type="text" size="small" v-if="(scope.row.zip==='通过')||(scope.row.zip==='存档')">打印申请表</el-button>
          <el-button type="text" size="small" v-if="!(scope.row.zip==='未通过')&&!(scope.row.zip==='存档')">取消申请</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  <script>
  import {getMyApplyAct} from '@/api/person'
export default {
      methods: {
        handleClick(row) {
          console.log(row);
        },
        getMyApplyAct(){
          getMyApplyAct().then(res=>{
            console.log("我申请的活动")
          console.log(res)
            this.userApplyAct=res.data.data;
          })
        }

      },
      created(){
        this.getMyApplyAct();  

      },
      data() {
        return {
          userApplyAct:[],
          tableData: [{
            name: '周末文化集市',
            id:1,
            association: '运营部',
            nature: '文化',
            integral: '10',
            address: '艺术会堂门前',
            startDate:"2022/9/17",
            reply:"同意举办",
            zip: "通过"
          },{
            name: '计算机学院篮球比赛',
            id:2,
            association: '文体部',
            nature: '运动',
            integral: '10',
            address: '厦门理工一期篮球场',
            startDate:"2022/9/18",
            zip: "审核中"

          },{
            name: '计算机学院羽毛球比赛',
            id:3,
            association: '文体部',
            nature: '运动',
            integral: '10',
            address: '厦门理工体育馆',
            startDate:"2022/9/19",
            reply:"不同意申请，场地已被使用。",
            zip: "未通过"
          },
          {
            name: '计算机学院乒乓球比赛',
            id:4,
            association: '文体部',
            nature: '运动',
            integral: '10',
            address: '厦门理工体育馆',
            zip: "存档",
            reply:"同意举办",
            startDate:"2022/9/2",
          }, {
            name: '厦门理工编程大赛',
            id:5,
            association: '学习部',
            nature: '学习',
            integral: '20',
            address: '厦门理工精工楼-1',
            zip: "存档",
            reply:"同意",
            startDate:"2022/9/1",
          }]
        }
      }
    }
  </script>

<style scoped>

</style>