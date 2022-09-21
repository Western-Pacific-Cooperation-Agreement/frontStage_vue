<template>
  <div>
      <el-form :inline="true">
    <el-form-item>
				<el-input
						v-model="searchForm.name"
						placeholder="名称"
						clearable
				>
				</el-input>  
			</el-form-item>
      <el-form-item>
        <el-date-picker
      v-model="searchForm.start"
      type="date"
      placeholder="选择搜索起始日期">
    </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker
      v-model="searchForm.end"
      type="date"
      placeholder="选择搜索终止日期">
    </el-date-picker>
      </el-form-item>
 
			<el-form-item>
				<el-button @click="getMyCollectAct()">搜索</el-button>
			</el-form-item>
    </el-form>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
        fixed
        prop="coreAct.actName"
        label="活动名称"
        width="150">
      </el-table-column>
    <el-table-column
      prop="coreAct.id"
      label="活动编码"
      width="120">
    </el-table-column>

    <el-table-column
      prop="coreAct.actIntegral"
      label="活动积分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="coreAct.actPlace"
      label="活动地点"
      width="300">
    </el-table-column>

    <el-table-column
      prop="coreAct.actStartDate"
      label="活动开始时间"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>

        <el-button @click="cancelCollectedAct(scope.row.coreAct.id)" type="text" size="small">取消收藏</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  import {getMyCollectAct,cancelCollectedAct} from '@/api/person'
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
        this.$router.push({path: '/ActivityInfo',query: {'id':row.coreAct.id}});
      },
      getMyCollectAct(){
        getMyCollectAct(this.searchForm).then(res=>{
          console.log("获得收藏的活动")
          console.log(res)
          this.tableData=res.data.data;
        })
      },
      cancelCollectedAct(id){
        cancelCollectedAct(id).then(res=>{
          console.log("取消收藏"+res)
          this.$message({
            type:"success",
            message:res.data.msg,
          })
          this.getMyCollectAct()
        })
      }
    }
      ,
    created(){
      this.getMyCollectAct();
    },

    data() {
      return {
        searchForm:{
        name:"",
        start:"",
        end:"",
      },
        userCollectAct:[],
        tableData: [{
          name: '周末文化集市',
          id:1,
          association: '运营部',
          nature: '文化',
          integral: '10',
          address: '艺术会堂门前',
          startDate:"2022/9/17",
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
          startDate:"2022/9/2",
        }, {
          name: '厦门理工编程大赛',
          id:5,
          association: '学习部',
          nature: '学习',
          integral: '20',
          address: '厦门理工精工楼-1',
          zip: "存档",
          startDate:"2022/9/1",
        }],
        userInfo:[],
        roleInfo:[],
        actObjcet:[],
        actAsso:[],
        actUserPhone:'',
        actType:[]
      }
  }
}
</script>

<style scoped>

</style>