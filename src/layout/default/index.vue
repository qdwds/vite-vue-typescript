<!--
 * @Description: 页面布局
 * @Date: 2021-06-16 17:36:34
 * @LastEditTime: 2021-07-02 15:54:24
-->
<template>
    <Layout class="w-full h-full">
        <LayoutSider :trigger="null" collapsible v-model:collapsed="collapsed">
            <Menu></Menu>
        </LayoutSider>
        <Layout>
            <Header v-model:collapsed="collapsed"></Header>
            <Tabs></Tabs>
            <Content></Content>
        </Layout>
    </Layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Layout } from "ant-design-vue";
import Header from "./header/index.vue";
import Content from "./content/index.vue";
import Menu from "./menu/index.vue";
import Tabs from "./tabs/index.vue";
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
        return {
            collapsed,
        };
    },
});
</script>

<style scoped>
</style>