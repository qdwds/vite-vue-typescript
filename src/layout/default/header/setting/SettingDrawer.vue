<!--
 * @Description: 配置全局
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-06-21 18:06:10
-->
<template>
    <Drawer
        placement="right"
        closable
        keyboard
        :visible="settingDrawerShow"
        @close="afterVisibleChange"
    >
        <Divider>主题颜色</Divider>
        <DarkNight></DarkNight>
    </Drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Drawer, Switch } from "ant-design-vue";
import { Divider } from "ant-design-vue";
import DarkNight from "@/components/DarkNight/index.vue";
export default defineComponent({
    props: {
        settingDrawerShow: Boolean,
    },
    emits: ["changeSettingDrawer"],
    components: {
        Drawer,
        Switch,
        Divider,
        DarkNight,
    },
    setup(_, { emit }) {
        //  隐藏Drawer
        const afterVisibleChange = () => {
            emit("changeSettingDrawer", false);
        };

        return {
            afterVisibleChange,
        };
    },
});
</script>

<style scoped>
</style>