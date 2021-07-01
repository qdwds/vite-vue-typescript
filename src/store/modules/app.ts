/*
 * @Description: app
 * @Date: 2021-06-21 10:51:11
 * @LastEditTime: 2021-07-01 10:19:06
 */


import { store } from "@/store";
import { defineStore } from "pinia";
import { getSess, setSess } from "@/utils/storage";


interface AppStore {
    openKeys: string[];
    selectedKeys: string[]
}
export const useAppStore = defineStore({
    id: "app",
    state: (): AppStore => ({
        openKeys: [],
        selectedKeys: ["home"]
    }),
    getters: {
        getOpenKeys(): string[] {
            return getSess("openKeys") || this.openKeys;
        },
        getSelectedKeys(): string[] {
            return getSess("selectedKeys") || this.selectedKeys;
        },
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
    }
})


export const useAppStoreWidthOut = () => {
    return useAppStore(store)
}