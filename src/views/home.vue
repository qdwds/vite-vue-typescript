<!--
 * @Description: v
 * @Date: 2021-06-16 16:12:43
 * @LastEditTime: 2021-06-18 11:23:57
-->
<template>
    <div>
        <div>
            当前选中的MenuItem"selectedKeys" - {{ selectedKeys }} 
        </div>
        <div>
           当前的SubMenu "openKeys" -{{ openKeys }}
        </div>
        <Menu
            style="width: 256px"
            mode="inline"
            :openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            @openChange="onOpenChange"
        >
            <SubMenu key="sub1">
                <template #title>
                    <span>
                        <MailOutlined />
                        <span>Navigation One</span>
                    </span>
                </template>
                <MenuItem key="1">Option 1</MenuItem>
                <MenuItem key="2">Option 2</MenuItem>
                <MenuItem key="3">Option 3</MenuItem>
                <MenuItem key="4">Option 4</MenuItem>
            </SubMenu>
            <SubMenu key="sub2">
                <template #title>
                    <span>
                        <AppstoreOutlined />
                        <span>Navigation Two</span>
                    </span>
                </template>
                <MenuItem key="5">Option 5</MenuItem>
                <MenuItem key="6">Option 6</MenuItem>
                <SubMenu key="sub3" title="Submenu">
                    <MenuItem key="7">Option 7</MenuItem>
                    <MenuItem key="8">Option 8</MenuItem>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4">
                <template #title>
                    <span>
                        <SettingOutlined />
                        <span>Navigation Three</span>
                    </span>
                </template>
                <MenuItem key="9">Option 9</MenuItem>
                <MenuItem key="10">Option 10</MenuItem>
                <MenuItem key="11">Option 11</MenuItem>
                <MenuItem key="12">Option 12</MenuItem>
            </SubMenu>
        </Menu>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Menu } from "ant-design-vue";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
    setup() {
        const state = reactive({
            rootSubmenuKeys: ["sub1", "sub2", "sub4"],
            openKeys: ["sub1"],
            selectedKeys: [],
        });
        const onOpenChange = (openKeys: string[]) => {
            const latestOpenKey = openKeys.find(
                (key) => state.openKeys.indexOf(key) === -1
            );
            if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
                state.openKeys = openKeys;
            } else {
                state.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        };
        return {
            ...toRefs(state),
            onOpenChange,
        };
    },
    components: {
        MailOutlined,
        AppstoreOutlined,
        SettingOutlined,
        Menu,
        SubMenu: Menu.SubMenu,
        MenuItem: Menu.Item,
    },
});
</script>