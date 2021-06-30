/*
 * @Description: d3js
 * @Date: 2021-06-22 21:34:26
 * @LastEditTime: 2021-06-30 11:10:06
 */

import { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";

const cytoscape: AppRouteModule = {
    path: "/cytoscape",
    name: "Cytoscape",
    component: LAYOUT,
    meta: {
        title: "cytoscape",
        children:true
    },
    children: [
        {
            path: "demo",
            name: "Demo",
            component: () => import("@/views/demo/cytoscape/demo/index.vue"),
            meta: {
                title: "Demo"
            }
        },
        {
            path: "atlas",
            name: "Atlas",
            component: () => import("@/views/demo/cytoscape/atlas/index.vue"),
            meta: {
                title: "知识图谱"
            }
        },
        {
            path: "sector",
            name: "Sector",
            component: () => import("@/views/demo/cytoscape/sector/index.vue"),
            meta:{
                title:"扇形"
            }
        }
    ]
}
export default cytoscape