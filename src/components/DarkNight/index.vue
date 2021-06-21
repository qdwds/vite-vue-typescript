<!--
 * @Description: 暗夜主题切换
 * @Date: 2021-06-21 17:48:28
 * @LastEditTime: 2021-06-21 18:01:37
-->


<template>
    <div class="flex justify-center items-center">
        <Switch
            v-model:checked="checked"
            @change="handleGlobalColor"
            class="h-7 w-14 pl-1 pr-1"
        >
            <template #checkedChildren>
                <ArrowLeftOutlined />
            </template>
            <template #unCheckedChildren>
                <ArrowRightOutlined />
            </template>
        </Switch>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Switch } from "ant-design-vue";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";

export default defineComponent({
    components: {
        ArrowLeftOutlined,
        ArrowRightOutlined,
        Switch,
    },
    setup() {
        const checked = ref<boolean>(false);

        const handleGlobalColor = (checked: boolean) => {
            if (
                window.matchMedia("(prefers-color-scheme: dark)").matches &&
                checked
            ) {
                document.getElementById("html")?.classList.add("dark");
            } else {
                document.getElementById("html")?.classList.remove("dark");
            }
        };
        return {
            checked,
            handleGlobalColor,
        };
    },
});
</script>

<style scoped>
.ant-switch-loading-icon,
.ant-switch::after {
    top: 4px;
}
.ant-switch {
    background: black;
}
</style>