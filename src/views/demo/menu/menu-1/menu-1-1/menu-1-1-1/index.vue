<!--
 * @Description: 
 * @Date: 2021-06-17 20:42:33
 * @LastEditTime: 2021-07-01 16:57:43
-->


<template>
    <div class="w-full h-60 bg-yellow-500 text-center text-white text-xl hover:bg-yellow-600">
        menu-1
        <div class="h-40 bg-green-500 m-2 text-center hover:bg-green-600">
            menu-1-1
            <div class="h-20 bg-blue-500 m-2 text-center hover:bg-blue-600">menu-1-1-2</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped>
</style>