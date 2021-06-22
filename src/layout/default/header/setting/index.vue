<!--
 * @Description: 全局设置
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-06-22 14:56:26
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
        @click="changeSettingDrawer"
    >
        <SettingOutlined class="text-xl" />
        
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
        const settingDrawerShow = ref<Boolean>(false);
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
