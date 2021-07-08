/*
 * @Description: copy hooks
 * @Date: 2021-07-08 15:09:38
 * @LastEditTime: 2021-07-08 15:16:28
 */
import { message as Message } from "ant-design-vue";

const copy = (el:any) => {
    if (
        el.tagName.toLocaleLowerCase() == 'input' ||
        el.tagName.toLocaleLowerCase() == 'textarea'
    ) {
        if (!el.value) return;
        el.select();
        document.execCommand("Copy");
        Message.success(`复制成功：${el.value}`)
    } else {
        if (!el && !el.innerHTML) return;
        const i = document.createElement("input");
        i.value = el.innerHTML;
        i.select();
        document.execCommand("copy");
        Message.success(`复制成功：${i.value}`)
    }
}
export const useCopy = () =>{
    return {
        copy
    }
}