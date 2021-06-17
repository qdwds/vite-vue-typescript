/*
 * @Description: 
 * @Date: 2021-06-16 16:17:47
 * @LastEditTime: 2021-06-17 16:07:16
 */

import { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";
const t:AppRouteModule = {
    path:"/t",
    name:"T",
    component:LAYOUT,
    children:[
        {
            path:"home",
            name:"Home",
            component:()=>import("@/views/home.vue")
        },
        {
            path:"about",
            name:"About",
            component:()=>import("@/views/about.vue")
        }
    ]
}
export default t