<!--
 * @Description: 页面布局
 * @Date: 2021-06-16 17:36:34
 * @LastEditTime: 2021-07-09 14:42:46
-->
<template>
    <Layout class="w-full h-full ">
        <LayoutSider
            v-show="getMenuShowStore"
            :trigger="null"
            collapsible
            v-model:collapsed="collapsed"
        >
            <Menu></Menu>
        </LayoutSider>
        <Layout  class="bg-gray-200">
            <Header
                v-model:collapsed="collapsed"
                v-show="getHeaderShowStore"
            ></Header>
            <Tabs></Tabs>
            <Content></Content>
        </Layout>
    </Layout>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Layout } from "ant-design-vue";
import Header from "./header/index.vue";
import Content from "./content/index.vue";
import Menu from "./menu/index.vue";
import Tabs from "./tabs/index.vue";
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { useMenuStore } from "@/hooks/menus/useRouterMenu";
export default defineComponent({
    components: {
        LayoutSider: Layout.Sider,
        Layout,
        Header,
        Menu,
        Content,
        Tabs,
    },
    setup() {
        const collapsed = ref<boolean>(false);
        const { getMenuShowStore, setMenuShowStore, getHeaderShowStore } =
            useMenuStore();

        //  监控窗口改变
        const breakpoints = useBreakpoints(breakpointsTailwind);
        const lg = breakpoints.greater("lg");
        const md = breakpoints.greater("md");

        watch(lg, (lg) => {
            if (!lg) collapsed.value = true;
            else collapsed.value = false;
        });

        watch(md, (md) => {
            if (!md) setMenuShowStore(false);
            else setMenuShowStore(true);
        });
        return {
            getMenuShowStore,
            getHeaderShowStore,
            collapsed,
        };
    },
});
</script>

<style scoped>
</style>