<!--
 * @Description: 
 * @Date: 2021-06-16 17:41:07
 * @LastEditTime: 2021-06-16 18:07:35
-->

<template>
    <div id="login">
        
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

<style lang="less" scoped>
@import "@/styles/animation/login.less";
#login {
    width: 100vw;
    height: 100vh;
    animation: linears 20s infinite;
    background: linear-gradient(
        125deg,
        #2980b9,
        #633bd3,
        #8e44ad,
        #192f44,
        #27ae60
    );
    background-size: 800%;
    z-index: -99;
}
</style>