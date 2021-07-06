/*
 * @Description: 
 * @Date: 2021-06-21 10:49:43
 * @LastEditTime: 2021-07-06 16:06:07
 */
import { useAppStoreWidthOut } from "@/store/modules/app";
import { computed, unref } from "vue";
const appStore = useAppStoreWidthOut();

export const useMenuStore = () => {
    const getOpenKeyStore = computed(() => appStore.getOpenKeys).value;
    const getSelectedKeysStore = computed(() => appStore.getSelectedKeys).value;
    const setOpenKeyStore = (openKeys: string[]) => {
        appStore.setOpenKeys(openKeys)
    }
    const setSelectedKeysStore = (selectedKeys: string[]) => {
        appStore.setSelectedKeys(selectedKeys)
    }
    
    //  menu
    const getMenuShowStore = computed(() => unref(appStore.getMenuShow));
    const setMenuShowStore = (menu: boolean) => {
        appStore.setMenuShow(menu);
    }
    //  tab
    const getHeaderShowStore = computed(() => unref(appStore.getHeaderShow));
    const setHeaderShowStore = (tab: boolean) => {
        appStore.setHeaderShow(tab);
    }
    return {
        getOpenKeyStore,
        getSelectedKeysStore,
        setOpenKeyStore,
        setSelectedKeysStore,
        getMenuShowStore,
        setMenuShowStore,
        getHeaderShowStore,
        setHeaderShowStore,
    }
}