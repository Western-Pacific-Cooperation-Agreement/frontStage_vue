<template>
  <div>
    <div class="page">
    <el-row :gutter="12">
  <el-col :span="24">
    <el-card >
      <el-button type="primary" plain @click="imagecropperShow=true" style="float:left;margin:10px 100px;" >

          <el-avatar :size=200 :src="userInfo.avatar"  @click="imagecropperShow=true"></el-avatar>

          </el-button>
          <div><span style="font-size: 50px;">UserName:{{userInfo.username}}<el-button type="success" icon="el-icon-check"   @click="Certified" circle></el-button></span></div>
          <div><span style="font-size: 50px;">UserId:{{userInfo.id}}</span></div>
          <div><span style="font-size: 20px;margin-left: 20px;">签名:{{userInfo.userAutograph}}</span>
          </div>
          <div> <el-button type="primary" plain @click="dialogVisible = true,getEditUserInfo()">编辑</el-button>
            <el-button type="danger" plain @click="logout()">退出登录</el-button>
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
      url="http://localhost:18888/person/post/uploadAvatar"
      ></my-upload>
</div>

<el-dialog
  title="编辑个人信息"
  :visible.sync="dialogVisible"
    width="30%"
  >

  <el-form ref="form" :model="editInfo" label-width="80px">

  <el-form-item label="用户名">
    {{editInfo.username}}
  </el-form-item>

  <el-form-item label="用户Id">
    {{editInfo.id}}
  </el-form-item>

  <el-form-item label="用户角色">
    <el-tag v-for="item in editInfo.roles">
    {{item.roleName}}
    </el-tag>
  </el-form-item>

  <el-form-item label="用户签名">
    <el-input v-model="editInfo.userAutograph" placeholder="写点什么东西吧" ></el-input>
  </el-form-item>

  <el-form-item label="邮箱">
    <el-input v-model="editInfo.email" placeholder="写点什么东西吧" ></el-input>
  </el-form-item>

  <el-form-item label="电话">
    <el-input v-model="editInfo.phone" placeholder="写点什么东西吧" ></el-input>
  </el-form-item>

  <el-form-item label="所在地">
    <el-input v-model="editInfo.city" placeholder="写点什么东西吧" ></el-input>
  </el-form-item>

  <el-form-item label="用户积分">
    {{editInfo.userIntegral}}
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="updateUserInfo(),dialogVisible = false">确 定</el-button>
    <el-button @click="dialogVisible = false;getUserInfo();">取 消</el-button>

  </el-form-item>
</el-form>






</el-dialog>




  </div>


</template>

<script>
import myUpload from 'vue-image-crop-upload';//引入组件
import NoMessage from '@/components/NoMessage/index.vue'
import CenterMenu from './CenterMenu'
import backImg from "@/assets/头像.jpg";
import {getUserInfo,updateUserInfo} from '@/api/person'
import { logout } from '@/api/login';
export default {
    data () {
      return {
      
        dialogFormVisible: true,
        circleUrl: backImg,
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        imagecropperShow: false,
        imagecropperKey: 0,
        userInfo:{
          username:"",
        },
        editInfo:[],
        dialogVisible: false,
        params:{
          username:"",//发给后端的携带的参数，按需求，不需要携带直接删掉
        },
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
    created(){
      this.getUserInfo();

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
        this.getUserInfo()
      },
      //上传失败回调
      cropUploadFail(status, field) {
        console.log('-------- upload fail --------');
        console.log('上传失败状态' + status);
        console.log('field: ' + field);
        this.getUserInfo()
 
      },
      openHead(){
        dialogFormVisible = true;
      },
      updateUserInfo(){
        getUserInfo().then(res=>{
          console.log("获得用户当前信息");
          console.log(res);
          this.userInfo=res.data.data;
    
        })
      },
      getUserInfo(){
        getUserInfo().then(res=>{
          console.log("获得用户当前信息");
          console.log(res);
          this.userInfo=res.data.data;
          this.params.username=res.data.data.username
        })
      },
      logout(){
        logout().then(res=>{
          this.$message({
            type:'success',
            message:res.data.msg,
          })
        });
      },
      getEditUserInfo() {
        getUserInfo().then(res=>{
          console.log("获得用户当前信息");
          console.log(res);
          this.editInfo=res.data.data;
        })
      },updateUserInfo(){
        updateUserInfo(this.editInfo).then(res=>{
          this.$message({
            type:'success',
            message:res.data.msg,
          })
          this.getUserInfo();
        })
       
      }
    
    },
    
  }
</script>

<style scoped>
.page{
  width: 80%;
  margin:0 auto;
}

</style>