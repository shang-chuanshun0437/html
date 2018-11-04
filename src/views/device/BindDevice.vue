/*
 * Project: f:\2017Project\game-cms
 * Copyright (c) 2018 SN
 */

<template>
    <el-dialog title="绑定设备" :modal=true :modal-append-to-body="false" :visible="show" top="15%" class="bindDialog" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item  label="设备编号" prop="deviceNum">
          <el-col :span="12">
            <el-input v-model="ruleForm.deviceNum" placeholder="请输入设备编码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="设备名称" prop="deviceName">
          <el-col :span="12">
            <el-input v-model="ruleForm.deviceName" placeholder="请输入设备名称"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      
      <span slot="footer" class="dialog-footer">
          <el-button @click.native="cancel()">取消</el-button>
          <el-button type="primary" :disabled="confirm" @click.native="handleAdd()">确定</el-button>
      </span>
    </el-dialog>
</template>

<script>
import * as API from "../../axios/api";
import * as URL from "../../axios/url";

export default {
  props: ["show"],
  data: function() {
    return {
      confirm:false,
      ruleForm: {
        deviceNum: "",
        deviceName: "",
      },
      rules: {
        deviceNum: [
          { required: true, message: "请填写设备编码", trigger: "blur" }
        ],
        deviceName: [
          { required: true, message: "请填写设备名称", trigger: "blur" }
        ],
       
      }
    };
  },

  methods: {
    cancel() {
      this.$emit("update:show", false);
    },
    handleAdd() {
      this.confirm=true;
      let user = JSON.parse(window.localStorage.getItem('access-user'));
      var param = Object.assign({}, {userPhone: user.userPhone , token: user.token ,deviceName: this.ruleForm.deviceName ,
      deviceNum: this.ruleForm.deviceNum });

      //绑定设备
      API.POST(URL.DEVICE_BIND_URL, param)
        .then(res => {
          if (res.result.retCode === 0) {
            this.confirm=false;
            // this.$router.push("/instructions");
            // this.$router.push("/user/device");
            this.$emit("update:show", false); 
            parent.location.reload();
          }else
          {
            this.confirm=false;
            this.$message.error('请输入正确的11位设备编号！');
            console.log(res.result.retCode);
          }
        })
        .catch(err => {
          this.confirm=false;
          
          
          console.log(err);
        });
    },
    handleClose() {
      this.$emit("update:show", false);
    }
  },
  created() {
    console.log('binddevice');
  }
};
</script>

<style scoped>
  .bindDialog{
    margin:center;
  }
</style
