<template>
  <div class = "summary-main">
    <h3 style="margin-bottom: 20px;color: dimgray">尊敬的用户您好 ，在大管家云平台上，您共有：</h3>
    <el-row>
      <el-col :span="8">
        <el-card class="device">
          <div slot="header" class="clearfix">
            <span>设备</span>
            <el-button style="float: right; padding: 3px 0" @click="deviceInfo" type="text">查看详情</el-button>
          </div>
          <div >
            <img src="../assets/forest.png" class="device-image">
          </div>
          <div class = "manage-device">
            <span class = "text-style">管理的设备</span>
            &nbsp; &nbsp;&nbsp;{{manageTotal}}
          </div>
          <div class = "normal-device">
            <span class = "text-style">普通设备</span>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{unmanageTotal}}
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>子用户</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="subUserInfo">查看详情</el-button>
          </div>
          <div >
            <img src="../assets/forest.png" class="device-image">
          </div>
          <div class = "normal-device">
            <span class = "text-style">子用户</span>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{subUserTotal}}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>统计</span>
            <el-button style="float: right; padding: 3px 0" type="text" >查看详情</el-button>
          </div>
          <div >
            <img src="../assets/forest.png" class="device-image">
          </div>
          <div class = "normal-device">
            <span class = "text-style">开锁记录</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="company">
      <el-row>
        <el-col :span="12">
          <el-card class="notice">
            <div slot="header" class="clearfix">
              <span>公司公告</span>
            </div>
            <ul>
              <li style="margin-bottom: 15px">
                <a href="www.baidu.com" style="font-size: 15px;color: black;">有关恢复PV、UV统计的通知(2018-09-18)</a>
              </li>
              <li style="margin-bottom: 15px">
                <a href="www.baidu.com" style="font-size: 15px;color: black">有关短时暂停PV、UV统计的通知(2018-09-05)</a>
              </li>
              <li style="margin-bottom: 15px">
                <a href="www.baidu.com" style="font-size: 15px;color: black">用户编辑平台v4.0.2更新公告(2018-05-09)</a>
              </li>
            </ul>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="notice">
            <div slot="header" class="clearfix">
              <span>版本升级</span>
            </div>
            <ul>
              <li style="margin-bottom: 15px">
                <a href="www.baidu.com" style="font-size: 15px;color: black;">编辑平台v4.0.2上线(2018-05-09)</a>
              </li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </div>
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
      ...mapState("deviceUser", {
        subUserTotal: state => state.total,
        subUserList: state => state.list,
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
            { userPhone: user.userPhone, token: user.token,currentPage: 1}
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
        //获取子用户
        API.POST(URL.DEVICE_USER_URL, queryParams)
          .then(res => {
            if (res.result.retCode === 0) {
              this.$store.dispatch("deviceUser/list",res);
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      deviceInfo(){
        console.log('deviceInfo');
        this.$router.push('/user/device/manage');
      },
      subUserInfo(){
        console.log('subUserInfo');
        this.$router.push('/device/user/list');
      },
    }
  }
</script>

<style scoped>
  .summary-main{
    position: absolute;
    width: 1200px;
    top: 100px;
    left: 18%;
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
  .company{
    position: relative;
    top:60px;
  }
  .notice{
    width: 540px;
    height: 380px;
  }
</style>
