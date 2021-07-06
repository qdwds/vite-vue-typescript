/*
 * @Description: router
 * @Date: 2021-06-16 16:14:15
 * @LastEditTime: 2021-07-06 17:41:59
 */
import type { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { routers } from "./routes";

const router = createRouter({
    history: createWebHashHistory("/"),
    routes: (routers as unknown) as RouteRecordRaw[],
})

export const setupRouter = (app: App<Element>) => {
    app.use(router);
}

export default router;