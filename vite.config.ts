/*
 * @Description: viteconfig.ts
 * @Date: 2021-06-16 15:53:17
 * @LastEditTime: 2021-06-16 16:11:16
 */
import { UserConfig, ConfigEnv ,defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    plugins:[
      vue()
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