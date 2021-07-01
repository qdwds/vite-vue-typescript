/*
 * @Description: 路由类型
 * @Date: 2021-06-16 16:19:47
 * @LastEditTime: 2021-07-01 12:07:41
 */
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

export type Component<T extends any = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);


export interface RouterMeta {
    title:string,
    children?:boolean,
    orderNo?:number
    icon?:string
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit< RouteRecordRaw ,"meta">{
    path:string;
    name:string;
    component:Component | string;
    children?:AppRouteRecordRaw[],
    meta?:RouterMeta
}

export type AppRouteModule = AppRouteRecordRaw;
