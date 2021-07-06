<!--
 * @Description: 配置相关
 * @Date: 2021-07-01 21:34:45
 * @LastEditTime: 2021-07-06 11:28:24
-->


<template>
    <div class="mr-2 flex">
        <SyncOutlined
            class="
                h-8
                w-8
                text-sm
                cursor-pointer
                rounded
                center
                opacity-60
                hover:opacity-100
            "
            @click="refreshRoute"
        />
        <FullscreenOutlined
            class="
                h-8
                w-8
                text-sm
                cursor-pointer
                rounded
                center
                opacity-60
                hover:opacity-100
            "
            @click="fullScreen"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, unref } from "vue";
import { SyncOutlined, FullscreenOutlined } from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
    components: {
        SyncOutlined,
        FullscreenOutlined,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const refreshRoute = () => {
            router.push({
                path: "/redirect" + unref(route).fullPath,
            });
        };
        const fullScreen = () => {
            console.log("切换全屏，移出其他组件");
        };
        return {
            refreshRoute,
            fullScreen,
        };
    },
});
</script>

<style scoped>
</style>