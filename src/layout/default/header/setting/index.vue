<!--
 * @Description: 全局设置
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-02 12:07:10
-->
<template>
     <div
        @click="changeSettingDrawer"
    >
        <SettingOutlined class="text-sm" />
        <SettingDrawer
            @changeSettingDrawer="changeSettingDrawer"
            :settingDrawerShow="settingDrawerShow"
        ></SettingDrawer>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SettingOutlined } from "@ant-design/icons-vue";
import SettingDrawer from "./SettingDrawer.vue";
export default defineComponent({
    components: {
        SettingOutlined,
        SettingDrawer,
    },
    setup() {
        //  drawer 显示转态
        const settingDrawerShow = ref<boolean>(false);
        const changeSettingDrawer = (): void => {
            settingDrawerShow.value = !settingDrawerShow.value;
        };

        return {
            settingDrawerShow,
            changeSettingDrawer,
        };
    },
});
</script>
