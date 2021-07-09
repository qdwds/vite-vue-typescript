<!--
 * @Description: 
 * @Date: 2021-06-16 17:41:07
 * @LastEditTime: 2021-07-09 16:50:53
-->

<template>
    <BannerVideo></BannerVideo>
    <div class="center w-full h-full bg-dark-500 relative">
        <div class="w-96 h-auto p-4 bg-white rounded relative animate-box">
            <div class="w-full text-center text-xl mb-4 animate-l20">
                用户登陆
            </div>
            <Form ref="formRef" :model="loginForm">
                <FormItem name="pass" class="w-full relative animate-l30">
                    <Input
                        v-model:value="loginForm.username"
                        type="text"
                        class="relative"
                        placeholder="账户名"
                    />
                </FormItem>
                <FormItem name="checkPass" class="w-full relative animate-l40">
                    <InputPassword
                        v-model:value="loginForm.password"
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
            <OtherLogin class="relative animate-l70"></OtherLogin>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, UnwrapRef } from "vue";
import { Form, Button, Input, Divider, message } from "ant-design-vue";

import { useRouter } from "vue-router";
import BannerVideo from "./components/BannerVideo.vue";
import OtherLogin from "./otherLogin.vue";
import { ILoginState } from "./types";
import { apiUserLogin } from "@/api/user";
import { storage } from "@/utils/cache";
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
        const state: UnwrapRef<ILoginState> = reactive({
            loginForm: {
                username: "admin",
                password: "admin",
            },
        });

        const submitUserInfo = () => {
            apiUserLogin(state.loginForm)
                .then((res: any) => {
                    if (!res.status) return message.error(res.msg);

                    storage.set("USER_AUTH", res.token);
                    
                    //  menu导航~
                    storage.set("openKeys", [""]);
                    storage.set("selectedKeys", ["home"]);
                    router.push({
                        name: "home",
                    });
                })
                .catch((e) => {});
        };
        return {
            ...toRefs(state),
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