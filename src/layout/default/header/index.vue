<!--
 * @Description: 
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-06-23 11:19:12
-->
<template>
    <LayoutHeader
        class="
            h-10
            flex
            justify-between
            items-center
            pl-2
            pr-2
            bg-white
            bg-dark
        "
    >
        <div>mbs</div>
        <div class="flex">
            <Yuque></Yuque>
            <Github></Github>
            <FullScreen></FullScreen>
            <Setting></Setting>
            <LockScreen></LockScreen>
            <UserInfo></UserInfo>
            <!-- 
            <UserInfo></UserInfo> -->
        </div>
    </LayoutHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";
import Setting from "./setting/index.vue";
// import Breadcrumb from "./breadcrumb/index.vue";
import FullScreen from "./fullScreen/index.vue";
import UserInfo from "./userInfo/index.vue";
import Github from "./github/index.vue";
import LockScreen from "./lockScreen/index.vue";
import Yuque from "./yuque/index.vue";
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
    },
    setup() {
        return {};
    },
});
</script>
