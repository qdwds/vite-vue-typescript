/*
 * @Description: windi.css 
 * @Date: 2021-06-17 10:59:46
 * @LastEditTime: 2021-07-02 11:15:26
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
      animation: {
        'box': 'wiggle 0.8s ',
        'l20': 'left .2s',
        'l30': 'left .3s',
        'l40': 'left .4s',
        'l50': 'left .5s',
        'l60': 'left .6s',
        'l70': 'left .7s',
      },
      keyframes: {
        wiggle: {
          '0%': { left: "100px", opacity: "0" },
          '100%': { left: "0px", opacity: "1" },
        },
        left: {
          "0%": { left: "70px", opacity: "0" },
          "10%": { opacity: "0" },
          "100%": { left: "0px", opacity: "1" },
        }
      },
    },
  },
  alias: { //  设置别名
  },
  shortcuts: { //  多类名组合使用
    "bg-dark": "dark:bg-dark-500 dark:text-white dark:duration-300",//  暗夜背景切换
    "center": "flex items-center justify-center",
    "icon-style": "p-1 rounded flex justify-center items-center hover:bg-gray-200 transition ease-in duration-400 cursor-pointer"
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