<!--
 * @Description: 
 * @Date: 2021-07-07 11:23:55
 * @LastEditTime: 2021-07-08 14:19:20
-->

<template>
    <div>
        <Button @click="fileDownload">文件流下载</Button>
    </div>
</template>

<script lang="ts" >
import { defineComponent } from "vue-demi";
import { Button } from "ant-design-vue";
import { apiFileBlob } from "@/api/download";
export default defineComponent({
    components: {
        Button,
    },
    setup() {
        const fileDownload = () => {
            apiFileBlob().then((res) => {
                const blob = new Blob([res], {
                    type: "image/png",
                });
                const url = window.URL.createObjectURL(blob);
                console.log(url);

                const a = document.createElement("a");
                a.download = `1.png`;
                a.href = url;
                a.click();
            });
        };
        return {
            fileDownload,
        };
    },
});
</script>

<style scoped>
</style>