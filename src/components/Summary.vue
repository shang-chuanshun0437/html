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
              {{deviceNum}}
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
  export default {
    name: 'Summary',
    data() {
      return {
        currentDate: new Date(),
        deviceNum:1
      };
    },
    mounted: function () {   
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
