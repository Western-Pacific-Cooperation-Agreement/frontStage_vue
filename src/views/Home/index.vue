<!--首页-->
<template>
    <div>
  <el-card>
              <span style="font-size:30px;float:left;padding: 0 300px 0 ;font-weight: 700;">首页Page</span>
  </el-card>
 
  <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .el-card{
  
      background-color: azure;
      white-space: nowrap;
  }
  
  div /deep/ .el-card__body{
      padding: 5px;
  
  }
  
  
  </style>
  <script>
  export default {
  
  }
  </script>