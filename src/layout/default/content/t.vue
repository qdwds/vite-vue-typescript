<!--
 * @Description: 
 * @Date: 2021-06-17 17:48:01
 * @LastEditTime: 2021-06-17 17:56:26
-->


<template>
    <div >
        <Button
            type="primary"
            @click="toggleCollapsed"
            style="margin-bottom: 16px"
        >
            <MenuUnfoldOutlined v-if="collapsed" />
            <MenuFoldOutlined v-else />
        </Button>
        <Menu
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed"
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
        >
            <SubMenu key="1">
                <template #title>
                    <span>
                        <MailOutlined />
                        <span>111111111</span>
                    </span>
                </template>
                <MenuItem key="11">Option 5</MenuItem>
                <MenuItem key="111">Option 6</MenuItem>
                <SubMenu key="2">
                    <template #title>
                        <span>
                            <MailOutlined />
                            <span>2222222</span>
                        </span>
                    </template>
                    <MenuItem key="22">Option 5</MenuItem>
                    <MenuItem key="222">Option 6</MenuItem>
                    <SubMenu key="3">
                        <template #title>
                            <span>
                                <MailOutlined />
                                <span>333333</span>
                            </span>
                        </template>
                        <MenuItem key="33">Option 5</MenuItem>
                        <MenuItem key="333">Option 6</MenuItem>
                    </SubMenu>
                </SubMenu>
            </SubMenu>
        </Menu>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { Menu, Button } from "ant-design-vue";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
    setup() {
        const state = reactive({
            collapsed: false,
            selectedKeys: ["1"],
            openKeys: ["sub1"],
            preOpenKeys: ["sub1"],
        });

        watch(
            () => state.openKeys,
            (val, oldVal) => {
                state.preOpenKeys = oldVal;
            }
        );
        const toggleCollapsed = () => {
            state.collapsed = !state.collapsed;
            state.openKeys = state.collapsed ? [] : state.preOpenKeys;
        };

        return {
            ...toRefs(state),
            toggleCollapsed,
        };
    },
    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        PieChartOutlined,
        MailOutlined,
        DesktopOutlined,
        InboxOutlined,
        AppstoreOutlined,
        Menu,
        SubMenu: Menu.SubMenu,
        MenuItem: Menu.Item,
        Button,
    },
});
</script>