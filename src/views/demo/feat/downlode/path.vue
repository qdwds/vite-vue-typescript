<!--
 * @Description: 根据地址下载
 * @Date: 2021-07-07 11:23:20
 * @LastEditTime: 2021-07-08 14:19:30
-->

<template>
    <div>
        <Button @click="fileDownload">文件地址下载</Button>
        <iframe src="ifr" style="display: none"></iframe>
    </div>
</template>

<script lang="ts" >
import { defineComponent } from "vue-demi";
import { Button } from "ant-design-vue";
import { apiFilePath } from "@/api/download";
export default defineComponent({
    components: {
        Button,
    },
    setup() {
        const fileDownload = () => {
            // window.open("http://bpic.588ku.com/element_origin_min_pic/17/06/13/5c5a1442f0ec72e59829ee10d891f224.jpg%21r650")
            apiFilePath()
                .then((res) => {
                    console.log(res);
                    window.open(res, "_blank");
                })
                .catch((e) => console.log(e));
        };
        return {
            fileDownload,
        };
    },
});
</script>

<style scoped>
</style>