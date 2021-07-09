/*
 * @Description: 
 * @Date: 2021-07-09 11:15:42
 * @LastEditTime: 2021-07-09 15:02:06
 */


export enum STATUS {
    start = "start",
    accept = "accept",
    close = "close",
}


export interface IConnect {
    host: string,
    message: string,
    status: STATUS,
    messageList: string[]
}