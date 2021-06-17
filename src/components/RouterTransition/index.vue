
<template>
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
@import "@/styles/transform/transform.less";
</style>