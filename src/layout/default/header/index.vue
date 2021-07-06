<!--
 * @Description: header
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-06 11:32:28
-->
<template>
    <div class="h-10 flex justify-between items-center pl-2 pr-2 dark">
        <div
            class="h-10 w-10 header_icon"
            @click="$emit('update:collapsed', !collapsed)"
        >
            <component
                :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'"
            ></component>
            <!-- <Breadcrumb></Breadcrumb> -->
        </div>
        <div class="flex">
            <Yuque class="h-10 w-10 header_icon"></Yuque>
            <Github class="h-10 w-10 header_icon"></Github>
            <FullScreen class="h-10 w-10 header_icon"></FullScreen>
            <!-- <Setting class="h-10 w-10 header_icon"></Setting> -->
            <LockScreen class="h-10 w-10 header_icon"></LockScreen>
            <UserInfo class="h-10 w-24 header_icon"></UserInfo>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";
import Setting from "./setting/index.vue";
// import Breadcrumb from "./breadcrumb/index.vue";
import FullScreen from "./fullScreen.vue";
import UserInfo from "./userInfo/index.vue";
import Github from "./github.vue";
import LockScreen from "./lockScreen/index.vue";
import Yuque from "./yuque.vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
export default defineComponent({
    name: "Header",

    components: {
        LayoutHeader: Layout.Header,
        Setting,
        // Breadcrumb,
        FullScreen,
        UserInfo,
        Github,
        LockScreen,
        Yuque,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["update:collapsed"],
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
:deep(.ant-layout-header) {
    height: 2.5rem !important;
}
</style>
