<!--
 * @Description: 导航菜单 递归组件
 * @Date: 2021-06-17 21:35:15
 * @LastEditTime: 2021-07-06 17:39:17
-->

<template>
    <div>
        <template v-if="router.children && router.children.length > 0">
            <SubMenu :key="router.name">
                <template #title>
                    <span>
                        <span>{{ router.meta.title }}</span>
                    </span>
                </template>
                <template v-for="r of router.children" :key="r.name">
                    <template v-if="r.children && r.children.length > 0">
                        <MenuItems :router="r"></MenuItems>
                    </template>
                    <template v-else>
                        <MenuItem
                            @click="handleRouteJump(r.name)"
                            :key="r.name"
                        >
                            <span>{{ r.meta.title }}</span>
                        </MenuItem>
                    </template>
                </template>
            </SubMenu>
        </template>
        <template v-else>
            <MenuItem :key="router.name" @click="handleRouteJump(router.name)">
                <span>{{ router.meta.title }}</span>
            </MenuItem>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Menu } from "ant-design-vue";
import { useRouter } from "vue-router";
export default defineComponent({
    props: ["router"],
    name: "MenuItems",
    components: {
        MenuItem: Menu.Item,
        SubMenu: Menu.SubMenu,
    },
    setup() {
        const route = useRouter();
        const handleRouteJump = (name: string) => {
            route.push({
                name,
            });
        };

        return {
            handleRouteJump,
        };
    },
});
</script>

<style scoped>
</style>