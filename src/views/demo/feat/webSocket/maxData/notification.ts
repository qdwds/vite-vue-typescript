/*
 * @Description: 
 * @Date: 2021-07-11 15:08:41
 * @LastEditTime: 2021-07-11 15:25:53
 */

import { notification } from "ant-design-vue";

export const sendOut= () => {
    notification.open({
        message: '通知',
        description:
            '10w条数据正在赶来的路上，耐心等待⌛️',
    });
}

export const cancel = () => {
    notification.open({
        message: '恭喜',
        description:
            '恭喜🎉，免过了10w条数据的带来的🍐',
    });
}