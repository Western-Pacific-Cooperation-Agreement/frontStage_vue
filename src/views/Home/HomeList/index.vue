<template>
  <div class="page">
    
    <el-carousel indicator-position="outside" height="800px">
    <el-carousel-item v-for="item in carousel" >
    <img :src="item.url"  class="image">
    </el-carousel-item>
  </el-carousel>


  <h1>热门活动</h1>
  <el-card>

    <el-row :gutter="12">
    <el-col :span="8" v-for="(item,key) in hotAct" :key="key">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="item.actUrl" class="imagesmall">
      <div style="padding: 14px;">
        <span>{{item.actName}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ item.actStartDate }}</time>
          <el-button type="text" class="button" @click="lookDetail(item.id)" >查看详情</el-button>
        </div>
      </div>
    </el-card>
  </el-col>

  
</el-row>

  </el-card>
  <h1>推荐活动</h1>
  <el-card>
  
    <el-row :gutter="12">
      <el-col :span="8" v-for="(item,key) in recommendAct" :key="key">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.actUrl" class="imagesmall">
          <div style="padding: 14px;">
            <span>{{item.actName}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.actStartDate }}</time>
                <el-button type="text" class="button" @click="lookDetail(item.id)" >查看详情</el-button>          
            </div>
          </div>
        </el-card>
  </el-col>
  
 

  
</el-row>


  </el-card>
  </div>  
</template>

<script>
  import { getRotationChart } from '@/api/home';
  import { getHotAct } from '@/api/home';
  import { getRecommendAct } from '@/api/home';

export default {
  data() {
    return {
      carousel:[{
        url:""
      },
      {
        url:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"

      }
      ],
      hotAct:[
        
    ],
      recommendAct:[
      ]
    };
  },
  methods:{
    getRotationChart(){
      getRotationChart().then(res=>{
        console.log("获取轮播图")
        console.log(res)
        this.carousel=res.data.data;

      })
    },
    getHotAct(){
      getHotAct().then(res=>{
        console.log("热门活动")
        console.log(res)
        this.hotAct=res.data.data
      })
    },
    getRecommendAct(){
      getRecommendAct().then(res=>{
        console.log("推荐活动")
        console.log(res)
        this.recommendAct=res.data.data
      })
    },
    lookDetail(id){
      //传递的参数不会拼接在跳转的后面。使用this.route.query.key取值
     
      this.$router.push({path: '/ActivityInfo',query: {'id':id}});

       //传递的参数会拼接在跳转地址的后面。使用this.route.params.key取值
      //this.$router.push({name: 'ActivityInfo',params: {actId:id}});
    }
  },
  created(){
    this.getHotAct();
    this.getRecommendAct();
    this.getRotationChart();
  
  }
}
</script>

<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 100%;
    display: block;
  }
  .imagesmall {
    width: 100%;
    height:400px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>