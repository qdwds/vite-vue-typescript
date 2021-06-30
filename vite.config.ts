/*
 * @Description: viteconfig.ts
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-06-30 15:28:15
 */
import { UserConfig, ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path';
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
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
    css: {
      preprocessorOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    

  
  })
}