<!--
 * @Description: 数据大量数据
 * @Date: 2021-07-08 16:14:02
 * @LastEditTime: 2021-07-11 14:46:23
-->

<template>
    <div>
        <Title title="WebSoket连接 - 处理大量数据"></Title>
        <div class="flex p-4 justify-between">
            <Card title="未优化" class="w-full h-full mr-1 ">
              <NormalWs></NormalWs>
            </Card>
            <Card title="优化版" class="w-full h-full ml-1">
              <HandlingWs></HandlingWs>
            </Card>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Title } from "@/components/Title";
import { Card } from "ant-design-vue";
import NormalWs from "./normalWs.vue";
import HandlingWs from "./handlingWs.vue";
export default defineComponent({
    components:{
        Title,
        Card,
        NormalWs,
        HandlingWs,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>
