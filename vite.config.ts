/*
 * @Description: viteconfig.ts
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-07-03 11:02:53
 */
import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    plugins: [
      vue(),
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