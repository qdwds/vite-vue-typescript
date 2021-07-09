<!--
 * @Description: ws 连接测试
 * @Date: 2021-07-08 16:14:29
 * @LastEditTime: 2021-07-09 15:14:59
-->

<template>
    <div>
        <Title title="WebSoket连接"></Title>
        <div class="p-4 h-full box-border flex">
            <Card class="w-1/3 mr-2">
                <div class="w-full h-full flex items-center">
                    <h1 class="mr-4">连接状态：</h1>
                    <i
                        v-if="status === 'start'"
                        :class="'w-4 h-4 mr-2 rounded-3xl inline-block bg-green-500'"
                    ></i>
                    <i
                        v-if="status === 'accept'"
                        :class="'w-4 h-4 mr-2 rounded-3xl inline-block bg-blue-500'"
                    ></i>
                    <i
                        v-if="status === 'close'"
                        :class="'w-4 h-4 mr-2 rounded-3xl inline-block bg-red-500'"
                    ></i>
                </div>
                <Divider />
                <div class="flex">
                    <Input
                        addon-before="地址//"
                        placeholder="ws地址"
                        v-model:value="host"
                    ></Input>
                    <Button v-if="status !== 'close'" type="primary" @click="handleWsClose">断开</Button>
                    <Button v-else type="primary" @click="handleWsConnect">连接</Button>
                </div>
                <Divider />
                <Textarea
                    v-model:value="message"
                    placeholder="发送到服务端的内容"
                    :disabled="status === 'close'"
                />
                <Button
                    class="w-full mt-4"
                    type="primary"
                    :disabled="status === 'close'"
                    @click="handleWsMessage"
                    >发送</Button
                >
            </Card>

            <Card class="w-2/3">
                <h1>WebSoket服务端消息：</h1>
                <Divider />
                <div class="w-full h-full">
                    <p v-for="message in messageList">
                        {{ message }}
                    </p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Card, Divider, Input, Button } from "ant-design-vue";
import { Title } from "@/components/Title";
import { IConnect, STATUS } from "./types";
export default defineComponent({
    components: {
        Card,
        Title,
        Divider,
        Input,
        Textarea: Input.TextArea,
        Button,
    },
    setup() {
        const state = reactive<IConnect>({
            host: "ws://localhost:5001/ws",
            message: "发送到服务端的内容",
            status: STATUS.close,
            messageList: [],
        });

        let ws: WebSocket;
        const handleWsConnect = () => {
            console.log("event");

            ws = new WebSocket(state.host);

            ws.onopen = (event) => {
                state.status = STATUS.start;
                ws.send("客户端正在连接服务端的WebSocket服务！");
            };

            ws.onmessage = (event: MessageEvent) => {
                state.status = STATUS.accept;
                state.messageList.push(event.data);
                setTimeout(() => {
                    state.status = STATUS.start;
                }, 100);
            };
        };

        const handleWsMessage = () => {
            ws.send(state.message);
            state.messageList.push(`客户端：我发送的数据为 ${state.message}`);
        };
        const handleWsClose = () =>{
            ws.close();
            state.status = STATUS.close;
        }

        return {
            ...toRefs(state),
            handleWsConnect,
            handleWsMessage,
            handleWsClose
        };
    },
});
</script>

<style scoped>
.ant-divider {
    margin: 16px 0;
}
</style>