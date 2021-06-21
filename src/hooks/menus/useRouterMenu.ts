/*
 * @Description: 
 * @Date: 2021-06-21 10:49:43
 * @LastEditTime: 2021-06-21 14:16:44
 */
import {  useAppStoreWidthOut } from "@/store/modules/app";
import { computed, unref } from "vue";
const appStore = useAppStoreWidthOut();

export const useMenuStore = ()=>{
    const getOpenKeyStore = computed(()=>appStore.getOpenKeys).value;
    const getSelectedKeysStore = computed(()=>appStore.getSelectedKeys).value;
    const setOpenKeyStore = (openKeys:string[]) => {
        appStore.setOpenKeys(openKeys)
    }
    const setSelectedKeysStore = (selectedKeys:string[]) => {
        appStore.setSelectedKeys(selectedKeys)
    }
    return{
        getOpenKeyStore,
        getSelectedKeysStore,
        setOpenKeyStore,
        setSelectedKeysStore,
    }
}