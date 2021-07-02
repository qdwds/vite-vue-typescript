<!--
 * @Description: header
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-02 12:10:41
-->
<template>
    <div class=" h-10 flex justify-between items-center pl-2 pr-2 bg-white bg-dark">
        <div
            class="h-10 w-10 icon-style"
            @click="$emit('update:collapsed', !collapsed)"
        >
            <component
                :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'"
            ></component>
            <!-- <Breadcrumb></Breadcrumb> -->
        </div>
        <div class="flex">
            <Yuque class="h-10 w-10 icon-style"></Yuque>
            <Github class="h-10 w-10 icon-style"></Github>
            <FullScreen class="h-10 w-10 icon-style"></FullScreen>
            <Setting class="h-10 w-10 icon-style"></Setting>
            <LockScreen class="h-10 w-10 icon-style"></LockScreen>
            <UserInfo class="h-10 w-24 icon-style"></UserInfo>
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
