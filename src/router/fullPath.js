import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/Login'

// 懒加载方式，当路由被访问的时候才加载对应组件
//const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: Login
    }]

})

router.beforeEach((to, from, next) => {
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