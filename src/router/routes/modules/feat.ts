/*
 * @Description: 功能
 * @Date: 2021-07-01 22:43:37
 * @LastEditTime: 2021-07-01 22:46:21
 */

import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/routes/basic";

const feat:AppRouteRecordRaw = {
    path:"/feat",
    name:"Feat",
    component:LAYOUT,
    redirect:"/feat/downlode",
    meta:{
        title:"功能",
        orderNo:4000
    },
    children:[
        {
            path:"downlode",
            name:"Downlode",
            component:() => import("@/views/demo/feat/downlode/index.vue"),
            meta:{
                title:"文件下载"
            }
        },
    ]
}

export default feat;