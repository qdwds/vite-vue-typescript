<!--
 * @Description: menu   
 * @Date: 2021-06-17 15:36:22
 * @LastEditTime: 2021-06-18 12:10:58
-->
<template>
    <div>
        <div>submenu {{ openKeys }}</div>
        <div>menuitem {{ selectedKeys }}</div>
        <Menu
            theme="dark"
            mode="inline"
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            @openChange="handleOpenSubMenu"
            @click="c"
        >
            <template v-for="router of getMenuRoutes" :key="router.name">
                <MenuItems :router="router"></MenuItems>
            </template>
        </Menu>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useHandleRoutes } from "@/hooks/menus/useRouter";
import { useRoute, useRouter } from "vue-router";
import MenuItems from "./components/MenuItems.vue";
import { Menu } from "ant-design-vue";

export default defineComponent({
    components: {
        MenuItems,
        Menu,
    },
    setup() {
        const router = useRouter();
        const { fileterRoutes, menuRoutes } = useHandleRoutes();
        const getFilterRoutes = fileterRoutes(router.options.routes);
        const getMenuRoutes = menuRoutes(getFilterRoutes);

        const route = useRoute();
        console.log(route);
        
        const state = reactive({
            openKeys: [ "Menu", "Menu-1","Menu-1-1"], //  subMenu
            selectedKeys: [], // menuItem 默认选中
        });

        const handleOpenSubMenu = (submenu: string[]) => {
            console.log(submenu);
        };


        const c = (MenuItem :any)=>{
            const {keyPath} = MenuItem ;
            if(keyPath.length > 1){
                
            }else{
                state.selectedKeys = keyPath;
                console.log( state.selectedKeys);
                
            }
        }
        return {
            getMenuRoutes,
            handleOpenSubMenu,
            ...toRefs(state),
            c,
        };
    },
});
</script>

<style scoped>
</style>