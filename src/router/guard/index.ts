/*
 * @Description: 路由守卫
 * @Date: 2021-06-16 16:22:08
 * @LastEditTime: 2021-06-18 10:16:32
 */
import router from "../index";
import { nprogressGuard } from "./nprogressGuard";


export const setupRouterGuard = () =>{
    nprogressGuard(router)
}