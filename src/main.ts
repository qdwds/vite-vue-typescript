/*
 * @Description: main
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-06-18 10:17:26
 */
import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from "./router";
import { setupRouterGuard } from "@/router/guard";
import 'ant-design-vue/dist/antd.css';
import 'virtual:windi.css'

; (async () => {
    const app = createApp(App)

    //  加载路由
    setupRouter(app);

    setupRouterGuard();

    await router.isReady();

    app.mount('#app');
})()