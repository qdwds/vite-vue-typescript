/*
 * @Description: 
 * @Date: 2021-06-16 16:17:47
 * @LastEditTime: 2021-06-30 17:20:46
 */

import { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";
const t:AppRouteModule = {
    path:"/t",
    name:"T",
    component:LAYOUT,
    meta:{
        title:"t",
        orderNo:4000
    },
    children:[
        {
            path:"home",
            name:"Home",
            component:()=>import("@/views/home.vue"),
            meta:{
                title:"t"
            },
        },
        {
            path:"about",
            name:"About",
            component:()=>import("@/views/about.vue"),
            meta:{
                title:"t"
            },
        }
    ]
}
export default t