<template>
 <!-- 头部区域 -->
 <div class="header">
    <el-row v-if="show">

      <el-col :span="24" class="weiyi-header">
        <div>
          <img class = "weiyi-logo" src="@/assets/logo.png">
        </div>

        <div>
          <el-menu class = "weiyi-top-nav"
          mode="horizontal" :default-active="$route.path" router active-text-color="#FFFFFF" text-color="#000000" >
            <el-menu-item index = "/summary" style = "font-size: 16px;">首页</el-menu-item>
            <el-menu-item index="/user/device/manage" style = "font-size: 16px;">设备管理</el-menu-item>
            <el-menu-item index="/device/user/list" style = "font-size: 16px;">用户管理</el-menu-item>
            <el-menu-item index="/device/openHistory/list" style = "font-size: 16px;">开门记录</el-menu-item>
            <el-menu-item index="/account/private" style = "font-size: 16px;" >账户信息</el-menu-item>
          </el-menu>
        </div>

        <div class = "weiyi-top-dropdown">
            <el-dropdown>
              <span style = "color:#ffffff;font-size: 15px;" class="el-dropdown-link">{{userPhone}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native = "userInfo">基本资料</el-dropdown-item>
                <el-dropdown-item @click.native = "changPassword">修改密码</el-dropdown-item>
                <el-dropdown-item @click.native = "logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </div>

      </el-col>

    </el-row>
   <ChangePwd :show.sync="pwdShow"></ChangePwd>
 </div>
</template>

<script>
  import { mapState } from "vuex";
  import ChangePwd from "../../views/account/ChangPwd";
  export default {
    name: 'Top',
    components: {
      ChangePwd,
    },
    data () {
      return {
        pwdShow: false,
        //userPhone: 'Welcome',
      }
    },
    created() {
      //let user = JSON.parse(window.localStorage.getItem('access-user'));
      //this.userPhone = user.userPhone;
    },
    methods:{
      logout(){
        this.$router.push('/login');
      },
      changPassword(){
        this.pwdShow = true;
      },
      userInfo(){
        this.$router.push('/account/private');
      },
    },
    computed: {
      ...mapState("top", {
        show: state => state.show,
      }),
      ...mapState("login", {
        userPhone: state => state.userPhone,
      }),
    },
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
