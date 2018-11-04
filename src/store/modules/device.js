/*
 * Author: 17030360
 * Email:wdnybbz@163.com
 */
import * as types from "../mutation-types";

const getters = {
    manageTotal: state => state.manageTotal,
    manageList: state => state.manageList,
    unmanageTotal: state => state.unmanageTotal,
    unmanageList: state => state.unmanageList,
};

const state = {
    manageTotal: 0,
    manageList: [],
    unmanageTotal: 0,
    unmanageList: [],
};

const actions = {
    //查询用户管理的设备
    manageList({ commit }, param) {
        return new Promise((resolve, reject) => {
            commit(types.DEVICE_MANAGE_LIST, param);
        });
    },
    //查询普通的设备
    unmanageList({ commit }, param) {
        return new Promise((resolve, reject) => {
            commit(types.DEVICE_UNMANAGE_LIST, param);
        });
    },
};

const mutations = {
    [types.DEVICE_MANAGE_LIST](state, param) {
        console.log(param);
        state.manageTotal = param.count;
        if (param.count === 0) {
            state.manageList = null;
        } else {
            state.manageList = [].concat(param.getDeviceInfoResponses);
        }

        console.log(state.manageList);
    },
    [types.DEVICE_UNMANAGE_LIST](state, param) {
        console.log(param);
        state.unmanageTotal = param.count;
        if (param.count === 0) {
            state.unmanageList = null;
        } else {
            state.unmanageList = [].concat(param.getUnManageDeviceRes);
        }
        console.log(state.unmanageList);
    }
};

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
};