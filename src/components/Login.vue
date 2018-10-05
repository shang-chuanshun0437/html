<template>

  <el-form ref="AccountFrom" :model="account" :rules="rules" label-width="0px"
           class="login-container">
    
    <h3 class="title">智能锁后台管理系统</h3>
    
    <el-form-item>
      <el-input type="text" v-model="account.username"  placeholder="账号"></el-input>
    </el-form-item>

    <el-form-item>
      <el-input type="password" v-model="account.pwd"  placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" round style="width:100%;" @click="handleLogin" >登录</el-button>
    </el-form-item>

  </el-form>

</template>

<script>
  import API from '../api/api_user';

  export default {
    data() {
      return {
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
    },
    methods: {
      handleLogin() {
        let that = this;
        this.$refs.AccountFrom.validate((valid) => {
          if (valid) {
  
            let loginParams = {username: this.account.username, pwd: this.account.pwd};
            console.log('loginParams:' + loginParams.username)
            API.login(loginParams).then(function (result) {
        
              that.loading = false;
              if (result && result.id) {
                localStorage.setItem('access-user', JSON.stringify(result));
                that.$router.push({path: '/'});
              } else {
                that.$message.error({showClose: true, message: result.errmsg || '登录失败', duration: 2000});
              }
            }, function (err) {
             
              that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            }).catch(function (error) {
              console.log(error);
              that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            });
          }
        });
      }
    }
  }
</script>
<style>
  body {
    background: #DFE9FB;
  }
</style>
<style lang="scss" scoped>
  .login-container {

    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
  
  }
</style>
