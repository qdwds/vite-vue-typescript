<!--
 * @Description: 暗夜主题切换
 * @Date: 2021-06-21 17:48:28
 * @LastEditTime: 2021-07-05 14:50:55
-->


<template>
    <div class="center">
        <Switch
            size="default"
            v-model:checked="checked"
            @change="handleGlobalColor"
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
.ant-switch {
    background: black;
}
.anticon {
    display: flex;
}
</style>