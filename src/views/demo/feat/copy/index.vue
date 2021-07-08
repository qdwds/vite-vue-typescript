<!--
 * @Description: 剪切板
 * @Date: 2021-07-08 14:30:52
 * @LastEditTime: 2021-07-08 15:46:21
-->

<template>
    <div class="p-4 box-border">
        <div v-copy class="mb-4 text-center">写点什么呢？点我复制~</div>
        <Input
            v-model:value="val"
            v-copy
            class="mb-4"
            placeholder="点击copy"
        />
        <Textarea class="mb-4"  placeholder="点击copy" v-model:value="val" v-copy></Textarea>
        <div class="mb-4 flex items-center">
            <Input
                id="i"
                v-model:value="val"
                placeholder="点击copy"
                class="mr-4"
            />
            <Button @click="handleCopy">copy</Button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from "vue";
import { Input, Button } from "ant-design-vue";
import { useCopy } from "@/hooks/web/useCopy";
export default defineComponent({
    components: {
        Input: Input,
        Textarea: Input.TextArea,
        Button,
    },
    setup() {
        const val = ref<string>("");
        const handleCopy = () => {
            const i = document.getElementById("i");
            if (i) {
                const { copy } = useCopy();
                copy(i);
            }
        };
        return {
            val,
            handleCopy,
        };
    },
});
</script>

<style scoped>
</style>