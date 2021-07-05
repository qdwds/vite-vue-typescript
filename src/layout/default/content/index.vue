<!--
 * @Description: content
 * @Date: 2021-06-17 15:36:46
 * @LastEditTime: 2021-07-05 15:03:48
-->
<template>
    <LayoutContent class="bg-dark bg-white dark">
        <RouterTransition></RouterTransition>
    </LayoutContent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RouterTransition from "@/components/RouterTransition/index.vue";
import { Layout } from "ant-design-vue";
export default defineComponent({
    components: {
        RouterTransition,
        LayoutContent: Layout.Content,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
</style>
