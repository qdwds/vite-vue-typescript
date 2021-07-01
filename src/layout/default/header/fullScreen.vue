<!--
 * @Description: 全屏
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-06-21 16:32:45
-->
<template>
    <div
        class="
            h-10
            w-10
            p-1
            rounded
            flex
            justify-center
            items-center
            hover:bg-gray-200
            transition
            ease-in
            duration-400
            cursor-pointer
        "
        @click="toggleFullScreen"
    >
        <CompressOutlined class="text-xl" />
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
