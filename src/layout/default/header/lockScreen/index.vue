<!--
 * @Description: 
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-06-21 16:38:30
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
        @click="handleLockScreen"
    >
        <LockOutlined class="text-xl" />
    </div>
    <!-- <LockScreenDialog ></LockScreenDialog> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { LockOutlined } from "@ant-design/icons-vue";
// import LockScreenDialog from "./lockScreenDialog/index.vue";
export default defineComponent({
    components: {
        LockOutlined,
        // LockScreenDialog,
    },
    setup() {
        const locking = ref<Boolean>(false);
        const handleLockScreen = () => {
        };
        return {
            handleLockScreen,
            locking,
        };
    },
});
</script>
