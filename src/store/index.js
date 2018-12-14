import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import device from "./modules/device";
import deviceUser from "./modules/deviceUser";
import top from "./modules/top";
import openHistory from "./modules/openHistory";

import getters from "./getters";
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        login,
        device,
        deviceUser,
        top,
        openHistory,
    },
    getters
});
