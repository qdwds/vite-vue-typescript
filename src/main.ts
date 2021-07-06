/*
 * @Description: main
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-07-06 17:41:21
 */
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from "./router";
import { setupRouterGuard } from "@/router/guard";
import { setupStore } from "@/store";
import "./styles/index.less";



async function bootstrap(){
    const app = createApp(App)
    setupStore(app);
    //  加载路由
    setupRouter(app);

    setupRouterGuard();

    await router.isReady();
 
    app.mount('#app');
}
bootstrap();