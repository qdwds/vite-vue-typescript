<!--
 * @Description: content
 * @Date: 2021-06-17 15:36:46
 * @LastEditTime: 2021-07-09 14:51:54
-->
<template>
    <LayoutContent class="relative dark bg-gray-200" id="context">
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
#context {
    height: calc(100vh - 4.5rem);
    overflow-y: auto;
}
</style>
