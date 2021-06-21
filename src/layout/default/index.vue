<!--
 * @Description: 
 * @Date: 2021-06-16 17:36:34
 * @LastEditTime: 2021-06-21 16:08:20
-->
<template>
    <Layout class="w-full h-full">
        <LayoutSider :trigger="null" collapsible>
            <Menu></Menu>
        </LayoutSider>
        <Layout>
            <Header></Header>
            <Bar></Bar>
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
import Bar from "./bar/index.vue";
export default defineComponent({
    components: {
        LayoutSider:Layout.Sider,
        Layout,
        Header,
        Menu,
        Content,
        Bar,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped>
</style>