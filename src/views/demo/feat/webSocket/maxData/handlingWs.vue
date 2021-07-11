<!--
 * @Description: 
 * @Date: 2021-07-11 14:10:39
 * @LastEditTime: 2021-07-11 15:24:28
-->

<template>
    <div class="flex">
        <Input v-model:value="url" class="mr-2" />
        <Button @click="cennectEvent">连接</Button>
    </div>
    <div class="w-full h-full">
        <p v-for="message in messageList">
            {{ message }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, reactive, toRefs } from "vue";
import { Button, Input, message, Modal } from "ant-design-vue";
import { IMaxDadaState } from "./types";
import { sendOut } from "./notification";
export default defineComponent({
    components: {
        Button,
        Input,
        Modal,
    },
    setup() {
        const state = reactive<IMaxDadaState>({
            messageList: [],
            url: "ws://localhost:5002/ws/for",
        });
        let ws: WebSocket;
        let item: any = null;
        const cennectEvent = () => {
            sendOut()
            ws = new WebSocket(state.url);

            ws.onopen = (event) => {
                // message.success("WebSocket连接成功！");
            };

            ws.onmessage = (event: MessageEvent) => {
                item = window.requestIdleCallback(() => {
                    state.messageList.push(event.data);
                });
            };
        };

        onUnmounted(() => {
            ws.close();
            window.cancelIdleCallback(item);
        });
        return {
            ...toRefs(state),
            cennectEvent,
        };
    },
});
</script>

<style scoped>
</style>