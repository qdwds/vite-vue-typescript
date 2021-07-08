/*
 * @Description: axios 封装
 * @Author: 前端伪大叔
 * @Date: 2021-06-02 21:01:54
 * @LastEditTime: 2021-07-08 14:24:27
 * @yuque: http://www.yuque.com/qdwds
 */

import axios, { AxiosError } from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
// import { baseURL } from "@/utils/env";
import { responseStatusCode } from "./status";
import { storage } from "@/utils/cache";
// import { uploadProgress } from "./progress";
// import { isFormData } from "../../../../xue/vue3-typescript/src/utils/validateType";
const request = axios.create({
    timeout: 30000,
    baseURL: "/api" 
})

request.interceptors.request.use(
    (config:any) => {
        const token = storage.get("USER_AUTH");
        if(token)
            config.headers.Authorization = token;
        // if(isFormData(config.data)){
        //     uploadProgress(config)
        // }
        return config
    },
    (error: any): any => {
        return Promise.reject(error)
    }
)


request.interceptors.response.use(
    (response:any) => {
        return response.data
    },
    (error: AxiosError): any => {
        if (error && error.response) {
            responseStatusCode(error.response?.status);
        } else {
            return Promise.reject(error);
        }
    }
)

export default request