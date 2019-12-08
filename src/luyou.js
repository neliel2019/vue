import VueRouter from "vue-router";
import Vue from 'vue'
Vue.use(VueRouter)

import login from "@/components/login";
import registered from "@/components/registered"
import mainpage from "./components/mainpage";
import Navmenu from "./components/navmenu";
import HomeCompnent from "./components/HomeCompnent";
import ExamComponent from "./components/ExamComponent";
import SpecialComponent from "./components/SpecialComponent";
import ScoreComponent from "./components/ScoreComponent";
import MineComponent from "./components/MineComponent";
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
        path: '/mainpage',
            component:mainpage,
            redirect:'/mainpage/home',
            children: [
                {

                    path: '/mainpage/home',
                    components:{
                        navmenu:Navmenu,
                        default:HomeCompnent

                    }
                },
                {
                  path:'/mainpage/exam',
                    components:{
                        navmenu:Navmenu,
                        default:ExamComponent

                    }
                },

                {
                    path:'/mainpage/special',
                    components:{
                        navmenu:Navmenu,
                        default:SpecialComponent

                    }


                },
                {
                    path:'/mainpage/score',
                    components:{
                        navmenu:Navmenu,
                        default:ScoreComponent

                    }},

                {
                    path:'/mainpage/mine',
                    components:{
                        navmenu:Navmenu,
                        default:MineComponent

                    }},
            ]
        },

    ]})




export default router
