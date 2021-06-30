/*
 * @Description: 
 * @Date: 2021-06-16 17:32:16
 * @LastEditTime: 2021-06-30 20:45:24
 */
import { AppRouteModule, AppRouteRecordRaw } from "../types";
export const LAYOUT = () => import("@/layout/default/index.vue");


const NOT_FOUND_ROUTE: AppRouteModule = {
    path: "/:path(.*)*",
    name: "Error",
    component: LAYOUT,
    children: [
        {
            path: "/:path(.*)*",
            name: "error",
            component: () => import("@/views/error/index.vue")
        }
    ]
}
const root: AppRouteRecordRaw = {
    path: "/",
    name: "Root",
    redirect:"/login",
    component: LAYOUT
}


const login: AppRouteRecordRaw = {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue")
}

export const basicRouter = [
    root,
    login,
    NOT_FOUND_ROUTE
]