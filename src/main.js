// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/fullPath'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//全局css
import "@/styles/top.css"

//去掉告警信息
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    components: { App },
    render: h => h(App),
    template: '<App/>'
})