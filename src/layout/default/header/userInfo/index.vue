<!--
 * @Description: 
 * @Date: 2021-06-21 15:31:16
 * @LastEditTime: 2021-07-02 12:07:53
-->
<template>
    <div>
        <Dropdown class="h-10 flex justify-center items-center overflow-hidden">
            <div>
                <Avatar class="mr-2">
                    <template #icon><UserOutlined class="text-sm" /> </template>
                </Avatar>
                <span class="truncate text-sm">admin</span>
            </div>
            <template #overlay>
                <Menu>
                    <MenuItem
                        :key="menu.id"
                        v-for="menu in icon_menu"
                        @click="iconMenuClick(menu.id)"
                    >
                        <span class="text-sm">{{ menu.name }}</span>
                    </MenuItem>
                </Menu>
            </template>
        </Dropdown>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { OIconMenu } from "./types";
import { Dropdown, Avatar, Menu } from "ant-design-vue";
export default defineComponent({
    components: {
        UserOutlined,
        Menu,
        MenuItem: Menu.Item,
        Dropdown,
        Avatar,
    },
    setup() {
        const router = useRouter();
        const icon_menu = ref<OIconMenu[]>([
            { id: 1, name: "锁定屏幕" },
            { id: 2, name: "退出登录" },
        ]);

        //  锁屏事件
        const lockScreen = () => {
            console.log("锁屏");
        };

        const iconMenuClick = (id: number): void => {
            switch (id) {
                case 1:
                    lockScreen();
                    break;
                case 2:
                    router.push({ path: "/" });
                    localStorage.clear();
                    sessionStorage.clear();
                    break;
            }
        };
        return {
            icon_menu,
            iconMenuClick,
        };
    },
});
</script>
