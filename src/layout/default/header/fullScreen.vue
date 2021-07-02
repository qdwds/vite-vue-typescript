<!--
 * @Description: 全屏
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-02 11:12:10
-->
<template>
    <div
        @click="toggleFullScreen"
    >
        <CompressOutlined class="text-sm" />
    </div>
</template>

<script lang="ts" >
import { CompressOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
    components: {
        CompressOutlined,
    },
    setup() {
        //  切换全屏
        const toggleFullScreen = () => {
            const fullScreen = ref<Boolean>(false);
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                fullScreen.value = false;
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    fullScreen.value = true;
                }
            }
        };
        return {
            toggleFullScreen,
        };
    },
});
</script>
