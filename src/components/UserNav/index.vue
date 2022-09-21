<template>
  <div>
  
<el-card>       
               <span id="bigTitle">大学生活动管理平台</span>
               <ul>
                <li><el-link  :underline="false" href="/">
                    首页</el-link>
                </li>
                  <li><el-link  :underline="false" href="/activityList">
                    活动</el-link>
                </li>
                  <li><el-link  :underline="false">
                    网站公告</el-link>
                </li>
                  <li><el-link  :underline="false">
                    资讯</el-link>
                </li>
                <li><el-link  :underline="false">
                    论坛</el-link>
                </li>
                <li><el-link  :underline="false">
                    留言板</el-link>
                </li>
                <li><el-link  :underline="false" href="/personalCenterList">
                    个人中心</el-link>
                </li>
                <li><el-link  :underline="false">
                    后台管理</el-link>
                </li>
        </ul>
</el-card>
                  <div style="height:20px;">
                 <!--空白-->
                  </div>
                  
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.el-card{
    background-color: rgb(30, 30, 30);
    text-align: right;
}
ul li{
    list-style: none;
    display: inline-block;
    padding:0 30px 0 0px;
    line-height: 20px;
    color:white;
    white-space: nowrap;
}
.el-link.el-link--default{
        color:white;
}
div /deep/ .el-card__body{
    padding: 5px;

}
#bigTitle {
 float:left;
 font-size:30px;
 color:white;
 padding:10px 200px
}
</style>