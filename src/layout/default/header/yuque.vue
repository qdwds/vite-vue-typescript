<!--
 * @Description: yuque
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-01 22:34:05
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
        <YuqueOutlined class="text-xl" />
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