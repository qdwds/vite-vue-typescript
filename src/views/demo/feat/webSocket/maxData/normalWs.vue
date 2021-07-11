<!--
 * @Description: 未优化版
 * @Date: 2021-07-11 14:04:35
 * @LastEditTime: 2021-07-11 15:14:16
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
    <Modal v-model:visible="visible" title="警告" @ok="handleOk" @cancel="handleCancel">
        <h1 class="text-center text-2xl mb-4">请注意</h1>
        <p>
            即将接受来之webScoket传来的数据，可能(肯定)会造成页面卡死。请做好心里准备，如果不想电脑卡死可以测试优化版本！！
        </p>
    </Modal>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, reactive, toRefs } from "vue";
import { Button, Input, message, Modal } from "ant-design-vue";
import { IMaxDadaState } from "./types";
import { sendOut,cancel } from "./notification";
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
            visible: false,
        });
        let ws: WebSocket;
        const cennectEvent = () => {
            state.visible = true;
        };

        const handleOk = () => {
            sendOut();
            state.visible = false;
            ws = new WebSocket(state.url);

            ws.onopen = (event) => {
                // message.success("WebSocket连接成功！");
            };

            ws.onmessage = (event: MessageEvent) => {
                state.messageList.push(event.data);
            };
        };
        const handleCancel = ()=>{
            cancel();
        }
        onUnmounted(()=>{
            ws.close();
        })
        return {
            ...toRefs(state),
            cennectEvent,
            handleOk,
            handleCancel
        };
    },
});
</script>

<style scoped>
</style>