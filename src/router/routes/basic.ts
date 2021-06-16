/*
 * @Description: 
 * @Date: 2021-06-16 17:32:16
 * @LastEditTime: 2021-06-16 17:47:29
 */
import { AppRouteModule, AppRouteRecordRaw } from "../types";
const LAYOUT = () => import("@/layout/index.vue");


const NOT_FOUND_ROUTE: AppRouteModule = {
    path: "/:path(.*)*",
    name: "Error",
    component: LAYOUT,
    children: [
        {
            path: "/:path(.*)*",
            name: "error",
            component: () => import("@/layout/error/index.vue")
        }
    ]
}
const root: AppRouteRecordRaw = {
    name: "Root",
    path: "/",
    redirect:"/login",
    component: LAYOUT
}


const login: AppRouteRecordRaw = {
    path: "/login",
    name: "Login",
    component: () => import("@/layout/login/index.vue")
}

export const basicRouter = [
    root,
    login,
    NOT_FOUND_ROUTE
]