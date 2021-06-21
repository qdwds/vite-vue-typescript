/*
 * @Description: windi.css 
 * @Date: 2021-06-17 10:59:46
 * @LastEditTime: 2021-06-21 17:06:13
 */
import { defineConfig } from 'windicss/helpers'
// import formsPlugin from 'windicss/plugin/forms'
import colors from 'windicss/colors';
export default defineConfig({
  darkMode: 'class',
  preflight: false,  // 样式重置
  safelist: 'p-3 p-4 p-5',
  theme: {    //  重新配置
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        ...colors
      },
    },
  },
  alias: { //  设置别名
    'hstack': 'flex items-center',
  },
  // plugins: [formsPlugin],
  extract: {
    include: [
      'src/**/*.{vue,html,jsx,tsx}'
    ],
    exclude: [
      'node_modules',
      '.git'
    ],
  },
})