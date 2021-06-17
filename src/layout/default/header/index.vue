<!--
 * @Description: header
 * @Date: 2021-06-17 15:35:50
 * @LastEditTime: 2021-06-17 15:53:25
-->

<template>
    <LayoutHeader style="background: #fff; padding: 0">
        header
    </LayoutHeader>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout } from "ant-design-vue";
export default defineComponent({
    components:{
        LayoutHeader:Layout.Header
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>