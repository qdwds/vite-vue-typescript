/*
 * @Description: viteconfig.ts
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-06-17 10:58:36
 */
import { UserConfig, ConfigEnv ,defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    plugins:[
      vue(),
      WindiCSS()
    ],
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