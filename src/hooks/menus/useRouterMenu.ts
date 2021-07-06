/*
 * @Description: 
 * @Date: 2021-06-21 10:49:43
 * @LastEditTime: 2021-07-06 17:11:01
 */
import { useAppStoreWidthOut } from "@/store/modules/app";
import { computed, unref } from "vue";
const appStore = useAppStoreWidthOut();

export const useMenuStore = () => {
    
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
        getMenuShowStore,
        setMenuShowStore,
        getHeaderShowStore,
        setHeaderShowStore,
    }
}