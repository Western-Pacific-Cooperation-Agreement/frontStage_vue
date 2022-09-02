<template>
  <div>
    <UserNav></UserNav>
    <router-view/>
    <Copyright></Copyright>
  </div>
</template>

<script>
import UserNav from "@/components/UserNav/index.vue"
import Copyright from "@/components/Copyright/index.vue"
export default {
  components:{
    Copyright,
    UserNav,
  }
}
</script>

<style>

</style>
