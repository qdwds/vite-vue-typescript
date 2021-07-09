/*
 * @Description: wailwid.css 配置项
 * @Date: 2021-07-03 10:56:36
 * @LastEditTime: 2021-07-09 15:21:16
 */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        'box': 'box 0.8s ',
        'l20': 'left .2s',
        'l30': 'left .3s',
        'l40': 'left .4s',
        'l50': 'left .5s',
        'l60': 'left .6s',
        'l70': 'left .7s',
      },
      keyframes:{
        box: {
          '0%': { left: "100px", opacity: "0" },
          '100%': { left: "0px", opacity: "1" },
        },
        left: {
          "0%": { left: "70px", opacity: "0" },
          "10%": { opacity: "0" },
          "100%": { left: "0px", opacity: "1" },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
