<!--
 * @Description: github
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-02 12:07:00
-->
<template>
    <div
        @click="openGithub"
    >
        <GithubOutlined class="text-sm" />
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
