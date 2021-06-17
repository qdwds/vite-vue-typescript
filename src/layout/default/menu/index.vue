<!--
 * @Description: menu   
 * @Date: 2021-06-17 15:36:22
 * @LastEditTime: 2021-06-17 22:13:41
-->
<template>
    <div>
        <Menu
            theme="dark"
            mode="inline"
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
        >
            <template v-for="router of getMenuRoutes" :key="router.name">
                <MenuItems :router="router"></MenuItems>
            </template>
        </Menu>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useHandleRoutes } from "@/hooks/menus/useRouter";
import { useRouter } from "vue-router";
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
        return {
            getMenuRoutes,
            openKeys: [],
            selectedKeys: [],
        };
    },
});
</script>

<style scoped>
</style>