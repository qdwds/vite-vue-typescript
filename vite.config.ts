/*
 * @Description: viteconfig.ts
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-07-02 15:59:28
 */
import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path';
import styleImport from 'vite-plugin-style-import'

export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    plugins: [
      vue(),
      //  动态加载 引起 windicss 失效
      WindiCSS(),
    ],
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    resolve: {
      alias: {
        //  @/ => src/
        "@": resolve(__dirname, "src"),
        //  #/ => types/
        "#": resolve(__dirname, "types"),
      },
    },
  })
}