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
      <img src = "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>{{hotAct[key].actName}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ hotAct[key].currentDate }}</time>
          <el-button type="text" class="button">查看详情</el-button>
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
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>{{recommendAct[key].actName}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ recommendAct[key].currentDate }}</time>
              <el-button type="text" class="button">查看详情</el-button>
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
      hotAct:[{
        actName:"周末文化艺术节",
        currentDate: new Date(),
        imgSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        url:"",
      },
      {
        actName:"乒乓球",
        currentDate: new Date(),
        imgSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        url:"",
      },{
        actName:"篮球",
        currentDate: new Date(),
        imgSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        url:"",
      }
    ],
      recommendAct:[{
        actName:"推荐1",
        currentDate: new Date(),
        imgSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        url:"",
      },
      {
        actName:"推荐2",
        currentDate: new Date(),
        imgSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        url:"",
      },
      {
        actName:"推荐3",
        currentDate: new Date(),
        imgSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        url:"",
      },
      ]
    };
  },
  methods:{
    getRotationChart(){
      console.log("获取轮播图")
      getRotationChart().then(res=>{
        console.log(res)
        this.carousel=res.data.data;

  })
    }
  },
  created(){
    this.getRotationChart()
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