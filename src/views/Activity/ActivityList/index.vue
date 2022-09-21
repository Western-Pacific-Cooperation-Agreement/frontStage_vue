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
  <el-form-item label="活动区域">
    <el-input v-model="form.place"></el-input>
  
  </el-form-item>
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
      <el-form ref="form" :model="form" label-width="180px">

  <el-form-item label="检索表达式">
    <el-input type="textarea" v-model="RetrieveExpression"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmitSql(RetrieveExpression)">立即检索</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </el-card></el-tab-pane>
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
          <span>{{item.actName}}</span>
          </div>
          <div>
            <span style="float:left">活动编号：</span>
            <span>{{item.id}}</span>
          </div>
          <div>
            <span style="float:left">活动活动区域：</span>
            <span>{{item.actPlace}}</span>
          </div>
          <div>
            <span style="float:left">活动时长：</span>
            <span>{{item.actDuration}}</span>
          </div>
          <div>
            <span style="float:left">活动简介：</span>
            <span>{{item.actMessage}}</span>
          </div>
          <div>
            <span style="float:left">活动目的：</span>
            <span>{{item.actAim}}</span>
          </div>
          <div>
            <span style="float:left">活动过程：</span>
            <span>{{item.actProcess}}</span>
          </div>
       
          <div>
            <span style="float:left">活动开始：</span>
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
   import {getActObject,getActAsso,getActUser,getActType,getDefultList,getSearchList,getSearchListBySQL} from '@/api/act'
  
export default {
    data() {
      return {
        addIndex:3,
        SeniorSearch:[{
          show:true,
          oper:"1",
          col:"1",
          value:"",
          type:"1",
        },
        {
          show:true,
          oper:"1",
          col:"2",
          value:"",
          type:"1",
        },
        {
          show:true,
          oper:"1",
          col:"3",
          value:"",
          type:"1",
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
        newDate.type="1",
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
      getSearchOper(id){
        switch(id){
          case  "1" : return "AND";//活动名
          case  1 : return "AND";//活动名
          case  "2" : return "OR";//活动编号
          case  2 : return "OR";//活动编号
          case  3 : return "AND NOT";//活动简介
          case  "3" : return "AND NOT";//活动简介

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
        var RetrieveExpression=""+this.getSearchCol(this.SeniorSearch[0].col)+" like \'%"+this.SeniorSearch[0].value+"%\'";
        var len = this.SeniorSearch.length;
        for(let i = 1 ; i<len;i++){
          var value=this.SeniorSearch[i].value;
          if(value!=""){
          var oper=this.SeniorSearch[i].oper;
          var col=this.SeniorSearch[i].col;
          var type=this.SeniorSearch[i].type;
          RetrieveExpression+=this.getSearchOper(oper)+" "
                              +this.getSearchCol(col)
                              +" like \'%"+value+"%\'";
                            }
        }
        console.log(RetrieveExpression);
        this.onSubmitSql(RetrieveExpression)
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