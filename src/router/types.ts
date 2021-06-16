/*
 * @Description: 路由类型
 * @Date: 2021-06-16 16:19:47
 * @LastEditTime: 2021-06-16 17:35:44
 */
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

export type Component<T extends any = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);


export interface RouterMeta {
    title:string,

    icon?:string
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit< RouteRecordRaw ,"meta">{
    name:string;
    path:string;
    component:Component | string;
    children?:AppRouteRecordRaw[],
}

export type AppRouteModule = AppRouteRecordRaw;