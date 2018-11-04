/*
 * Author: 17030360
 * Email:wdnybbz@163.com
 */
import * as types from "./../mutation-types";

const getters = {
    total: state => state.total,
    list: state => state.list
};

const state = {
    total: 0,
    list: []
};

const actions = {
    list({ commit }, param) {
        return new Promise((resolve, reject) => {
            commit(types.SUBUSER_LIST, param);
        });
    }

};

const mutations = {
    [types.SUBUSER_LIST](state, param) {
        state.total = param.count;
        state.list = [].concat(param.deviceDTOS);
        console.log('mutations:');
    }
};

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
};