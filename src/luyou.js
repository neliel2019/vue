import VueRouter from "vue-router";
import Vue from 'vue'
Vue.use(VueRouter)

import login from "@/components/login";
import registered from "@/components/registered"



var router=new VueRouter({
    routes: [
        { path: '/', component: login,
            redirect:'/registereda',
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: '/registereda',
                    component: registered
                }

            ]
        },{
        path: '/registered',
            component: registered
        },
        {
            path:'/mainpage'

        }
    ]})




export default router
