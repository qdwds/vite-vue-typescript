<!--
 * @Description: menu   
 * @Date: 2021-06-17 15:36:22
 * @LastEditTime: 2021-07-06 17:10:21
-->
<template>
    <div>
        <Menu
            theme="dark"
            mode="inline"
            :openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            @openChange="handleOpenSubMenu"
            @select="handleMenuSelect"
        >
            <template v-for="router of getMenuRoutes" :key="router.name">
                <MenuItems :router="router"></MenuItems>
            </template>
        </Menu>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useHandleRoutes } from "@/hooks/menus/useRouterfFeat";
import { useRouter } from "vue-router";
import MenuItems from "./components/MenuItems.vue";
import { Menu } from "ant-design-vue";
import { storage } from "@/utils/cache";

export default defineComponent({
    components: {
        MenuItems,
        Menu,
    },
    setup() {
        //  获取路由相关内容
        const router = useRouter();
        const routes = router.options.routes;
        const { fileterRoutes, menuRoutes, getAllMenuName } = useHandleRoutes();
        const getFilterRoutes = fileterRoutes(routes);
        const getMenuRoutes = menuRoutes(getFilterRoutes);
        const routesName = getAllMenuName(getFilterRoutes);
            
        const state = reactive({
            openKeys:storage.get("openKeys")|| [""], //  subMenu
            selectedKeys: storage.get("selectedKeys") || ["home"], // menuItem 默认选中
        });

        //  获取当前选中的submenu
        const handleOpenSubMenu = (openKeys: string[]) => {
            const latestOpenKey = openKeys.find(
                (key) => state.openKeys.indexOf(key) === -1
            );
            if (routesName.indexOf(latestOpenKey!) === -1) {
                state.openKeys = openKeys;
            } else {
                state.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
            storage.set("openKeys",state.openKeys)
        };

        //  获取当前选中的 menuItem
        const handleMenuSelect = ({ selectedKeys }: any) => {
            storage.set("selectedKeys",state.selectedKeys);
        };

        

        return {
            ...toRefs(state),
            getMenuRoutes,
            handleOpenSubMenu,
            handleMenuSelect,
        };
    },
});
</script>

<style scoped>
</style>