/*
 * @Description: viteconfig.ts
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-07-07 15:22:41
 */
import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import styleImport from 'vite-plugin-style-import';


export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    plugins: [
      vue(),
      // styleImport({
      //   libs: [{
      //     libraryName: 'ant-design-vue',
      //     resolveStyle: (name) => {
      //       return `ant-design-vue/es/${name}/style/index.less`;
      //     },
          // resolveComponent: (name) => {
          //   return `ant-design-vue/es/${name}/index.js`;
          // },
        // }]
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
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
            "border-radius-base": "2px",
            "success-color": "#52c41a", // 成功色
            "warning-color": "#faad14", // 警告色
            "error-color": "#f5222d", // 错误色
            "font-size-base": "14px", // 主字号
            "heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
            "text-color": "rgba(0, 0, 0, 0.65)", // 主文本色
            "text-color-secondary": "rgba(0, 0, 0, 0.45)", // 次文本色
            "disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
            "border-color-base": "#d9d9d9", // 边框色
            "box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)" // 浮层阴影
          },
          javascriptEnabled: true,
        },
      },
    },
    server: {
      proxy: {
        '/api': {
          target: "http://localhost:5000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
    }
  })
}