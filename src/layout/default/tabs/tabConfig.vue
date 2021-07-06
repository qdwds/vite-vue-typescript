<!--
 * @Description: 配置相关
 * @Date: 2021-07-01 21:34:45
 * @LastEditTime: 2021-07-06 16:25:30
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
import { useMenuStore } from "@/hooks/menus/useRouterMenu";
export default defineComponent({
    components: {
        SyncOutlined,
        FullscreenOutlined,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const { getMenuShowStore, setMenuShowStore ,setHeaderShowStore} = useMenuStore();
        const refreshRoute = () => {
            router.push({
                path: "/redirect" + unref(route).fullPath,
            });
        };
        const fullScreen = () => {
            if (getMenuShowStore.value) {
                setMenuShowStore(false)
                setHeaderShowStore(false)
            }
            else {
                setMenuShowStore(true)
                setHeaderShowStore(true)
            }
        };
        return {
            refreshRoute,
            fullScreen,
            getMenuShowStore
        };
    },
});
</script>

<style scoped>
</style>