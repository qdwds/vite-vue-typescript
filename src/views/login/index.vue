<!--
 * @Description: 
 * @Date: 2021-06-16 17:41:07
 * @LastEditTime: 2021-07-05 11:57:21
-->

<template>
   <BannerVideo></BannerVideo>
    <div class="center w-full h-full bg-dark-500 relative">
        <div class="w-96 h-auto p-4 bg-white rounded relative animate-box">
            <div class="w-full text-center text-xl mb-4 animate-l20">
                用户登陆
            </div>
            <Form ref="formRef" :model="formState">
                <FormItem name="pass" class="w-full relative animate-l30">
                    <Input
                        v-model:value="formState.username"
                        type="text"
                        class="relative"
                        placeholder="账户名"
                    />
                </FormItem>
                <FormItem name="checkPass" class="w-full relative animate-l40">
                    <InputPassword
                        v-model:value="formState.password"
                        type="password"
                        placeholder="密码"
                        @keyup.enter.prevent="submitUserInfo"
                    />
                </FormItem>

                <FormItem>
                    <Button
                        type="primary"
                        class="w-full relative animate-l50"
                        @click="submitUserInfo"
                        >登陆</Button
                    >
                </FormItem>
            </Form>
            <Divider class="w-full relative animate-l60">
                <span class="text-xs text-gray-400">其他登陆</span>
            </Divider>
            <OtherLogin class=" relative animate-l70"></OtherLogin>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef } from "vue";
import { Form, Button, Input, Divider } from "ant-design-vue";

import { useRouter } from "vue-router";
import BannerVideo from "./components/BannerVideo.vue";
import OtherLogin from "./otherLogin.vue";
interface FormState {
    username: string;
    password: string;
}
export default defineComponent({
    components: {
        Form,
        FormItem: Form.Item,
        Button,
        Input,
        InputPassword: Input.Password,
        Divider,
        OtherLogin,
        BannerVideo,
    },
    setup() {
        const router = useRouter();
        const formRef = ref();
        const formState: UnwrapRef<FormState> = reactive({
            username: "admin",
            password: "admin",
        });

        const submitUserInfo = () => {
            router.push({
                name: "home",
            });
        };
        return {
            formState,
            formRef,
            submitUserInfo,
        };
    },
});
</script>


<style lang="less" scoped>
.ant-form {
    // width: 100%;
    cursor: pointer;
}
</style>