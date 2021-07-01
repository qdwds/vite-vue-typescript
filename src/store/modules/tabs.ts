/*
 * @Description: tabs
 * @Date: 2021-07-01 10:24:52
 * @LastEditTime: 2021-07-01 14:53:09
 */

import { RouteParams, RouteQueryAndHash, RouteRecordName } from "vue-router";
import { defineStore } from "pinia";
import { store } from "..";
interface TabStore {
    infoTabs: ITabsRouteInfo[]
}
export interface ITabsRouteInfo {
    fullPath: string,
    hash: string,
    meta: Record<string | number | symbol, unknown>,
    name: RouteRecordName | null | undefined,
    params: RouteParams,
    path: string,
    query: RouteQueryAndHash
}
export const useTabStore = defineStore({
    id: "tabs",
    state: (): TabStore => ({
        infoTabs: [],
    }),
    getters: {
        getInfoTabs(): any {
            return this.infoTabs
        }
    },
    actions: {
        setInfoTabs(tab: ITabsRouteInfo) {
            const isExists = this.infoTabs.some((r: ITabsRouteInfo) => r.fullPath === tab.fullPath);
            if (!isExists) {
                this.infoTabs.push(tab);
            }
        },
        delInfoTabs(tab: string) {
            //  this.infoTabs = this.infoTabs.filter((r:ITabsRouteInfo) => {
            //     console.log(r.fullPath !== tab);
            //   r.fullPath == tab
            // });
            // console.log(this.infoTabs);

            const index = this.infoTabs.findIndex(item => item.fullPath === tab);
            this.infoTabs.splice(index, 1)

        }
    }
})

export const useTabStoreWidthOut = () => {
    return useTabStore(store);
}