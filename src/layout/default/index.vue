<!--
 * @Description: 页面布局
 * @Date: 2021-06-16 17:36:34
 * @LastEditTime: 2021-06-30 16:09:29
-->
<template>
    <Layout class="w-full h-full">
        <LayoutSider :trigger="null" collapsible>
            <Menu class="bg-dark"></Menu>
        </LayoutSider>
        <Layout>
            <Header></Header>
            <Tabs></Tabs>
            <Content></Content>
        </Layout>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
        return {};
    },
});
</script>

<style scoped>
</style>