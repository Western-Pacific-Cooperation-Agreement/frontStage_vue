<template>
  <div>
    <el-row :gutter="12">
  <el-col :span="16">
    <el-card >
      <div class="block">
    <span class="demonstration"></span>
    <el-image :src="src"></el-image>
  </div>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card>
      <el-row class="buttonGroup_1">
  <el-button type="danger">报名活动</el-button>
  <el-button type="warning">收藏活动</el-button>
  <el-button type="primary">分享活动</el-button>
</el-row>
    </el-card>
  </el-col>

</el-row>
<el-row :gutter="12">
  <el-col :span="24">
      <el-card >
        <div class="block">
      <span class="demonstration"></span>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">活动详情</el-menu-item>
      <el-menu-item index="2">评论</el-menu-item>
      </el-menu>
      </div>
      <div class="detailInfo">
          <h1>活动详情内容</h1>
          <div>
            <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        {{actName}}
      </el-form-item>
      <el-form-item label="活动性质">
        {{actType}}
      </el-form-item>
      <el-form-item label="活动区域">
        {{actPlace}}
      </el-form-item>
      <el-form-item label="活动时间">
        {{actTime}}
      </el-form-item>
      <el-form-item label="活动社团">
        {{actOrganizer}}
      </el-form-item>
      <el-form-item label="活动负责人电话">
      {{organizerPhone}}
      </el-form-item>
      <el-form-item label="活动人数">
        {{actPersonCount}}
      </el-form-item>
      <el-form-item label="活动对象">
        {{actPersonType}}
      </el-form-item>

      <el-form-item label="活动目的">
      {{actPurpose}}
      </el-form-item>
      
      <el-form-item label="活动流程">
        {{actProcess}}
      </el-form-item>

      <el-form-item label="注意事项">
        {{actCare}}
      </el-form-item>
    
      <el-form-item label="活动积分">
        {{actPoint}}
      </el-form-item>
    </el-form>
          </div>
        </div>
      </el-card>   
  </el-col>


</el-row>
  </div>
</template>

<script>
  import {getActivityInfo} from '@/api/act'
  export default {
    data() {
      return {
        activeIndex: '1',
        src: '',
        actName: "周末文化集市",
        actType: "活动类型",
        actPlace: "活动地点",
        actTime: "活动时间",
        actOrganizer: "活动发起者",
        organizerPhone: "负责人电话",
        actPersonCount: "活动人数",
        actPersonType: "参加活动对象的类型",
        actPurpose: "活动目的",
        actProcess: "活动流程",
        actCare: "注意事项",
        actPoint: "活动积分",

        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      
      }
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    ,created(){
      getActivityInfo().then(res=>{
      this.src=res.data.src
    }
      );
    }
    
   
  }
</script>

<style scoped>
.buttonGroup_1 .el-button{
width:500px;
padding: 20px 20px 20px;
margin: 10px;
}
.detailInfo .el-form-item{
font-size: 50px;

}
.el-form-item__label{
  width: 20px;
}

</style>