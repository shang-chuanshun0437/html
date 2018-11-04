import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/Login'
import Register from '@/components/common/Register'
import Home from '@/components/Home'
import Summary from '@/components/Summary'

import Device from '../views/device/Device'
import ManageDeviceList from '../views/device/ManageDeviceList'
import UnManageDeviceList from '../views/device/UnManageDeviceList'

import User from '../views/user/User'
import UserList from '../views/user/UserList'

import Instructions from '@/components/Instructions'
import store from '../store/index'
import { mapState } from "vuex";
// 懒加载方式，当路由被访问的时候才加载对应组件
//const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/',
            name: 'summary',
            redirect: '/summary'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/summary',
            children: [
                { path: '/summary', component: Summary, name: 'summary' },
                { path: '/instructions', component: Instructions, name: 'instructions' }
            ]
        },
        {
            path: '/user/device',
            name: 'device',
            component: Device,
            redirect: '/user/device/manage',
            children: [
                { path: '/user/device/manage', component: ManageDeviceList, name: 'manageDeviceList' },
                { path: '/user/device/unmanage', component: UnManageDeviceList, name: 'unManageDeviceList' }
            ]
        },
        {
            path: '/device/user',
            name: 'user',
            component: User,
            redirect: '/device/user/list',
            children: [
                { path: '/device/user/list', component: UserList, name: 'userList' },
            ]
        },
    ]

})

router.beforeEach((to, from, next) => {
    if (to.path.startsWith('/login') || to.path.startsWith('/register')) {
        window.localStorage.removeItem('access-user')
        next()
    } else {
        let user = JSON.parse(window.localStorage.getItem('access-user'))
        if (!user) {
            next({ path: '/login' })
        } else {
            next()
        }
    }
})

export default router