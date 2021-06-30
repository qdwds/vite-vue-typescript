/*
 * @Description: 
 * @Author: 前端伪大叔
 * @Date: 2021-06-09 16:01:47
 * @LastEditTime: 2021-06-30 17:40:32
 * @yuque: http://www.yuque.com/qdwds
 */

import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/routes/basic";

const a:AppRouteRecordRaw = {
    path:"/welcome",
    name:"welcome",
    component:LAYOUT,
    redirect:"/welcome/home",
    meta:{
        title:"欢迎页",
        orderNo:1000
    },
    children:[
        {
            path:"home",
            name:"home",
            component:() => import("@/views/demo/home/index.vue"),
            meta:{
                title:"首页"
            }
        }
    ]
}

export default a;