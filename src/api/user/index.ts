/*
 * @Description: 
 * @Date: 2021-07-08 11:54:31
 * @LastEditTime: 2021-07-08 11:59:14
 */


import request from "@/utils/http";
import { ILoginForm } from "@/views/login/types";


/**
 * 用户登录
 * @param data 
 * @returns 
 */
export const apiUserLogin = (data: ILoginForm) => {
    return request({
        url: "/user/login",
        method: "POST",
        data
    })
}