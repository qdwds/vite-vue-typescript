/*
 * @Description: main
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-06-30 11:49:40
 */
import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from "./router";
import { setupRouterGuard } from "@/router/guard";
import { setupStore } from "@/store";
import 'ant-design-vue/dist/antd.css';
import 'virtual:windi.css'

import ant from "ant-design-vue";



; (async () => {
    const app = createApp(App)
    setupStore(app);
    //  加载路由
    setupRouter(app);
    app.use(ant)
    setupRouterGuard();

    await router.isReady();

    app.mount('#app');
})()