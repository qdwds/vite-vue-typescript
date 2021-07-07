/*
 * @Description: 文件上传进度条
 * @Author: 前端伪大叔
 * @Date: 2021-06-02 22:10:46
 * @LastEditTime: 2021-06-03 17:20:05
 * @yuque: http://www.yuque.com/qdwds
 */

import { notification, Progress } from "ant-design-vue";
import type { AxiosRequestConfig } from "axios";
import { h } from "vue";
export const uploadProgress = (config: AxiosRequestConfig) => {
    const filename = config.data.get("file").name
    const key = `${Math.random()}-${Date.now()}`;
    config.onUploadProgress = (progressEvent) => {
        let percent: number = (progressEvent.loaded / progressEvent.total * 100 | 0);
        notification.open({
            message: percent === 100 ? `${filename} - 上传完成` : `${filename} - 正在上传`,
            description: h(
                Progress,
                {
                    percent,
                    'stroke-color': {
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }
                },
            ),
            key,
            duration: percent === 100 ? 1.8 : null
        });
    }
};


