/*
 * @Description: 本都存储
 * @Date: 2021-06-21 11:10:28
 * @LastEditTime: 2021-06-21 14:12:07
 */

export const getSess = (key: any) => {
    return window.sessionStorage[key] ? JSON.parse(window.sessionStorage[key]) : false
}
export const setSess = (key: string, value: any) => {
    return window.sessionStorage[key] = JSON.stringify(value);
}