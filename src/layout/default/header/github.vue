<!--
 * @Description: github
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-06-21 16:57:56
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
        @click="openYuque"
    >
        <GithubOutlined class="text-xl" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GithubOutlined } from "@ant-design/icons-vue";

export default defineComponent({
    components: {
        GithubOutlined,
    },
    setup() {
        const openGithub = () => {
            window.open("http://www.baidu.com", "_blank");
        };
        return {
            openGithub,
        };
    },
});
</script>
