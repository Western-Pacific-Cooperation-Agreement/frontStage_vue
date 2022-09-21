<template>
  <div>
    <el-row :gutter="12">
  <el-col :span="16">
    <el-card >
      <div class="block">
    <span class="demonstration"></span>
    <el-image :src="table.actUrl" style="width:95%;height:100%" ></el-image>
  </div>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card>
      <el-row class="buttonGroup_1">

     
  <el-button type="danger" v-if="(!applied)&&table.actReviewerStaus==1" @click="dialogVisible = true">报名活动</el-button>

  <el-popconfirm 
  confirm-button-text='好的'
  cancel-button-text='不用了'
  icon="el-icon-info"
  icon-color="red"
  title="这是一段内容确定删除吗？"
>
  <el-button type="danger"  slot="reference" v-if="applied&&table.actReviewerStaus==1"  plain  @click="cancelSignUpAct()" >取消报名</el-button>
</el-popconfirm>

  <el-button type="warning" v-if="!collected" @click.capture="addCollectedAct()">收藏活动</el-button>


  <el-button type="warning" plain v-if="collected"  @click="cancelCollectedAct()">取消收藏</el-button>



  <el-button type="primary" @click="copy()">分享活动</el-button>
</el-row>
    </el-card>


  </el-col>

</el-row>

<!--活动详情表-->
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
      <el-form label-width="80px">
        <el-form-item label="活动编号">
        {{table.id}}
      </el-form-item>
      <el-form-item label="活动名称">
        {{table.actName}}
      </el-form-item>
      <el-form-item label="活动性质">

        <el-tag v-for="item in actType"   v-if="item.id==table.actNatureId" >
           {{item.actNatureName}}   
        </el-tag>
      </el-form-item>
      <el-form-item label="活动区域">
        {{table.actPlace}}
      </el-form-item>
      <el-form-item label="活动时间">
        {{table.actStartDate}}
      </el-form-item>
      <el-form-item label="活动时长">
        {{table.actDuration}}
      </el-form-item>
      <el-form-item label="活动组织">

        <el-tag v-for="item in actAsso"   v-if="item.id==table.assoId" >
           {{item.assoName}}   
        </el-tag>

      </el-form-item>
  
      <el-form-item label="活动负责人电话">
      <span>{{actUserPhone}}</span>
      </el-form-item>
      <el-form-item label="活动人数">
        <el-tag v-if="table.actNumber==0">  
            100人及以下
          </el-tag>
        <el-tag v-if="table.actNumber==1" >  
          100-999人
         </el-tag>
        <el-tag v-if="table.actNumber==2" >   
          1000人及以上
        </el-tag>

      </el-form-item>
      <el-form-item label="活动对象">
       <el-tag v-for="item in actObjcet"   v-if="item.id==table.actObjectId" >
           {{item.objectName}}   
        </el-tag>
      </el-form-item>

      <el-form-item label="活动目的">
      {{table.actAim}}
      </el-form-item>
      
      <el-form-item label="活动流程">
        {{table.actProcess}}
      </el-form-item>

      <el-form-item label="注意事项">
        <el-tag type="danger">{{table.actWarn}}</el-tag>
      </el-form-item>
    
      <el-form-item label="活动积分">
         <el-button type="primary" circle plain> {{table.actIntegral}}</el-button>
      </el-form-item>
      <el-form-item label="活动状态">

        <el-tag type="warning" v-if="table.actReviewerStaus==0">活动未审核</el-tag>
        <el-tag type="danger" v-if="table.actReviewerStaus==1">报名中</el-tag>
        <el-tag type="info" v-if="table.actReviewerStaus==2">活动结束</el-tag>
        <el-tag type="success" v-if="table.actReviewerStaus==3">存档</el-tag>
        <el-tag type="info" v-if="table.actReviewerStaus==4">审核失败</el-tag>
      </el-form-item>
    </el-form>
          </div>
      </div>
      </el-card>   
  </el-col>


</el-row>

<!--报名对话窗-->
<el-dialog
  title="报名活动"
  :visible.sync="dialogVisible"
  width="60%"
  :before-close="handleClose">

  <el-descriptions class="margin-top" title="请认真核对报名信息" :column="3"  border>
    <template slot="extra">
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        活动编号
      </template>
      {{table.id}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        活动名
      </template>
      {{table.actName}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      {{userInfo.username}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      {{userInfo.phone}}
    </el-descriptions-item>
   
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        角色
      </template>
      <el-tag size="small" v-for="item in userInfo.roles">{{item.roleName}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        邮箱
      </template>
      {{userInfo.email}}
    </el-descriptions-item>
  </el-descriptions>


  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addSignUpAct()">确 定</el-button>
  </span>
</el-dialog>


  </div>
</template>

<script>
  import {getActivityInfo,getUserApplied,getUserCollected,addCollectedAct,addSignUpAct,
    cancelCollectedAct,cancelSignUpAct,getUserInfo,getActObject,getActAsso,getActUser,getActType} from '@/api/act'
  
  export default {
    data() {
      return {
        activeIndex:'1',//默认停留在活动详情PAGE
        table:[], 
        applied:false,
        collected:false,
        dialogVisible: false,
        userInfo:[],
        roleInfo:[],
        actObjcet:[],
        actAsso:[],
        actUserPhone:'',
        actType:[]
      }
    },
    methods:{
      copy(){
        var test = window.location.href;
        navigator.clipboard.writeText(test);
        this.$message({
          type:'success',
          message:"你已经复制了链接，快去告诉小伙伴吧"
        })
    }
,
      handleClose(done) {
            done();
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getActivityInfo(id){
        getActivityInfo(id).then(res=>{
          console.log("获得对应活动的详情信息");
          console.log(res);
          this.table=res.data.data;
          this.getActUser(this.table.userId)
        })
      },
      getUserApplied(){
        getUserApplied(this.$route.query.id).then(res=>{
          console.log("获得用户申请情况");
          console.log(res)
          this.applied=res.data.data.applied;
        })

      },
      getUserCollected(){
        getUserCollected(this.$route.query.id).then(res=>{
          console.log("获得用户收藏情况");
          console.log(res)
          this.collected=res.data.data.collected;
        })
      },addCollectedAct(){
        addCollectedAct(this.$route.query.id).then(res=>{
          console.log("收藏该活动");
          console.log(res);
          this.$message({
            type:'success',
            message:res.data.msg,
          })
          this.getUserCollected(this.$route.query.id)
        })
      },addSignUpAct(){
        this.dialogVisible = false;
        addSignUpAct(this.$route.query.id).then(res=>{
          console.log("报名参加该活动");
          console.log(res);
          this.$message({
            type:'success',
            message:res.data.msg,
          })
          this.getUserApplied(this.$route.query.id)

        
        })
      },cancelCollectedAct(){
        cancelCollectedAct(this.$route.query.id).then(res=>{
          console.log("取消收藏活动");
          console.log(res);
          this.getUserCollected(this.$route.query.id)
          this.$message({
            type:'success',
            message:res.data.msg,
          })
        })
      },cancelSignUpAct(){
        cancelSignUpAct(this.$route.query.id).then(res=>{
          console.log("取消报名活动");
          console.log(res);
          this.$message({
            type:'success',
            message:res.data.msg,
          })
          this.getUserApplied(this.$route.query.id)
        })
      },
      getUserInfo(){
        getUserInfo().then(res=>{
          console.log("获得用户当前信息"); 
          console.log(res);
          
          this.userInfo=res.data.data;
        })
      },getActObject(){

        getActObject().then(res=>{
          console.log("获得活动对象"); 
          console.log(res);
          
          this.actObjcet=res.data.data;
        })

      },getActAsso(){

        getActAsso().then(res=>{
          console.log("获得活动部门"); 
          console.log(res);
          this.actAsso=res.data.data;
        })
      },getActUser(id){
        getActUser(id).then(res=>{
          console.log("获得负责人信息"); 
          console.log(res);
          this.actUserPhone=res.data.data.phone
        })
      },
      getActType(){
        getActType().then(res=>{
          console.log("获得活动类型信息"); 
          console.log(res);
          this.actType=res.data.data
        })
      }

    }
    ,created(){
      console.log("获得界面参数")
      console.log(this.$route.query);
      this.getUserInfo()
      this.getActivityInfo(this.$route.query.id)
      this.getUserApplied(this.$route.query.id)
      this.getUserCollected(this.$route.query.id)
      this.getActAsso()
      this.getActObject()
      this.getActType()
    }
  }
</script>

<style scoped>
.buttonGroup_1 .el-button{
width:400px;
padding: 20px 20px 20px ;
margin: 10px;
}
.detailInfo .el-form-item{
font-size: 50px;
border:1px solid gainsboro;

}
.el-form-item__label{
  width: 20px;
}
.el-button:active(){
  background: fixed;
}
</style>