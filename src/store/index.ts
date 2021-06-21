/*
 * @Description: 面向未来 vuex-5
 * @Date: 2021-06-21 10:39:39
 * @LastEditTime: 2021-06-21 10:45:59
 */
import { createPinia } from "pinia";
import type { App } from "vue";

const store = createPinia();

export const setupStore = (app:App<Element>) =>{
    app.use(store)
}
export {
    store
}