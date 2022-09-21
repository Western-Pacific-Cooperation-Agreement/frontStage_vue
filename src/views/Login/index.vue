<template>
    <div>
		
    <HelloUser></HelloUser>

    <div class="page">
	<el-row type="flex" class="row-bg" justify="center">
        <el-col >
            <el-card style="width: 500px;height: 600px;" id="image">
            <el-image
   style="width: 100%; height: 100%"
   :src="require('@/assets/images/login.jpg')"
   fit="fill"
   class="tempimg"></el-image>
</el-card>
        </el-col>
       
		<el-col >
            <el-card style="width:430px;height:330px">
			<el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px">
				<el-form-item label="用户名" prop="username" style="width: 380px;">
					<el-input v-model="loginForm.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password"  style="width: 380px;">
					<el-input v-model="loginForm.password" type="password"></el-input>
				</el-form-item>
				<el-form-item label="验证码" prop="code"  style="width: 380px;">
					<el-input v-model="loginForm.code"  style="width: 172px; float: left" maxlength="8"></el-input>
					<el-image :src="captchaImg" class="captchaImg" @click="getCaptcha"></el-image>
				</el-form-item>

				<el-form-item  style="width: 380px;">
					<el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
					<el-button @click="resetForm('loginForm')">取消</el-button>
				</el-form-item>
                <el-form-item label="创建账号" style="width: 380px;">
					<el-button @click="handleOpen()">注册账号</el-button>
				</el-form-item>
			</el-form>
        </el-card>

		</el-col>

	</el-row>

	</div>
	<!--新增对话框-->
    <el-dialog
				title="创建新的用户"
				:visible.sync="dialogVisible"
				width="700px"
				:before-close="handleClose">

			<el-form ref="editForm" label-width="100px" class="demo-editForm">

				<el-form-item label="用户名" prop="name" label-width="100px">
					<el-input v-model="editForm.name" autocomplete="off"></el-input>
				</el-form-item>

				<el-form-item label="密码" prop="code" label-width="100px">
					<el-input v-model="editForm.code" autocomplete="off" type="password"></el-input>
				</el-form-item>

				<el-form-item label="重复密码" prop="remark" label-width="100px">
					<el-input v-model="editForm.remark" autocomplete="off" type="password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="">立即创建</el-button>
					<el-button @click="">重置</el-button>
				</el-form-item>
			</el-form>

		</el-dialog>
</div>
</template>

<script>
	//引入Api
	import{login,getCaptcha} from "@/api/login.js"
	import qs from 'qs'
    import HelloUser from '@/components/HelloUser/index.vue'
	export default {
		name: "Login",
		data() {
			return {
                editForm: {
					name:'' ,
					code: '',
					statu: ''
				},
                dialogVisible: false,
				loginForm: {
					username: 'admin',
					password: '111111',
					code: '111111',
					redisKey: ''
				},
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
					code: [
						{ required: true, message: '请输入验证码', trigger: 'blur' },
				
					],
	
	
				},
				captchaImg: null
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						//this.$axios.post('/login?'+qs.stringify(this.loginForm)).
						login(qs.stringify(this.loginForm)).then(res => {
							console.log("登入成功后的相应")
							console.log(res)

							const jwt = res.headers['authorization']

							this.$store.commit('SET_TOKEN', jwt)
							this.$router.push("/")

						})

					} else {
						console.log('error submit!!');
						return false;
					}
				});
				this.getCaptcha();
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			getCaptcha() {
				
				getCaptcha().then(res => {

					console.log("获取了验证码")
					console.log(res)
					

					//将验证码的key给到loginform中
					this.loginForm.redisKey = res.data.data.redisKey

					this.captchaImg = res.data.data.captchaImg

					this.loginForm.code = '111111'

				})
			},handleClose(){
                this.dialogVisible= false

            },handleOpen(){
                
                this.dialogVisible=true
            }
		},
		created() {
			this.getCaptcha()
		} ,components:{
            HelloUser
        }
	}
</script>

<style scoped>
 
    .page{
        display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
        height: 750px;
    }
   
	.el-row {
		background-color: #fafafa;
		height: 420px;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
        background: url(@/assets/loginBackground.jpg); 

        width: 800px;
        -webkit-box-shadow:#cccc 0px 0px 50px;

	}

	.el-divider {
		height: 200px;
	}

	.captchaImg {
		float: left;
		margin-left: 8px;
		border-radius: 4px;
	}
    #image /deep/.el-card__body, .el-main{
        padding:0px;margin:0px;
     
    }
    #image{
        padding:0px;margin:0px;
        border: 0px;
    }
</style>