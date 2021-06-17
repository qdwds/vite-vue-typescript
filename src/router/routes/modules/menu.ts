/*
 * @Description: 
 * @Author: 前端伪大叔
 * @Date: 2021-06-09 12:05:59
 * @LastEditTime: 2021-06-17 17:45:23
 * @yuque: http://www.yuque.com/qdwds
 */

import { LAYOUT } from "../basic";
import { AppRouteModule } from "../../types";
const menu: AppRouteModule = {
    path: "/menu",
    name: "Menu",
    redirect: "/menu/menu-1",
    component: LAYOUT,
    meta: {
        title: "递归组件"
    },
    children: [
        {
            path: "/menu/menu-1",
            name: "Menu-1",
            component: ()=>import("@/layout/Transition/index.vue"),
            meta: {
                title: "menu-1"
            },
            children: [
                {
                    path: "menu-1-1",
                    name: "Menu-1-1",
                    component: ()=>import("@/layout/Transition/index.vue"),
                    meta: {
                        title: "menu-1-1"
                    },
                    children: [
                        {
                            path: "menu-1-1-1",
                            name: "Menu-1-1-1",
                            component: () => import("@/views/demo/menu/menu-1/menu-1-1/menu-1-1-1/index.vue"),
                            meta: {
                                title: "menu-1-1-1"
                            },
                        },
                        // {
                            //     path: "menu-1-1-2",
                            //     name: "Menu-1-1-2",
                        //     component: ()=>import("@/layout/Transition/index.vue"),
                        //     meta: {
                        //         title: "menu-1-1-2"
                        //     },
                        //     children: [
                        //         {
                            //             path: "menu-1-1-2-1",
                            //             name: "Menu-1-1-2-1",
                        //             component: () => import("@/views/demo/menu/menu-1/menu-1-1/menu-1-1-2/menu-1-1-2-1/index.vue"),
                        //             meta: {
                        //                 title: "menu-1-1-2-1"
                        //             }
                        //         },

                        //     ]
                        // },
                    ]
                },
                {
                    path: "/menu/menu-1/menu-1-2",
                    name: "Menu-1-2",
                    component: () => import("@/views/demo/menu/menu-1/menu-1-2/index.vue"),
                    meta: {
                        title: "menu-1-2"
                    },
                }
            ]
        },
        {
            path: "menu-2",
            name: "Menu-2",
            component: () => import("@/views/demo/menu/menu-2/index.vue"),
            meta: {
                title: "menu-2"
            }
        }

    ]
}
export default menu;
