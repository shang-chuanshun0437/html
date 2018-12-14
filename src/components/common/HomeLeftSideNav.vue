<template>
 <!-- 首页左侧导航栏 -->
  <div class="wrapper">
    <el-row class="leftNav">
      <el-col>
        <el-menu :default-active="$route.path" router class="el-menu-demo">
          <el-menu-item index = "/summary" style = "font-size: 16px;">
            <i class="el-icon-menu"></i>
            <span slot="title">概况</span>
          </el-menu-item>
          <el-menu-item index = "/instructions" style = "font-size: 16px;">
            <i class="el-icon-ali-shiyongshuoming"></i>
            <span slot="title">使用说明</span>
          </el-menu-item>
          <el-menu-item index = "/help" style = "font-size: 16px;">
            <i class="el-icon-ali-jishuzhichizhichizhinengkefuzhinengfuwuzhinengzhichi"></i>
            <span slot="title">技术支持</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <!--右侧内容区-->
    <!--右侧内容区-->
    <section class="content-container">
      <div>
        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeLeftSideNav',
  data () {
    return {
      username: 'Weflcome'
    }
  }
}
</script>

<style scoped>
  .wrapper{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .leftNav{
    position: absolute;
    top: 50px;
    width: 135px;
    height: 100%;
  }
  /* 右侧内容区域 */
  .content-container {
    position: absolute;
    background-color: rgb(240, 243, 245);
    left: 135px;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .el-menu-item.is-active {
   background-color: rgb(240, 243, 245) !important;
  }

</style>
