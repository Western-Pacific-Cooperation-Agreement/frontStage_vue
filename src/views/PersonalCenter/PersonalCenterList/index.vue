<template>
  <div>
    <div class="page">
    <el-row :gutter="12">
  <el-col :span="24">
    <el-card >
          <el-avatar :size=200 :src="circleUrl" style="float:left;margin:10px 100px;"></el-avatar>
          <div><span style="font-size: 50px;">UserName:GitXulti<el-button type="success" icon="el-icon-check"   @click="Certified" circle></el-button></span></div>
          <div><span style="font-size: 50px;">UserId:100001</span></div>
          <div><span style="font-size: 20px;">签名:好想做一个基于NLP和过滤协同的大学生活动管理与推荐的前后端分离系统呀</span><el-button type="primary" icon="el-icon-edit"></el-button></div>
          <div> <el-button type="primary" plain>编辑</el-button>
            <el-button type="danger" plain>退出登录</el-button>
          </div>
    </el-card>
  </el-col>
  <el-col :span="4">
    <el-card >
      <!--菜单-->
      <CenterMenu></CenterMenu>

    </el-card>
  </el-col>
  <el-col :span="20">
    <el-card >
      <router-view></router-view>
    </el-card>
    <no-message></no-message>
  </el-col>
  </el-row>
</div>



<!-- 头像Form -->
  <div>
      <my-upload
      :params="params"         
      :modelValue.sync="imagecropperShow"
      :key="imagecropperKey"              
      :width="300" 
      :height="300"
      lang-type="zh" 
      img-format="png"
      :noRotate='false' 
      @crop-success="cropSuccess()" 
      @crop-upload-success="cropUploadSuccess()"
      @crop-upload-fail="cropUploadFail()"
      url="/api/uploadAvatar"
      ></my-upload>
</div>





  </div>


</template>

<script>


  import myUpload from 'vue-image-crop-upload';//引入组件

import NoMessage from '@/components/NoMessage/index.vue'
import CenterMenu from './CenterMenu'
import backImg from "@/assets/头像.jpg";
export default {
    data () {
      return {
        dialogFormVisible: true,
        circleUrl: backImg,
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        imagecropperShow: true,
        imagecropperKey: 0,
        userInfo:[],
        userJoinAct:[],
        userApplyAct:[],
        userCollectAct:[],
      }
    },
    components:{
      NoMessage,
      CenterMenu,
      'my-upload': myUpload
    },
    methods:{
      Certified(){
        this.$message({
          message: '恭喜你成功认证',
          type: 'success'
        });

      },
      cropSuccess(imgDataUrl, field) {
        console.log('-------- crop success --------');
        console.log(imgDataUrl);
        this.avatar=imgDataUrl;
        console.log(field);
      },
      //上传成功回调
      cropUploadSuccess(res, originPicName) {//res是后端返回的结果，originPicName是后端接收到图片的名字
        console.log('-------- upload success --------');
        console.log(res);
        console.log(originPicName);
      },
      //上传失败回调
      cropUploadFail(status, field) {
        console.log('-------- upload fail --------');
        console.log('上传失败状态' + status);
        console.log('field: ' + field);
 
      },
      openHead(){
        dialogFormVisible = true;
      }
    
    }
  }
</script>

<style scoped>
.page{
  width: 80%;
 
  margin:0 auto;
}

</style>