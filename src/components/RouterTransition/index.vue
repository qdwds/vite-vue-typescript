<!--
 * @Description: 路由切换过度
 * @Date: 2021-06-17 15:57:37
 * @LastEditTime: 2021-06-17 16:00:42
-->

<template>
    <router-view>
        <template #default="{ Component, route }">
            <transition name="zoom-fade" mode="out-in" appear>
                <component :is="Component" :key="route.fullPath"></component>
            </transition>
        </template>
    </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
// @import "@/styles/transition.less";
</style>