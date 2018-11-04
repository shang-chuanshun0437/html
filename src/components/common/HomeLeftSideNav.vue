<template>
 <!-- 首页左侧导航栏 -->
 <el-row>

   <el-col :span="24" class="middle">

    <div>
      <el-menu :default-active="$route.path" router class="el-menu-demo">
        <el-menu-item index = "/summary" style = "font-size: 16px;">
          <i class="el-icon-menu"></i>
          <span slot="title">概况</span>
        </el-menu-item>
        <el-menu-item index = "/instructions" style = "font-size: 16px;">
          <i class="el-icon-ali-login_mima"></i>
          <span slot="title">使用说明</span>
        </el-menu-item>
        <el-menu-item index = "/3" style = "font-size: 16px;">
          <i class="el-icon-ali-jishuzhichizhichizhinengkefuzhinengfuwuzhinengzhichi"></i>
          <span slot="title">技术支持</span>
        </el-menu-item>
      </el-menu>
    </div>
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
    
</el-col>
 </el-row>
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
 /* 中间样式，包含左侧导航栏和右侧内容 flex布局 */
  .middle {
    display: flex;
    position: fixed;
    top: 50px;
    left:0px;
    bottom: 100px;
  }
  
  /* 右侧内容区域 */
  .content-container {
    background-color: #f0f3f5;
    flex: 1;
    overflow-y: auto;
    min-height: 100%;
    min-height: 700px;
    padding: 10px;
    padding-bottom: 1px;
  }

  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
  .el-menu-item.is-active {
   background-color: rgb(240, 243, 245) !important;
  }

</style>
