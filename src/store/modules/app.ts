/*
 * @Description: app
 * @Date: 2021-06-21 10:51:11
 * @LastEditTime: 2021-07-06 16:04:44
 */


import { store } from "@/store";
import { defineStore } from "pinia";
import { getSess, setSess } from "@/utils/storage";


interface AppStore {
    openKeys: string[];
    selectedKeys: string[],
    menuShow: boolean,
    headerShow:boolean
}
export const useAppStore = defineStore({
    id: "app",
    state: (): AppStore => ({
        openKeys: [],
        selectedKeys: ["home"],
        menuShow:true,
        headerShow:true
    }),
    getters: {
        getOpenKeys(): string[] {
            return getSess("openKeys") || this.openKeys;
        },
        getSelectedKeys(): string[] {
            return getSess("selectedKeys") || this.selectedKeys;
        },
        getMenuShow():boolean{
            return this.menuShow;
        },
        getHeaderShow():boolean{
            return this.headerShow;
        }
    },
    actions: {
        setOpenKeys(openKeys: string[]) {
            this.openKeys = openKeys;
            setSess("openKeys", openKeys)
        },
        setSelectedKeys(selectedKeys: string[]) {
            this.selectedKeys = selectedKeys;
            setSess("selectedKeys", selectedKeys)
        },
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