/*
 * @Description: viteconfig.ts
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-06-23 11:25:14
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
      WindiCSS(),
      //  动态加载 引起 windicss 失效
      // styleImport({
      //   libs: [
      //     {
      //       libraryName: 'ant-design-vue',
      //       esModule: true,
      //       resolveStyle: (name) => {
      //         return `ant-design-vue/es/${name}/style/index.css`
      //       }
      //     }
      //   ]
      // }),
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
              'primary-color':"#FF4400",
              'success-color': '#55D187', //  Success color
              'error-color': '#ED6F6F', //  False color
              'warning-color': '#EFBD47', //   Warning color
              'border-color-base': '#EEEEEE',
              'font-size-base': '14px', //  Main font size
              'border-radius-base': '2px', //  Component/float fillet
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  })
}