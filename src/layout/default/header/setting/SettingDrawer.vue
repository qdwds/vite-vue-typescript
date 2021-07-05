<!--
 * @Description: 配置全局
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-05 22:17:41
-->
<template>
    <Drawer
        placement="right"
        closable
        keyboard
        :visible="settingDrawerShow"
        @close="afterVisibleChange"
    >
        <div class="w-full h-full flex justify-center dark">
            <div class="w-4/5 h-full pt-14 box-border flex-col">
                <Divider>主题颜色</Divider>
                <DarkNight></DarkNight>
                <Divider>界面功能</Divider>
            </div>
        </div>
    </Drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Drawer, Switch } from "ant-design-vue";
import Divider from "@/components/Divider/index.vue";
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
