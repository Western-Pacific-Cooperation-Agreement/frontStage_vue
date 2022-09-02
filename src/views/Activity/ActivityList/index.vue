<template>
  <div>
    <el-card>
      <h1>通用搜索</h1>
      <div>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="关键词">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-input v-model="form.region"></el-input>
  
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="10">
      <el-date-picker type="date" placeholder="开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="10">
      <el-date-picker type="date" placeholder="结束日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="活动部门">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="运营部" name="type"></el-checkbox>
      <el-checkbox label="文体部" name="type"></el-checkbox>
      <el-checkbox label="学习部" name="type"></el-checkbox>
      <el-checkbox label="宣传部" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="文化" name="type"></el-checkbox>
      <el-checkbox label="运动" name="type"></el-checkbox>
      <el-checkbox label="学习" name="type"></el-checkbox>
      <el-checkbox label="健康" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="活动积分">
    <el-select v-model="form.region" placeholder="请选择积分">
      <el-option label="10" value="shanghai"></el-option>
      <el-option label="20" value="beijing"></el-option>
      <el-option label="30" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动人数">
    <el-select v-model="form.region" placeholder="请选择人数">
      <el-option label="99人及以下" value="shanghai"></el-option>
      <el-option label="100-999人" value="beijing"></el-option>
      <el-option label="1000人及以上" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动对象">
    <el-select v-model="form.region" placeholder="请选择活动对象">
      <el-option label="全体师生" value="shanghai"></el-option>
      <el-option label="部门内成员" value="beijing"></el-option>
      <el-option label="全体学生" value="beijing"></el-option>
      <el-option label="全体老师" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  
  <el-form-item label="模糊搜索">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">搜索</el-button>
    <el-button>重新输入</el-button>
  </el-form-item>
</el-form>
      </div>
    </el-card>
 
      <h1>活动列表</h1>
      <el-card>
    <div style="margin-left:10%;">
    <el-row :gutter="12">
  <el-col :span="4" v-for="item in 99" :key="item">
    <el-card :body-style="{ padding: '0px' }">
      <img  height="180px" src="https://imgsa.baidu.com/forum/w%3D580/sign=554a3a167b8b4710ce2ffdc4f3cfc3b2/5f955566d016092444f3602cdd0735fae7cd3498.jpg" class="image">
      <div style="padding: 14px;">
        <span>周末文化艺术节</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <router-link to="/activityInfo">
          <el-button type="text" class="button">查看详情</el-button>
        </router-link>
        </div>
      </div>
    </el-card>
  </el-col>


  
</el-row>
</div>
  </el-card>
  </div>
 
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        currentDate: new Date()
      }
    },
    methods: {
      onSubmit() {
        
        console.log('submit!');
      }
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
  .el-col {
    margin:5px;
  }
</style>