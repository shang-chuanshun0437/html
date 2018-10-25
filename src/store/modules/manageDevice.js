/*
 * Project: f:\2017Project\game-cms
 * Created Date: Thursday June 7th 2018
 * Author: 17030360
 * Email:wdnybbz@163.com
 * Description:-----
 * EditLog:-----
 * Copyright (c) 2018 SN
 */

import {
    faceactivityList,
    faceactivityChg,
    faceactivityDetail,
    faceactivityUploadRes,
    faceactivityTemp
} from "../../api/rest";
import * as types from "./../mutation-types";

const getters = {
    total: state => state.total,
    list: state => state.list
};

const state = {
    list: [],
    total: null
};

const actions = {
    list({ commit }, param) {
        return new Promise((resolve, reject) => {
            faceactivityList.list(
                param,
                res => {
                    commit(types.RECEIVE_ACTIVITYFACE_LIST_SUCCESS, { res });
                    resolve(res);
                },
                res => {
                    commit(types.RECEIVE_ACTIVITYFACE_LIST_FAILURE, { res });
                    reject(res);
                }
            );
        });
    },
    add({ commit }, param) {
        return new Promise((resolve, reject) => {
            faceactivityChg.add(
                param,
                res => {
                    commit(types.ADD_ACTIVITYFACE_SUCCESS, { res });
                    resolve(res);
                },
                res => {
                    commit(types.ADD_ACTIVITYFACE_FAILURE, { res });
                    reject(res);
                }
            );
        });
    },
    del({ commit }, param) {
        return new Promise((resolve, reject) => {
            faceactivityChg.del(
                param,
                res => {
                    commit(types.DELETE_ACTIVITYFACE_SUCCESS, { res });
                    resolve(res);
                },
                res => {
                    commit(types.DELETE_ACTIVITYFACE_FAILURE, { res });
                    reject(res);
                }
            );
        });
    },
    edit({ commit }, param) {
        return new Promise((resolve, reject) => {
            faceactivityChg.modify(
                param,
                res => {
                    commit(types.EDIT_ACTIVITYFACE_SUCCESS, { res });
                    resolve(res);
                },
                res => {
                    commit(types.EDIT_ACTIVITYFACE_FAILURE, { res });
                    reject(res);
                }
            );
        });
    },
    detail({ commit }, param) {
        return new Promise((resolve, reject) => {
            faceactivityDetail.list(
                param,
                res => {
                    commit(types.WATCH_ACTIVITYFACE_SUCCESS, { res });
                    resolve(res);
                },
                res => {
                    commit(types.WATCH_ACTIVITYFACE_FAILURE, { res });
                    reject(res);
                }
            );
        });
    },
    getTemp({ commit }, param) {
        return new Promise((resolve, reject) => {
            faceactivityTemp.list(
                param,
                res => {
                    // console.log(res);
                    commit(types.TEMPLIST_SUCCESS, { res });
                    resolve(res);
                },
                res => {
                    commit(types.TEMPLIST_FAILURE, { res });
                    reject(res);
                }
            );
        });
    },
    uploadRes({ commit }, param) {
        return new Promise((resolve, reject) => {
            faceactivityUploadRes.uploadres(
                param,
                res => {
                    commit(types.UPLOADRES_SUCCESS, { res });
                    resolve(res);
                },
                res => {
                    commit(types.UPLOADRES_FAILURE, { res });
                    reject(res);
                }
            );
        });
    }
};

const mutations = {
    [types.RECEIVE_ACTIVITYFACE_LIST_SUCCESS](state, { res }) {
        // console.log(res);
        state.total = res.data.count;
        let arr = [];
        if (state.total != 0) {
            for (let index = 0; index < res.data.activityDTOS.length; index++) {
                const element = res.data.activityDTOS[index];
                if (element.templateType !== 0) {
                    arr.push(element);
                }
            }
        }
        state.list = [].concat(arr);
    },
    [types.RECEIVE_ACTIVITYFACE_LIST_FAILURE](state, { res }) {
        // console.log(res);
    },
    [types.ADD_ACTIVITYFACE_SUCCESS](state, { res }) {
        // console.log(res);
    },
    [types.ADD_ACTIVITYFACE_FAILURE](state, { res }) {
        // console.log(res);
    },
    [types.EDIT_ACTIVITYFACE_SUCCESS](state, { res }) {
        // console.log(res);
    },
    [types.EDIT_ACTIVITYFACE_FAILURE](state, { res }) {
        // console.log(res);
    },
    [types.DELETE_ACTIVITYFACE_SUCCESS](state, { res }) {
        // console.log(res);
    },
    [types.DELETE_ACTIVITYFACE_FAILURE](state, { res }) {
        // console.log(res);
    },
    [types.WATCH_ACTIVITYFACE_SUCCESS](state, { res }) {
        // console.log(res);
    },
    [types.WATCH_ACTIVITYFACE_FAILURE](state, { res }) {
        // console.log(res);
    },
    [types.TEMPLIST_SUCCESS](state, { res }) {
        // console.log(res);
    },
    [types.TEMPLIST_FAILURE](state, { res }) {
        // console.log(res);
    },
    [types.UPLOADRES_SUCCESS](state, { res }) {
        // console.log(res);
    },
    [types.UPLOADRES_FAILURE](state, { res }) {
        // console.log(res);
    }
};

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
};