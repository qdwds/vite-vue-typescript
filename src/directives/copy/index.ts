/*
 * @Description: copy 指令
 * @Date: 2021-07-08 14:34:29
 * @LastEditTime: 2021-07-08 15:11:50
 */

import type { App, Directive } from "vue";

import { useCopy } from "@/hooks/web/useCopy";
const { copy } = useCopy();

const copyDircetive: Directive = {
    mounted(el) {
        el.addEventListener('click', () => {
            copy(el);
        })
    }
}


export const setupCopyDirective = (app: App) => {
    app.directive("copy", copyDircetive)
}
export default copyDircetive