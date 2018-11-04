/*
 * Project: f:\2017Project\game-cms
 * Created Date: Friday June 1st 2018
 * Author: 17030360
 * Email:wdnybbz@163.com
 * Description:-----
 * EditLog:-----
 * Copyright (c) 2018 SN
 */

<template>
  <div >
    <div class="panel-heading">
      <span  class="panel-text">管理的设备列表</span>
    </div>
    <el-row style="top:5px">
      <el-col :span="20">
        <SearchForm :searchData="searchData" @handleSubmit="handleSearch"></SearchForm>
      </el-col>
      <el-col :span="3" :offset="1" align="center">
        <el-button type="primary" icon="el-icon-plus" :disabled="bindDisabled" @click="bindDevice()">绑定设备</el-button>
      </el-col>
    </el-row>
    <el-table v-loading="loading" :data="list" style="width: 100%" @row-click="clickRow" border stripe ref="moviesTable">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column width="180" prop="deviceNum" label="设备编号" align="center"></el-table-column>
      <el-table-column width="180" prop="deviceName" label="设备名称" align="center"></el-table-column>
      <el-table-column width="100" prop="userCount" label="用户数量" align="center"></el-table-column>
      <el-table-column width="180" prop="version" label="硬件版本" align="center"></el-table-column>
      <el-table-column width="180" prop="updateTime" label="更新日期" align="center"></el-table-column>
      <el-table-column width="180" prop="createTime" label="出厂日期" align="center"></el-table-column>
      <el-table-column width="270" label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.deviceNum)">编辑</el-button>
          <el-button size="mini" @click="handleAddUser(scope.row.deviceNum,scope.row.deviceName)">添加用户</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.deviceNum,scope.row.deviceName)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="text-align:center;margin-top:15px;">
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="total, prev, pager, next,jumper" :total="total">
      </el-pagination>
    </el-row>

    <BindDevice :show.sync="bindShow" ></BindDevice>
    <EditDevice :show.sync="editShow" :deviceNum.sync="editDeviceNum"></EditDevice>
    <BindDeviceForUser :show.sync="bindForUserShow" :deviceNum.sync="forUserDeviceNum" :deviceName.sync="forUserDeviceName"></BindDeviceForUser>
  </div>

</template>

<script>
import SearchForm from "../common/SearchForm";
import { mapState } from "vuex";
import * as API from "../../axios/api";
import * as URL from "../../axios/url";
import BindDevice from './BindDevice'
import EditDevice from './EditDevice'
import BindDeviceForUser from './BindDeviceForUser'
const searchData = [
  {
    name: "设备编号",
    type: "input",
    placeholder: "请输入设备编号",
    key: "deviceNum"
  },
  {
    name: "设备名称",
    type: "input",
    placeholder: "请输入设备名称",
    key: "deviceName"
  }
];
export default {
  components: {
    SearchForm,
    BindDevice,
    EditDevice,
    BindDeviceForUser
  },
  computed: {
    ...mapState("device", {
      total: state => state.manageTotal,
      list: state => state.manageList
    })
  },
  data() {
    return {
      loading: true,
      bindDisabled:false,
      currentPage: 1,
      searchData: searchData,
      bindShow:false,
      editShow:false,
      bindForUserShow:false,
      editDeviceNum:'',
      forUserDeviceNum:'',
      forUserDeviceName:'',
      filters: {
        deviceNum: "",
        deviceName: ""
      }
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      console.log('refresh');
      let user = JSON.parse(window.localStorage.getItem('access-user'));
      var param = Object.assign({}, {userPhone: user.userPhone , token: user.token ,deviceName: this.filters.deviceName ,
      deviceNum: this.filters.deviceNum ,currentPage: this.currentPage });

      //发送查询管理的设备列表请求
      API.POST(URL.DEVICE_MANAGE_URL, param)
        .then(res => {
          if (res.result.retCode === 0) {
            this.loading = false;
            this.$store.dispatch("device/manageList",res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    handleSearch(params) {
      console.log(params);
      this.filters=Object.assign({},params);
      // this.sql.loginName=params.loginName;
      this.refresh();
      // this.refresh(params);
    },
    bindDevice() {
      this.bindShow = true;
      console.log('binddevice');
    },
    clickRow(row){
      this.$refs.moviesTable.toggleRowSelection(row)
    }   ,
    handleEdit(deviceNum) {
      this.editDeviceNum = deviceNum;
      console.log('handleEdit');
      this.editShow = true;
    },
    handleAddUser(deviceNum,deviceName) {
      this.forUserDeviceNum = deviceNum;
      this.forUserDeviceName = deviceName;
      console.log('handleAddUser' + deviceNum + deviceName);

      this.bindForUserShow = true;
    },
    handleDelete(deviceNum,deviceName) {
      let user = JSON.parse(window.localStorage.getItem('access-user'));
      var param = Object.assign({}, {userPhone: user.userPhone , token: user.token ,deviceNum: deviceNum});
  
      swal({
        title: "确定？",
        text: "你确定要删除:" + deviceName + "  设备吗？",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          //绑定设备
          API.POST(URL.DEVICE_UNBIND_URL, param)
            .then(res => {
              if (res.result.retCode === 0) {
                swal({
                    title: "已删除",
                    text: "删除用户成功",
                    icon: "success",
                    button: "确认"
                  }).then(() => {
                    console.log('unbindDevice');
                    this.refresh();
                  });
                } else if (res.result.retCode === 1008) {
                  swal({
                    title: "删除失败!",
                    text: "请输入正确的设备编号",
                    icon: "error",
                    button: "确认"
                  });
                }else if(res.result.retCode === 1009){
                  swal({
                    title: "删除失败!",
                    text: "该设备下还存在其他用户，请删除其他用户后，再删除该设备！",
                    icon: "error",
                    button: "确认"
                  });
                }
            })
            .catch(err => {
              //this.confirm=false;
              if(err.response.status === 400)
              {
                this.$message.error('输入错误，设备编号只包含数字！');
              }else{
                this.$message.error('系统正在升级中，请联系管理员！');
              }
              
              console.log(err.response.status);
            });
          }
        })
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.refresh();
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style>
  .panel-heading{
    background: #eee;
    height: 20px;
    margin: 0px;
    padding: 10px;
    position: relative;
    border-bottom: 1px solid #DEE5E7;
  }
  .panel-text{
    position:relative;
    left:30px;
    top:1px;
    font-size:16px;
  }
</style>