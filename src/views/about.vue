<!--
 * @Description: v
 * @Date: 2021-06-16 16:12:43
 * @LastEditTime: 2021-06-21 17:30:58
-->
<template>
    <div class="bg-white-5000 dark:bg-black-500">
        <button @click="drak">change drak</button>
        <div class="bg-yellow-200 w-10 h-10 dark:bg-red-200 duration-700"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const drak = () => {
            
        };
        return {
            drak,
        };
    },
});
</script>

<style scoped>
</style>