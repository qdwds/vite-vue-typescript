/*
 * @Description: 所有路由
 * @Date: 2021-06-16 16:20:14
 * @LastEditTime: 2021-07-06 16:49:50
 */

/**
 * 1000     welcome      
 * 2000     cytoscape    
 * 3000     Menu         
 * 4000     feat         
 * 5000     three            
 */

import { AppRouteRecordRaw } from "../types";
import { basicRouter } from "./basic";
const modules = import.meta.globEager("./modules/**/*.ts");

const routerModuleList:AppRouteRecordRaw[] = [];

Object.keys(modules).forEach(key=>{
    const mod = modules[key].default || {};
    const modList:any = Array.isArray(mod) ?[...mod] :[mod];
    routerModuleList.push(...modList);
})

export const routers = [
    ...basicRouter,
    ...routerModuleList,
]