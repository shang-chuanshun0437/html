import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'

import BookList from '@/components/book/list'
import BookCategoryList from '@/components/bookcategory/list'

import UserList from '@/components/user/list'
import UserChangePwd from '@/components/user/changepwd'
import UserProfile from '@/components/user/profile'

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
    // mode: 'history',
    routes: [
        { name: 'login', path: '/login', component: Login },
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/dashboard',
            children: [
                { path: '/dashboard', component: Dashboard, name: '首页' }
            ]
        },
        {
            path: '/',
            component: Home,
            name: 'home',
            children: [
                { path: '/user/list', component: UserList, name: 'user.list' }
            ]
        },
        {
            path: '/',
            component: Home,
            name: 'home',
            children: [
                { path: '/book/list', component: BookList, name: 'book.list' },
                { path: '/book/category', component: BookCategoryList, name: 'book.category' }
            ]
        },
        {
            path: '/',
            component: Home,
            name: '设置',
            children: [
                { path: '/user/profile', component: UserProfile, name: '个人信息' },
                { path: '/user/changepwd', component: UserChangePwd, name: '修改密码' }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    // console.log('to:' + to.path)
    if (to.path.startsWith('/login')) {
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