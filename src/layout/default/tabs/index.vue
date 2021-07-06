<!--
 * @Description: tabs
 * @Date: 2021-06-21 16:07:17
 * @LastEditTime: 2021-07-06 16:07:08
-->

<template>
    <div
        class="
            h-8
            flex
            justify-between
            pl-1
            pr-1
            box-border
            border-t
            border-b
            border-gray-100
            dark:border-gray-700
            dark
        "
    >
        <Tabs></Tabs>
        <TabConfig></TabConfig>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tabs from "./tabs.vue";
import TabConfig from "./tabConfig.vue";
export default defineComponent({
    components:{
        Tabs,
        TabConfig,
    },
});
</script>