/*
 * @Description: windi.css 
 * @Date: 2021-06-17 10:59:46
 * @LastEditTime: 2021-06-23 11:17:57
 */
import { defineConfig } from 'windicss/helpers'
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
        ...colors,
      },
    },
  },
  alias: { //  设置别名
  },
  shortcuts: { //  多类名组合使用
    "bg-dark": "dark:bg-dark-500 dark:text-white dark:duration-300",//  暗夜背景切换
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