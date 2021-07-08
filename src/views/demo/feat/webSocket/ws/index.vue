<!--
 * @Description: ws 连接测试
 * @Date: 2021-07-08 16:14:29
 * @LastEditTime: 2021-07-08 17:35:36
-->

<template>
    <div>
        <Title title="WebSoket连接"></Title>
        <div class="p-4 h-full box-border flex">
            <Card class="w-1/3 mr-2">
                <h1>连接状态：o</h1>
                <Divider />
                <div class="flex">
                    <Input addon-before="地址//" placeholder="ws地址" v-model:value="host"></Input>
                    <Button type="primary">连接</Button>
                </div>
                <Divider />
                <Textarea
                    v-model:value="message"
                    placeholder="发送到服务端的内容"
                />
                <Button class="w-full mt-4" type="primary">发送</Button>
            </Card>
            
            <Card class="w-2/3">
                <h1>WebSoket服务端消息：</h1>
                <Divider />
                <div class="w-full h-full">234</div>
            </Card>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent ,reactive, toRefs } from "vue";
import { Card, Divider, Input, Button } from "ant-design-vue";
import { Title } from "@/components/Title";
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
        const state = reactive({
            host:"ws://localhost:5000/ws",
            message:"",
        })
        return {
            ...toRefs(state)
        };
    },
});
</script>

<style scoped>
.ant-divider {
    margin: 16px 0;
}
</style>