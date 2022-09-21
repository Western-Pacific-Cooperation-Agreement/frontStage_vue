<template>
  <div class="page_nav">
    <el-row class="tac">
  <el-col :span="12">
    <h5>个人中心</h5>
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
     
  
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>我参加的活动</span>
        </template>

        <router-link to="/personalCenterList">
        <el-menu-item-group>
          <el-menu-item index="1-1">活动列表</el-menu-item>
        </el-menu-item-group>
      </router-link>

      </el-submenu>

<!-- 
      <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-document"></i>
          <span>我发起的活动</span>
        </template>


        <router-link to="/apply">
   
        <el-menu-item-group>
          <el-menu-item index="2-1">活动列表</el-menu-item>
        </el-menu-item-group>

      </router-link>
      </el-submenu> -->

      <el-submenu index="3">
        <template slot="title">
            <i class="el-icon-menu"></i>
          <span>我收藏的活动</span>
        </template>

        <router-link to="/collection">
    
        <el-menu-item-group>
          <el-menu-item index="3-1">活动列表</el-menu-item>
        </el-menu-item-group>
      </router-link>

      </el-submenu>


      <el-submenu index="4">
        <template slot="title">
            <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>

        <router-link to="/setting">
        <el-menu-item-group>
          <el-menu-item index="4-1">设置列表</el-menu-item>
        </el-menu-item-group>

        </router-link>

      </el-submenu>

      
 

    </el-menu>
  </el-col>
</el-row>
  </div>
</template>

<script>
    import NoMessage from '@/components/NoMessage/index.vue'
export default {
    data(){
        return{

        }
    }    
    ,
    components:{
        NoMessage
    },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);

        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
    .page_nav{
        width: 100%;
    }
.tac{
    width: 100%;
    min-height: 800px;

}
.el-submenu__title{
    padding-right:120px;
}
.el-col.el-col-12{
    width: 100%;
 
}
/*这里是取消分割线 */
.el-menu{
    border: none;
}
a{
  text-decoration-line: none; 
}
</style>