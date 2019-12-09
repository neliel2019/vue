import VueRouter from "vue-router";
import Vue from 'vue'
Vue.use(VueRouter)

import login from "@/components/login";
import registered from "@/components/registered"
import mainpage from "./components/mainpage";
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

                        default:HomeCompnent

                    }
                },
                {
                  path:'/mainpage/exam',
                    components:{
                        default:ExamComponent

                    }
                },

                {
                    path:'/mainpage/special',
                    components:{
                        default:SpecialComponent

                    }


                },
                {
                    path:'/mainpage/score',
                    components:{
                        default:ScoreComponent

                    }},

                {
                    path:'/mainpage/mine',
                    components:{
                        default:MineComponent

                    }},
            ]
        },

    ]})




export default router
