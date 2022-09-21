 <template>
  <div>

    <el-form :inline="true">

    <el-form-item>
				<el-input
						v-model="searchForm.name"
						placeholder="名称"
						clearable
				>
				</el-input>
        
			</el-form-item>
      <el-form-item>
        <el-date-picker
      v-model="searchForm.start"
      type="date"
      placeholder="选择搜索起始日期">
    </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker
      v-model="searchForm.end"
      type="date"
      placeholder="选择搜索终止日期">
    </el-date-picker>
      </el-form-item>
 
			<el-form-item>
				<el-button @click="getMyJoinAct()">搜索</el-button>
			</el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="coreAct.actName"
        label="活动名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="coreAct.id"
        label="活动编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="userActStatu"
        label="报名审核状态"
        width="120">
        <template slot-scope="scope">

          <el-tag v-if="scope.row.userActStatu===0">
          未审核报名
        </el-tag>
        <el-tag  type="success"  v-if="scope.row.userActStatu===1">
          报名通过
        </el-tag>
        <el-tag  type="danger"  v-if="scope.row.userActStatu===2">
          报名未通过
        </el-tag>
        <el-tag  type="danger"  v-if="scope.row.userActStatu===3">
          存档
        </el-tag>

      </template>
      </el-table-column>
      <el-table-column
        prop="userActReview"
        label="报名审核回复"
        width="120">
      </el-table-column>
      <el-table-column
        prop="userActReviewDate"
        label="报名审核回复日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="coreAct.actStartDate"
        label="活动开始时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="coreAct.actReviewerStaus"
        label="活动状态"
        width="120">
        <template slot-scope="scope">
      
        <el-tag  type="danger"  v-if="scope.row.coreAct.actReviewerStaus===1">
          报名中
        </el-tag>
        <el-tag  type="warning"  v-if="scope.row.coreAct.actReviewerStaus===2">
          报名截止报名
        </el-tag>
        <el-tag  type="success"  v-if="scope.row.coreAct.actReviewerStaus===3">
          活动结束
        </el-tag>
        
      </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">

        <template slot-scope="scope">

          <el-button @click="handleClick(scope.row)" type="text" size="small">查看活动详情</el-button>
          <el-button type="text" size="small"  @click="printExpressSheetButton(scope.row.coreAct.id)" v-if="(scope.row.userActStatu===3)&&(scope.row.coreAct.actReviewerStaus===3)">打印活动证明</el-button>
          <el-button type="text" size="small" @click="open(scope.row.coreAct.id)"  v-if="(scope.row.userActStatu===0)||(scope.row.coreAct.actReviewerStaus===1)">退出报名</el-button>
       
        </template>

      </el-table-column>
    </el-table>

  </div>
  </template>
  
<script>
import { getMyJoinAct,cancelSignUpAct } from '@/api/person'

export default {
  methods: {
    handleClick(row) {
      this.$router.push({path: '/ActivityInfo',query: {'id':row.coreAct.id}});
    },
    getMyJoinAct() {
      getMyJoinAct(this.searchForm).then(res => {
        console.log("获得我参加的活动");
        console.log(res);
        this.tableData = res.data.data;
      })

    },
    cancelSignUpAct(id){
      cancelSignUpAct(id).then(res=>{
          this.$message({
            type:'success',
            message:res.data.msg,
          })
      this.getMyJoinAct();
      })
    }, 
    open(id) {
        this.$confirm('此操作将退出报名, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.cancelSignUpAct(id);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出报名'
          });          
        });
      }
      ,
       //打印快递面单
    printExpressSheetButton(id) {
      console.log();//this.deliveryIds
      //请求生成打印京东面单pdf，返回pdf文件名
      this.$axios.get("/downloadResource/getProveExcel?actId="+id).then((res) => {
        console.log("打印面单pdf")
        console.log(res);
          // let strs=res.msg.split(":");
          // this.$message({
          //   message: strs[1],
          //   type: strs[0]=="success"?"success":"warning"
          // })
          //res.data就是文件名
          console.log("文件名");
          console.log(res.data.data);
         this.getExpressSheetResource(res.data.data);
  
      });
    },
	// ：获取打印面单数据
    getExpressSheetResource(fileName) {
      //window.open('https://csdn.net');
      window.open("http://localhost:18888/product/result/"+fileName);
      console.log(fileName)
      // this.$axios.get("/downloadResource/"+fileName).then((res) => {
      // //res返回的就是文件流数据，调用的接口就是"获取资源"接口
      //   console.log("获取打印面单数据");
      //   //下面几步是关键
      //     const binaryData = [];
      //     binaryData.push(res);
      //     //获取blob链接，此处是关键
      //     this.pdfUrl = window.URL.createObjectURL(new Blob(binaryData, { type: 'application/pdf' }));
      //     window.open(this.pdfUrl);//浏览器会打开新窗口展示pdf文件
      // });
    }

  },
  created() {
    this.getMyJoinAct();
  },

  data() {
    return {
      actUserPhone: '',
      searchForm:{
        name:"",
        start:"",
        end:"",
        pdfUrl:"",
      },
      tableData: []
    }
  }
}
</script>

<style scoped>

</style> 