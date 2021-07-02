<!--
 * @Description: yuque
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-02 12:06:42
-->
<template>
    <div
        @click="openYuque"
    >
        <YuqueOutlined class="text-sm" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { YuqueOutlined } from "@ant-design/icons-vue";
export default defineComponent({
    components: {
        YuqueOutlined,
    },
    setup() {
        const openYuque = () => {
            window.open("http://www.yuque.com/qdwds", "_blank");
        };
        return {
            openYuque,
        };
    },
});
</script>