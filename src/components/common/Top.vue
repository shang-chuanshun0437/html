<template>
 <!-- 头部区域 -->
 <el-row>

   <el-col :span="24" class="weiyi-header">
    <div>
      <img class = "weiyi-logo" src="@/assets/logo.png">
    </div>

    <div>
      <el-menu class = "weiyi-top-nav" 
      mode="horizontal" :default-active="$route.path" router active-text-color="#FFFFFF" text-color="#000000" >
        <el-menu-item index = "/summary" style = "font-size: 16px;">首页</el-menu-item>
        <el-menu-item style = "font-size: 16px;" index="2">订单列表</el-menu-item>
        <el-menu-item style = "font-size: 16px;" index="3">用户</el-menu-item>
        <el-menu-item style = "font-size: 16px;" index="4">统计</el-menu-item>
      </el-menu>
    </div>

    <div class = "weiyi-top-dropdown">
        <el-dropdown>
          <span style = "color:#ffffff;font-size: 15px;" class="el-dropdown-link">下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>基本资料</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
     </div>

   </el-col>

 </el-row>
  
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      username: 'Weflcome'
    }
  }
}
</script>

<style scoped>
  .el-menu-item:hover {
   background-color: #ffffff !important;
  }
  .el-menu-item.is-active {
   background-color: rgb(43, 127, 247) !important;
  }
</style>
