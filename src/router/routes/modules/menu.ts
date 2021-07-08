/*
 * @Description: 
 * @Author: 前端伪大叔
 * @Date: 2021-06-09 12:05:59
 * @LastEditTime: 2021-07-08 14:27:17
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
        title: "多级菜单",
        orderNo:3000
    },
    children: [
        {
            path: "menu-1",
            name: "Menu-1",
            component: () => import("@/components/RouterTransition/index.vue"),
            meta: {
                title: "menu-1",
            },
            children: [
                {
                    path: "menu-1-1",
                    name: "Menu-1-1",
                    component: () => import("@/components/RouterTransition/index.vue"),
                    meta: {
                        title: "menu-1-1",
                    },
                    children: [
                        {
                            path: "menu-1-1-1",
                            name: "Menu-1-1-1",
                            component: () => import("@/views/demo/menu/menu-1/menu-1-1/menu-1-1-1/index.vue"),
                            meta: {
                                title: "menu-1-1-1"
                            },
                        }
                    ]
                },
                {
                    path: "menu-1-2",
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
