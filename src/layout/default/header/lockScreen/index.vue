<!--
 * @Description: 
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-02 11:13:05
-->
<template>
    <div
        @click="handleLockScreen"
    >
        <LockOutlined class="text-sm" />
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
