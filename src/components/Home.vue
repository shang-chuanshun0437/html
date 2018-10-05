<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">

      <!-- 加载logo图标 -->
      <div class="topbar-logo">
        <a href="/"><img src="../assets/logo.png" style="padding-left:8px;"></a>
      </div>

      <!-- v-show="true"则显示该组件，为false则不显示组件 -->
      <div class="topbar-logos" v-show="!collapsed">
        <a href="/"><img src="../assets/logotxt.png"></a>
      </div>

      <div class="topbar-title">
        <span>智能锁后台管理系统</span>
      </div>

      <div class="topbar-account">
        <el-dropdown>
          
          <span class="el-dropdown-link userinfo-inner">{{nickname}}<i class="el-icon-arrow-down el-icon--right"></i></span>

          <el-dropdown-menu slot="dropdown">

            <el-dropdown-item>
              <div @click="jumpTo('/user/profile')"><span style="color: #555;font-size: 14px;">个人信息</span></div>
            </el-dropdown-item>

            <el-dropdown-item>
              <div @click="jumpTo('/user/changepwd')"><span style="color: #555;font-size: 14px;">修改密码</span></div>
            </el-dropdown-item>

            <el-dropdown-item  @click.native="logout">退出登录</el-dropdown-item>

          </el-dropdown-menu>

        </el-dropdown>

      </div>
    </el-col>

    <!--中间-->
    <el-col :span="24" class="middle">
      <!--左侧导航-->
        <!--导航菜单-->
      <div class="nav-menu">
      <el-menu :default-active="$route.path" mode="vertical"
       class="el-menu-demo"
       @select="handleSelect" 
       background-color="#efefef"
       text-color="#000"
       active-text-color="#ff0000"
       router>
    
      <el-submenu index="1">
        <template slot="title">设备管理</template>
        
            <el-submenu index="5">
                <template slot="title">内部员工</template>
                <el-menu-item index="/book/list">设备</el-menu-item>
                <el-menu-item index="/book/list">报修设备</el-menu-item>
            </el-submenu>

            <el-menu-item index="/book/category">外部员工</el-menu-item>
        
        </el-submenu>

        <el-menu-item index="2" >消息中心</el-menu-item>

        <el-submenu index="3">
              <template slot="title">订单管理</template>
              <el-menu-item index="2-3-1">未发货</el-menu-item>
              <el-menu-item index="2-3-2">已发货</el-menu-item>
            </el-submenu>
        <el-menu-item index="/register">注册</el-menu-item>

      </el-menu>

    </div>
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
  import {bus} from '../bus.js'
  import API from '../api/api_user';

  export default {
    name: 'home',
    created(){
      bus.$on('setNickName', (text) => {
        this.nickname = text;
      })

      bus.$on('goto', (url) => {
        if (url === "/login") {
          localStorage.removeItem('access-user');
        }
        this.$router.push(url);
      })
    },
    data () {
      return {
        nickname: '',
        collapsed: false,
      }
    },
    methods: {
      jumpTo(url){
        this.$router.push(url);
      },
      logout(){
        let that = this;
        this.$confirm('确认退出吗?', '提示', {
          confirmButtonClass: 'el-button--warning'
        }).then(() => {
          //确认
          that.loading = true;
          API.logout().then(function (result) {
            that.loading = false;
            localStorage.removeItem('access-user');
            that.$router.go('/login'); //用go刷新
          }, function (err) {
            that.loading = false;
            that.$message.error({showClose: true, message: err.toString(), duration: 2000});
          }).catch(function (error) {
            that.loading = false;
            console.log(error);
            that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
          });
        }).catch(() => {});
      }
    },
    mounted() {
      let user = localStorage.getItem('access-user');
      if (user) {
        user = JSON.parse(user);
        this.nickname = user.nickname || '';
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background: #efefef;
  }
  //设置标题样式
  .topbar-title {
    float: left;
    text-align: right;
    width: 400px;
    padding-left: 1px;
    border-left: 1px solid #000;
    color: #000;
    font-size: 30px;
  }
  //头部样式
  .topbar-wrap {
    height: 10px;
    line-height: 40px;
    padding: 0px;
  }
  
  //icon图标
  .topbar-logo {
    float: left;
    width: 59px;
    line-height: 26px;
  }

  .topbar-logos {
    float: left;
    width: 120px;
    line-height: 26px;
  }

  .topbar-logo img, .topbar-logos img {
    height: 40px;
    margin-top: 5px;
    margin-left: 2px;
  }
  
  //账户信息
  .topbar-account {
    float: right;
    padding-right: 20px;
    width: 150px;
  }

  .userinfo-inner {
  cursor: pointer;
  color: #000000;
  font-size: 16px;
  }

 //中间样式，包含左侧导航栏和右侧内容 flex布局
  .middle {
    display: flex;
    position: absolute;
    top: 40px;
    bottom: 0px;
    overflow: hidden;
  }

  //导航栏样式
  .el-menu-demo {
  width: 150px;
  overflow: hidden;
  }

  //右侧内容区域
  .content-container {
    background: #fff;
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    padding-bottom: 1px;
  }

  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }

</style>
