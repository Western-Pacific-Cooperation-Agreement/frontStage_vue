<template>
  <div>

    <el-tabs type="border-card">
  <el-tab-pane label="通用搜索">    <el-card>
      <h1>通用搜索</h1>
      <div>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="关键词">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  
  <el-collapse v-model="activeNames" >
  <el-collapse-item title="详细搜索" name="5">
 
  <!-- <el-form-item label="活动区域">
    <el-input v-model="form.actPlace"></el-input>
  
  </el-form-item> -->
  <el-form-item label="活动时间">
    <el-col :span="10">
      <el-date-picker type="date" placeholder="开始日期" v-model="form.start" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="10">
      <el-date-picker type="date" placeholder="结束日期" v-model="form.end" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>

  <el-form-item label="活动部门">
    <el-select v-model="form.asso" placeholder="请选择活动部门" >
      <el-option :label="item.assoName"  :value="item.id"  v-for="item in actAsso"  ></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="活动性质">
    <el-select v-model="form.nature" placeholder="请选择活动性质">
      <el-option :label="item.actNatureName" :value="item.id"  v-for="item in actType"></el-option>

    </el-select>
  </el-form-item>

  <el-form-item label="活动积分">
    <el-select v-model="form.interal" placeholder="请选择积分">
      <el-option label="10" value="10"></el-option>
      <el-option label="20" value="20"></el-option>
      <el-option label="30" value="30"></el-option>
    </el-select>
  </el-form-item>


  <el-form-item label="活动人数">
    <el-select v-model="form.number" placeholder="请选择人数">
      <el-option label="99人及以下" value="0"></el-option>
      <el-option label="100-999人" value="1"></el-option>
      <el-option label="1000人及以上" value="2"></el-option>
    </el-select>
  </el-form-item>


  <el-form-item label="活动对象">
    <el-select v-model="form.object" placeholder="请选择活动对象">
      <el-option :label="item.objectName" :value="item.id" v-for="item in actObjcet"></el-option>
    </el-select>
  </el-form-item>
</el-collapse-item>
</el-collapse  >

  <el-form-item>
    <el-button type="primary" @click="onSubmit">搜索</el-button>
    <el-button @click="reset">重新输入</el-button>
  </el-form-item>
</el-form>
      </div>
    </el-card></el-tab-pane>

  <el-tab-pane label="高级检索">
    <el-card>
      <h1>高级检索</h1>
      <div style="margin:auto; width: 1000px; ">


  <div v-for="(item,key) in SeniorSearch" style="margin-top:10px;" :key="key" v-show="item.show">

  <el-input placeholder="请输入内容" v-model="item.value"  class="input-with-select" >
    <el-select v-model="item.oper" slot="prepend" placeholder="请选择" style="width:200px"  v-if="key!=0" >
      <el-option label="AND" value="1"></el-option>
      <el-option label="OR" value="2"></el-option>
      <el-option label="NOT" value="3"></el-option>
    </el-select>
    <el-select v-model="item.col" slot="prepend" placeholder="请选择" >
      <el-option label="活动名" value="1"></el-option>
      <el-option label="活动编号" value="2"></el-option>
      <el-option label="活动简介" value="3"></el-option>
      <el-option label="活动区域" value="4"></el-option>
      <el-option label="活动流程" value="5"></el-option>
      <el-option label="活动目的" value="6"></el-option>
      <el-option label="活动时长" value="7"></el-option>
    </el-select>
    <el-select v-model="item.type" slot="append" placeholder="请选择" :disabled="key==0">
      <el-option label="精确" value="1"></el-option>
      <el-option label="模糊" value="2"></el-option>
      <el-option label="匹配" value="3"></el-option>
    </el-select>
    
  </el-input>
  <el-button icon="el-icon-minus"  @click="deleteInput(key)" circle style="position:absolute;margin-left: 20px;"  v-if="key!=0" ></el-button>
  <el-button icon="el-icon-plus" @click="addInput(key)"  circle  style="position:absolute;margin-left: 70px;" v-if="key+1==addIndex" ></el-button>
</div>  
<div style="padding:20px">
    <el-button type="primary" @click="onSubmitSenior()">立即检索</el-button>
    <el-button>取消</el-button>
  </div>
</div>

    </el-card></el-tab-pane>
    
  <el-tab-pane label="专业检索">
    <el-card>
      <h1>专业检索</h1>
    
    </el-card>
    <el-row :gutter="12">
  <el-col :span="15">
    <el-card shadow="always">
      <el-form ref="form" :model="form" label-width="150px">
<el-form-item label="检索表达式">
  <el-input style="font-size:30px" type="textarea" v-model="RetrieveExpression"></el-input>
</el-form-item>
<el-form-item>
  <el-button type="primary" @click="onSubmitSimpleSql(RetrieveExpression)">立即检索</el-button>
  <el-button>取消</el-button>
</el-form-item>
</el-form>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>专业检索使用方法：</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>

  <el-collapse v-model="activeNames" >
  <el-collapse-item title="查询方式：" name="0">
  <div style="margin-left: 100px;">
  <div style="text-align:left;font-size:large">
      <div>精确查询 <font style="color:red">=</font></div>
      <div>模糊查询 <font style="color:red">%</font></div>
      <div>模糊匹配 <font style="color:red">#</font></div>
    </div>
  </div>
  </el-collapse-item>
  <el-collapse-item title="可检索字段：" name="1">
  <div style="margin-left: 100px;">
    <div style="text-align:left;font-size:large">
      <div>活动名 <font style="color:red">ACT_NAME</font></div>
      <div>活动编号 <font style="color:red">ID</font></div>
      <div>活动活动区域 <font style="color:red">ACT_PLACE</font></div>
      <div>活动时长 <font style="color:red">ACT_DURATION</font></div>
      <div>活动简介 <font style="color:red">ACT_MESSAGE</font></div>
      <div>活动目的 <font style="color:red">ACT_AIM</font></div>
      <div>活动过程 <font style="color:red">ACT_PROCESS</font></div>
    </div>
  </div>
  </el-collapse-item>
  <el-collapse-item title="示例" name="2">
  <div>
    <div>1）<font style="color:red">ACT_NAME = '周末文化集市' and ACT_PLACE ='艺术礼堂前' or ACT_NAME = '蓝桥杯'</font> </div>
    可以检索到活动名“周末文化集市”并且活动地点是“艺术礼堂前” 或者 活动名为“蓝桥杯”的活动
    <div>2）<font style="color:red">ACT_NAME % '周末' and ACT_PLACE % '艺术' or ACT_NAME = '蓝桥杯' </font></div>
    可以检索到活动名包括“周末”并且关键词包括“艺术”;
    <div>3）<font style="color:red">ACT_NAME # '周集' and ACT_PLACE # '艺前' or ACT_NAME # '蓝杯'</font> </div>
    可以检索到活动名包括“**周***集**”并且活动地点包括“**艺**前**” 或者 活动名包括“**蓝**杯**”的活动;
    <div>4）<font style="color:red">ACT_NAME = '周末文化集市' and ACT_PLACE % '艺术' or ACT_NAME # '蓝杯'</font> </div>
    可以检索到活动名“周末文化集市”并且活动地点包括“艺术” 或者 活动名包括“**蓝**杯**”的活动;
  </div>
  </el-collapse-item>
</el-collapse>
  

</el-card>
  </el-col>
</el-row>
  
  </el-tab-pane>
</el-tabs>

<h1>活动列表</h1>

<el-tabs type="border-card">
  <el-tab-pane label="方块信息">  <el-card>
    <div style="margin-left:10%;">
    <el-row :gutter="12">
  <el-col :span="4" v-for="item in actList" :key="item.id">


    <el-card :body-style="{ padding: '0px' }">
      <img  height="180px" :src="item.actUrl" class="image">
      <div style="padding: 14px;">
        <span>{{item.actName}}</span>
        <div class="bottom clearfix">
          <time class="time">{{item.actStartDate}}</time>
          <router-link :to="'/activityInfo/?id='+item.id">
          <el-button type="text" class="button" >查看详情</el-button>
        </router-link>
        </div>
      </div>
    </el-card>



  </el-col>
</el-row>
</div>
    </el-card></el-tab-pane>
    <el-tab-pane label="长条信息">
    <el-card>
    <div style="margin-left:10%;">
    <el-row :gutter="12">
  <el-col :span="21" v-for="item in actList" :key="item.id">


    <el-card :body-style="{ padding: '0px' }">
      <div style="float:left;width: 210px;">
      <img  height="180px"  :src="item.actUrl" class="image" >
     </div>
      <div style="padding: 14px;">
    
        <div class="bottom clearfix">
          <div>
            <span style="float:left">活动名 <font style="color:red">ACT_NAME</font>：</span>
          <span>{{item.actName}}</span>
          </div>
          <div>
    
            <span style="float:left">活动编号 <font style="color:red">ID</font>：</span>
            <span>{{item.id}}</span>
          </div>
          <div>
            <span style="float:left">活动活动区域<font style="color:red">ACT_PLACE：</font></span>
            <span>{{item.actPlace}}</span>
          </div>
          <div>
            <span style="float:left">活动时长<font style="color:red">ACT_DURATION：</font></span>
            <span>{{item.actDuration}}</span>
          </div>
          <div>
            <span style="float:left">活动简介<font style="color:red">ACT_MESSAGE：</font></span>
            <span>{{item.actMessage}}</span>
          </div>
          <div>
            <span style="float:left">活动目的<font style="color:red">ACT_AIM：</font></span>
            <span>{{item.actAim}}</span>
          </div>
          <div>
            <span style="float:left">活动过程<font style="color:red">ACT_PROCESS：</font></span>
            <span>{{item.actProcess}}</span>
          </div>
       
          <div>
            <span style="float:left">活动开始</span>
          <span>{{item.actStartDate}}</span>
        </div>
          <router-link :to="'/activityInfo/?id='+item.id">
          <el-button type="text" class="button" >查看详情</el-button>
          </router-link>

        </div>
      </div>


    </el-card>



  </el-col>
</el-row>
</div>
</el-card>
    </el-tab-pane>
</el-tabs>
    
  </div>
 
</template>

<script>
   import {getActObject,getActAsso,getActUser,getActType,getDefultList,getSearchList,getSearchListBySQL,getSearchListBySimpleSQL} from '@/api/act'
  
export default {
    data() {
      return {
        activeNames: ['1'],
        addIndex:3,
        SeniorSearch:[{
          show:true,
          oper:"1",
          col:"1",
          value:"",
          type:"2",
        },
        {
          show:true,
          oper:"1",
          col:"2",
          value:"",
          type:"2",
        },
        {
          show:true,
          oper:"1",
          col:"3",
          value:"",
          type:"2",
        },
        ],
        RetrieveExpression:"",
        input3:"",
        select: '',
        form: {
          name: "",
          place: "",
          start: "",
          end: "",
          asso:"",
          nature:"",
          interal:"",
          object: "",
          number:"",
        },
        actList:[],
        currentDate: new Date()
        , table:[], 
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
    methods: {
      deleteInput(key){
        console.log(key)
        this.SeniorSearch.splice(key, 1);
        console.log(this.SeniorSearch);
        this.addIndex--;
      },
      addInput(key){
        console.log(key)
        var newDate=new Object();
        newDate.id=this.addIndex+1;
        newDate.show=true,
        newDate.oper="1",
        newDate.col="3",
        newDate.value="",
        newDate.type="2",
        this.SeniorSearch.push(newDate)
        this.addIndex++;
        console.log(this.addIndex)
        console.log(this.SeniorSearch);
      },
      reset(){
        this.form= {
          name: '',
          place: '',
          start: '',
          end: '',
          asso:'',
          nature:'',
          interal:'',
          object: '',
          number:'',
        }
      },
      //获得搜索运算符
      getSearchOper(id,type){
        switch(id){
          case  "1" : 
            return "AND";//活动名
          case  "2" :
            return "OR";//活动编号
          case  "3" :
            return "AND ";//活动简介
        }
      },
      //获得搜索列
      getSearchCol(id){
        switch(id){
          case  "1" : return "act_name";//活动名
          case  1 : return "act_name";//活动名
          case  "2" : return "id";//活动编号
          case  "3" : return "act_message";//活动简介
          case  "4" : return "act_place";//活动区域
          case  "5" : return "act_process";//活动流程
          case  "6" : return "act_aim";//活动目的
          case  "7" : return "act_duration";//活动时长
        }
      },
      onSubmitSenior(){
        var RetrieveExpression=""+this.getSearchCol(this.SeniorSearch[0].col)+" % \'"+this.SeniorSearch[0].value+"\'";
        var len = this.SeniorSearch.length;
        for(let i = 1 ; i<len;i++){
        
          var value=this.SeniorSearch[i].value;
          if(value!=""){
          var oper=this.SeniorSearch[i].oper;
          var col=this.SeniorSearch[i].col;
          var type=this.SeniorSearch[i].type;
          switch(type){
           case "1": RetrieveExpression+=this.getSearchOper(oper,type)+" "
                              +this.getSearchCol(col)+(oper=="3"?" !":" ")
                              +"= \'"+value+"\'"; break;
           case "2": RetrieveExpression+=this.getSearchOper(oper,type)+" "
                              +this.getSearchCol(col)+(oper=="3"?" not ":" ")
                              +" % \'"+value+"\'";break;
           case "3": RetrieveExpression+=this.getSearchOper(oper,type)+" "
                              +this.getSearchCol(col)+(oper=="3"?" not ":" ")
                              +" # \'"+value+"\'";   break;            
          }
          }
          
        }
        console.log(RetrieveExpression);


        this.onSubmitSimpleSql(RetrieveExpression)
      },
      onSubmitSql(RetrieveExpression){
        if(RetrieveExpression==""){
          RetrieveExpression=true;
        }
        console.log("当前检索为:select * from core_act where "+RetrieveExpression);
        getSearchListBySQL(RetrieveExpression).then(res=>{
          console.log("通过检索查询活动")
          this.actList=res.data.data;
          })
      },
      onSubmitSimpleSql(RetrieveExpression){
        if(RetrieveExpression==""){
          RetrieveExpression=true;
        }
        console.log("当前检索为:select * from core_act where "+RetrieveExpression);
        getSearchListBySimpleSQL(RetrieveExpression).then(res=>{
          console.log("通过检索查询活动")
          this.actList=res.data.data;
          })
      },
      onSubmit() {
        this.getSearchList();
        console.log('submit!');
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
          },
          getDefultList(){
            getDefultList().then(res=>{
              console.log("获得活动信息"); 
             console.log(res);
              this.actList=res.data.data;

            })
          },
          getSearchList(){
            getSearchList(this.form).then(res=>{
              this.actList=res.data.data
            })
          },
          
    },
    created(){
      this.getActAsso()
      this.getActObject()
      this.getActType()
      this.getDefultList()
  }
}
</script>

<style scoped>

.el-select /deep/ .el-input {

    width: 230px;
  }
  .input-with-select /deep/ .el-input-group__prepend {

    background-color: #fff;
  }
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

  .bottom.clearfix div {
       /* 2.超出的部分隐藏 */
       overflow: hidden;
/* 3.文字用省略号替代超出的部分 */
text-overflow: ellipsis;
    padding: 10px;
    white-space: nowrap; 
  }

</style>