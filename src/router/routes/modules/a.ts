/*
 * @Description: 
 * @Author: 前端伪大叔
 * @Date: 2021-06-09 16:01:47
 * @LastEditTime: 2021-06-17 17:46:44
 * @yuque: http://www.yuque.com/qdwds
 */

import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/routes/basic";

const a:AppRouteRecordRaw = {
    path:"/a",
    name:"A",
    component:LAYOUT,
    redirect:"/a/a",
    meta:{
        title:"a"
    },
    children:[
        {
            path:"a",
            name:"AA",
            component:() => import("@/views/demo/a/index.vue"),
            meta:{
                title:"a-a"
            }
        }
    ]
}

export default a;