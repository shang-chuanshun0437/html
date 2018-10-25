import Vue from "vue";
import Vuex from "vuex";
import aractivity from "./modules/aractivity";

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        sidebar,
        aractivity,
        activityScan,
        activityFace,
    }
});