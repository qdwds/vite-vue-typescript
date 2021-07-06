/*
 * @Description: 
 * @Date: 2021-06-16 17:32:16
 * @LastEditTime: 2021-07-06 11:21:15
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
    redirect: "/login",
    component: LAYOUT
}


const login: AppRouteRecordRaw = {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue")
}

const redirect = {
    path: "/redirect/:path*",
    name: "Redirect",
    component: LAYOUT,
    children: [
        {
            path: "",
            name: "Redirect",
            component: () => import("@/views/redirect/index.vue")
        }
    ]
}
export const basicRouter = [
    root,
    login,
    redirect,
    NOT_FOUND_ROUTE
]