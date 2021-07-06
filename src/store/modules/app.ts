/*
 * @Description: app
 * @Date: 2021-06-21 10:51:11
 * @LastEditTime: 2021-07-06 17:11:21
 */


import { store } from "@/store";
import { defineStore } from "pinia";
import { getSess, setSess,storage } from "@/utils/cache";


interface AppStore {
    menuShow: boolean,
    headerShow:boolean
}
export const useAppStore = defineStore({
    id: "app",
    state: (): AppStore => ({
        menuShow:true,
        headerShow:true
    }),
    getters: {
   
        getMenuShow():boolean{
            return this.menuShow;
        },
        getHeaderShow():boolean{
            return this.headerShow;
        }
    },
    actions: {
        setMenuShow(menu:boolean){
            this.menuShow = menu;
        },
        setHeaderShow(tab:boolean){
            this.headerShow = tab
        },
    }
})


export const useAppStoreWidthOut = () => {
    return useAppStore(store)
}