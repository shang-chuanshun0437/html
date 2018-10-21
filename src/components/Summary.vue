<template>
  <div class = "summary-main">
    <el-row>
        <el-col :span="8">
          <el-card class="device">
            <div slot="header" class="clearfix">
              <span>设备数量</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div >
              <img src="../assets/forest.png" class="device-image">
            </div>
            <div class = "normal-device">
              <span class = "text-style">正常设备</span>
            </div>
            <div class = "repair-device">
              <span class = "text-style">报修设备</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>注册用户</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
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
  .normal-device{
    position: relative;
    left:100px;
    top: -50px;
  }
  .repair-device{
    position: relative;
    left:100px;
    top: -40px;
  }
</style>
