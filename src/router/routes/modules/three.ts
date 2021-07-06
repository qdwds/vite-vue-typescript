/*
 * @Description: three
 * @Date: 2021-07-06 16:38:48
 * @LastEditTime: 2021-07-06 17:32:48
 */

import { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";


const three:AppRouteModule = {
    path:"/three",
    name:"Three",
    component:LAYOUT,
    redirect:"/three/world",
    meta:{
        title:"Three",
        orderNo:6000
    },
    children:[
        {
            path:"world",
            name:"World",
            component:()=>import("@/views/demo/threejs/world/index.vue"),
            meta:{
                title:"球的世界"
            }
        },
        {
            path:"quadratic",
            name:"Quadratic",
            component:()=>import("@/views/demo/threejs/quadratic/index.vue"),
            meta:{
                title:"二次元"
            }
        }
    ]
}

export default three;