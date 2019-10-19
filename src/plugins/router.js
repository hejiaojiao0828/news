import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../pages/Home.vue"
import Login from '../pages/Login.vue'
import Logout from "../pages/Logout.vue"
import News from "../pages/News.vue"
import Recreation from "../pages/Recreation.vue"
import Reg from "../pages/Reg.vue"
import Society from "../pages/Society.vue"
import User from "../pages/User.vue"
import Detail from "../pages/Detail.vue"
import Index from "../pages/Index.vue"

let routes =[
    {path:'/index',component:Index,
        children:[
            {path:'home',component:Home}, 
            {path:'Recreation',component:Recreation},
            {path:'Society',component:Society},
            {path:'/',component:Home},
        ]
    },
    {path:'/login',component:Login},
    {path:'/logout',component:Logout},
    {path:'/news',component:News},
    {path:'/reg',component:Reg},
    {path:'/user',component:User},
    {path:'/recreation',component:Recreation},
    {path:'/society',component:Society},
    {path:'/detail/:id',component:Detail},
    {path:'/',redirect:'/index'},
]


export default new VueRouter({routes})