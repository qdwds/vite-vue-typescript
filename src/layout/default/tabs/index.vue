<!--
 * @Description: tabs
 * @Date: 2021-06-21 16:07:17
 * @LastEditTime: 2021-07-01 21:53:05
-->

<template>
    <div
        class="
            h-8
            bg-white
            border-t-1
            border-b-1
            border-l-0
            border-r-0
            border-gray-100
            border-solid
            bg-dark
            flex
            justify-between
            dark:border-gray-600

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
    }
});
</script>