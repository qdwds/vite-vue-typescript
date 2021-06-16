/*
 * @Description: main
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-06-16 16:49:52
 */
import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from "./router";
import 'ant-design-vue/dist/antd.css';


; (async () => {
    const app = createApp(App)

    //  加载路由
    setupRouter(app)

    await router.isReady()

    app.mount('#app')
})()