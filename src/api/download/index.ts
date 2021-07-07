/*
 * @Description: 文件下载
 * @Date: 2021-07-07 15:20:11
 * @LastEditTime: 2021-07-07 16:01:57
 */

import request  from "@/utils/http";

export const apiFilePath = () =>{
    return request ({
        url:"/file/path",
        method:"GET"
    })
}

export const apiFileBlob = () =>{
    return request({
        url:"file/blob",
        method:"GET",
        responseType:"blob"
    })
}