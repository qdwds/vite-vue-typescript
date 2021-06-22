<!--
 * @Description: v
 * @Date: 2021-06-16 16:12:43
 * @LastEditTime: 2021-06-22 14:31:00
-->
<template>
    <div class="bg-white-5000 dark:bg-black-500">
        <DarkNight></DarkNight>
        <button @click="drak">change drak</button>
        <div class="bg-yellow-200 w-10 h-10 dark:bg-dark-800 dark:text-white duration-700"></div>
        <div class="bg-yellow-200 w-10 h-10 bg-dark"></div>
        <div class="w-10 h-10 app-border"></div>
        <div class="icon"></div>
        <div class="bg-dark w-10 h-10"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DarkNight from "@/components/DarkNight/index.vue";
export default defineComponent({
    components:{
        DarkNight
    },
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