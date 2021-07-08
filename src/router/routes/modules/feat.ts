/*
 * @Description: 功能
 * @Date: 2021-07-01 22:43:37
 * @LastEditTime: 2021-07-08 16:28:07
 */

import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/routes/basic";

const feat: AppRouteRecordRaw = {
    path: "/feat",
    name: "Feat",
    component: LAYOUT,
    redirect: "/feat/downlode",
    meta: {
        title: "功能",
        orderNo: 4000
    },
    children: [
        {
            path: "downlode",
            name: "Downlode",
            component: () => import("@/views/demo/feat/downlode/index.vue"),
            meta: {
                title: "文件下载"
            }
        },
        {
            path: "copy",
            name: "Copy",
            component: () => import("@/views/demo/feat/copy/index.vue"),
            meta: {
                title: "剪切板"
            }
        },
        {
            path: "webSocket",
            name: "WebSocket",
            component: () => import("@/components/RouterTransition/index.vue"),
            meta: {
                title: "WebSocket"
            },
            children: [
                {
                    path: "ws",
                    name: "ws",
                    component: () => import("@/views/demo/feat/webSocket/ws/index.vue"),
                    meta: {
                        title: "连接测试"
                    }
                },
                {
                    path: "maxdata",
                    name: "MaxData",
                    component: () => import("@/views/demo/feat/webSocket/maxData/index.vue"),
                    meta: {
                        title: "大量数据"
                    }
                },
            ]
        },
    ]
}

export default feat;