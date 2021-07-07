<!--
 * @Description: 文件下载
 * @Date: 2021-07-01 22:41:48
 * @LastEditTime: 2021-07-07 11:29:29
-->
<template>
    <div>
        <Card
            class="mt-4"
            :title="c.title"
            v-for="(c, index) in coms"
            :key="c.com"
        >
            <component :is="c.com"></component>
        </Card>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { IDownLoad } from "./types";
import { Card } from "ant-design-vue";
import Blob from "./blob.vue";
import Path from "./path.vue";
export default defineComponent({
    components:{
        Blob,
        Path,
        Card,
    },
    setup() {
        const state = reactive<IDownLoad>({
            coms: [
                { title: "文件流", com: "Blob" },
                { title: "地址1", com: "Path" }
            ],
        });

        return {
            ...toRefs(state)
        };
    },
});
</script>

<style scoped>
</style>