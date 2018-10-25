<template>
  <el-form ref="AccountFrom" :model="account" :rules="rules" class="login-container">
    <h3 class="title">欢迎登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" prefix-icon="el-icon-ali-login_zhanghu"
                auto-complete="off" placeholder="手机号">
      </el-input>
    </el-form-item>

    <el-form-item prop="pwd">
      <el-input type="password" v-model="account.pwd" prefix-icon="el-icon-ali-login_mima"
      auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" :loading="loading">登录</el-button>
    </el-form-item>
    
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        account: {
          username: '',
          pwd: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        },
        checked: true
      };
    }
  }
</script>

<style scoped>
  .login-container {
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
  .title{
    margin: 0px 0px 20px 0px;
    text-align: center;
    color: #505458;
  }
</style>
