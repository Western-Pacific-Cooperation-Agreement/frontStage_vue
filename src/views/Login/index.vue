<!--登入界面-->
<template>
    <div class="bodyClass">
  
      <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <h2>欢迎来到我的管理系统</h2>
        <el-image :src="require('@/assets/logo.png')" style="width:200px"></el-image>
      </el-col>
      <el-col :span="1">
        <el-divider direction="vertical"></el-divider>
      </el-col>
       <el-col :xl="6" :lg="7">
           <el-form label-position="right" :rules="rules" label-width="80px" :model="loginForm" ref="loginForm">
              <el-form-item label="用户名" prop="username" style="width: 380px;">
                 <el-input v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password" style="width: 380px;">
                 <el-input type="password" v-model="loginForm.password"></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="code" style="width: 380px;">
                 <el-input v-model="loginForm.code" style="width: 172px; float: left;" maxlength="6"></el-input>
                 <el-image class="captchaImg" :src="captchaImg" @click="getCaptcha"></el-image>
              </el-form-item>
              <el-form-item>
                 <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                 <el-button  type="reset" @click="resetForm('loginForm')">重置密码</el-button>
              </el-form-item>
           </el-form>
        </el-col>
    </el-row>
    </div>
  
  </template>
  
  
  
  <script >
  import qs from 'qs'
     export default {
        name: "Login",
        data() {
           return {
              loginForm: {
                 username: 'admin',
                 password: '111111',
                 code: '111111',
                 token: '',
              },
              rules: {
                 username: [
                    {required: true, message: '请输入用户名', trigger: 'blur'}
                 ],
                 password: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                 ],
                 code: [
                    {required: true, message: '请输入验证码', trigger: 'blur'},
                    {min: 6, max: 6, message: '验证码为6个字符', trigger: 'blur'}
                 ],
              },
              captchaImg: ''
           }
        },
        methods: {
           submitForm(formName) {
              this.$refs[formName].validate((valid) => {
                 if (valid) {
                    this.$axios.post('/login?' + qs.stringify(this.loginForm)).then(res => {
                       console.log(res.data)
                       const jwt = res.headers['authorization']
                       // 将jwt存储到应用store中
                       this.$store.commit("SET_TOKEN", jwt)
                       this.$router.push("/index")
                    }).catch(error => {
                       this.getCaptcha();
                       console.log('error submit!!');
                    })
                 } else {
                    this.getCaptcha();
                    console.log('error submit!!');
                    return false;
                 }
              });
           },
           resetForm(formName) {
              this.$refs[formName].resetFields();
           },
           getPass() {
              this.$message("");
           },
           getCaptcha() {
              this.$axios.get('/captcha').then(res => {
                console.log(res)
                 this.loginForm.token = res.data.data.key
                 this.captchaImg = res.data.data.captchaImg
              })
           }
        },
        created() {
           this.getCaptcha()
        }
     }
  </script>
  
  
  
  
  <style  scoped>
      .el-row{
        background-color:#fafafa;
        height:100%;
  
        align-items: center;
        text-align:center;
      }
      .el-divider{
        height:300px;
      }
      .el-form-item{
        width:380px;
      }
      .bodyClass{
        white-space:nowrap;
        height:100%;
      }
      .codeClass{
        float:left;
        margin-left:8px;
        border-radius: 5px;
      }
  
  </style>