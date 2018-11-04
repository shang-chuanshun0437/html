<template>
 <!-- 头部区域 -->
 <div class="header">
    <el-row>

      <el-col :span="24" class="weiyi-header">
        <div>
          <img class = "weiyi-logo" src="@/assets/logo.png">
        </div>

        <div>
          <el-menu class = "weiyi-top-nav" 
          mode="horizontal" :default-active="$route.path" router active-text-color="#FFFFFF" text-color="#000000" >
            <el-menu-item index = "/summary" style = "font-size: 16px;">首页</el-menu-item>
            <el-menu-item index="/user/device/manage" style = "font-size: 16px;">设备管理</el-menu-item>
            <el-menu-item index="/device/user" style = "font-size: 16px;">用户管理</el-menu-item>
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
  </div>
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
  .header{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    margin: 0;
    height: 60px;
    background: #304156;
    text-align: center;
    z-index: 1000;
    color: rgb(255, 255, 255);
  }
  .el-menu{
    border-right-width: 0;
  }
  .el-menu-item:hover {
   background-color: #ffffff !important;
  }
  .el-menu-item.is-active {
   background-color: rgb(43, 127, 247) !important;
  }
</style>
