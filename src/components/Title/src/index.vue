<!--
 * @Description: 
 * @Date: 2021-07-08 16:49:33
 * @LastEditTime: 2021-07-08 17:04:39
-->
<template>
    <div class="w-full h-14 pl-4 mb-2 bg-white flex items-center text-xl">
        <h1>{{ title }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Title",
    props: {
        title: {
            type: String,
            default: "title",
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped>
</style>