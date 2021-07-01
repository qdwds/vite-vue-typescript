/*
 * @Description: tabs
 * @Date: 2021-07-01 10:29:00
 * @LastEditTime: 2021-07-01 14:43:17
 */

import { computed, unref } from "vue";
import { useTabStoreWidthOut } from "@/store/modules/tabs";
import { ITabsRouteInfo } from "@/store/modules/tabs";
const tabStore = useTabStoreWidthOut();
export const useTabStore = () => {

    const getInfoTabs = computed(() => unref(tabStore.getInfoTabs)).value;
    const setInfoTabs = (tab:ITabsRouteInfo)=>{
        tabStore.setInfoTabs(tab)
    }
    const delInfoTabs = (tab:string)=>{
        tabStore.delInfoTabs(tab)
    }
    return {
        getInfoTabs,
        setInfoTabs,
        delInfoTabs
    }
}