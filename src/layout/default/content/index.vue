<!--
 * @Description: content
 * @Date: 2021-06-17 15:36:46
 * @LastEditTime: 2021-06-17 17:47:51
-->
<template>
    <LayoutContent
        :style="{
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
        }"
    >
    <router-link to="/t/home">home</router-link>
    <br>
    <router-link to="/t/about">about</router-link>


<T></T>


<router-view>
            <template #default="{ Component, route }">
                <transition name="zoom-fade" mode="out-in" appear>
                    <component
                        :is="Component"
                        :key="route.fullPath"
                    ></component>
                </transition>
            </template>
        </router-view>

















        
    </LayoutContent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RouterTransition from "@/components/RouterTransition/index.vue";
import { Layout } from "ant-design-vue";
import { useRouter } from "vue-router";
import T from "./t.vue";
export default defineComponent({
    components: {
        RouterTransition,
        LayoutContent: Layout.Content,
        T,
    },
    setup() {
        const router = useRouter();
        console.log(router.options.routes);

        return {};
    },
});
</script>

<style lang="less" scoped>
</style>
