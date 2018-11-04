<template>
  <div class = "summary-main">
    <el-row>
        <el-col :span="8">
          <el-card class="device">
            <div slot="header" class="clearfix">
              <span>设备</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
            </div>
            <div >
              <img src="../assets/forest.png" class="device-image">
            </div>
            <div class = "manage-device">
              <span class = "text-style">管理的设备</span>
              {{manageTotal}}
            </div>
            <div class = "normal-device">
              <span class = "text-style">普通设备</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>用户</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
            </div>
            <div >
              <img src="../assets/forest.png" class="device-image">
            </div>
            <div class = "manage-device">
              <span class = "text-style">管理的设备</span>
            </div>
            <div class = "normal-device">
              <span class = "text-style">普通设备</span>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import * as API from "../axios/api";
  import * as URL from "../axios/url";

  export default {
    name: 'Summary',
    data() {
      return {
       
      };
    },
    created() {
      this.refresh();
    },
    computed:{
      ...mapState("device", {
        manageTotal: state => state.manageTotal,
        manageList: state => state.manageList,
        unmanageTotal: state => state.unmanageTotal,
        unmanageList: state => state.unmanageList,
      }),
    },
    mounted: function () {   
    },
    methods:{
      refresh(){
          console.log('console');
          let user = JSON.parse(window.localStorage.getItem('access-user'));
          var queryParams = Object.assign(
            {},
            { userPhone: user.userPhone, token: user.token}
          );
          //获取管理的设备列表
          API.POST(URL.DEVICE_MANAGE_URL, queryParams)
            .then(res => {
              if (res.result.retCode === 0) {
                this.$store.dispatch("device/manageList",res);
              }
            })
            .catch(err => {
              console.log(err);
            });
          //获取普通设备列表
          API.POST(URL.DEVICE_UNMANAGE_URL, queryParams)
            .then(res => {
              if (res.result.retCode === 0) {
                this.$store.dispatch("device/unmanageList",res);
              }
            })
            .catch(err => {
              console.log(err);
            });
      }
    }
  }
</script>

<style scoped>
  .summary-main{
    position: absolute;
    background-color: red;
    width: 1200px;
    top:80px;
    left: 180px;
  }
  .box-card,.device{
    width: 300px;
    height: 180px;
  }
  .device-image{
    position: relative;
    top: 10px;
    width: 80px;
    height: auto;
  }
  .text-style{
    font-size: 15px;
  }
  .manage-device{
    position: relative;
    left:100px;
    top: -50px;
  }
  .normal-device{
    position: relative;
    left:100px;
    top: -40px;
  }
</style>
