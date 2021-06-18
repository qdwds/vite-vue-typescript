<!--
 * @Description: header
 * @Date: 2021-06-17 15:35:50
 * @LastEditTime: 2021-06-18 10:22:20
-->

<template>
    <LayoutHeader style="background: #fff; padding: 0" class="h-12">
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