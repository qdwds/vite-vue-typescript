<!--
 * @Description: 
 * @Date: 2021-06-16 17:41:07
 * @LastEditTime: 2021-06-30 23:00:33
-->

<template>
    <div class="center w-full h-full bg-dark-500">
        <div class="w-sm h-sl p-4 bg-light-200 rounded relative animate-box">
            <div class="w-full text-center text-xl mb-4 relative animate-l20">
                用户登陆
            </div>
            <Form ref="formRef" :model="formState">
                <FormItem name="pass" class="w-full">
                    <Input
                        v-model:value="formState.username"
                        type="text"
                        class="relative animate-l30"
                        placeholder="账户名"
                    />
                </FormItem>
                <FormItem name="checkPass" class="relative animate-l40">
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
            <div class="w-full flex justify-around relative animate-l70">
                <GithubOutlined
                    v-for="icon in 3"
                    class="
                        text-2xl text-gray-500
                        cursor-pointer
                        hover:text-violet-500
                    "
                ></GithubOutlined>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, reactive, ref, UnwrapRef } from "vue";
import { Form, Button, Input, Divider } from "ant-design-vue";
import { GithubOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
interface FormState {
    pass: string;
    checkPass: string;
}
export default defineComponent({
    components: {
        Form,
        FormItem: Form.Item,
        Button,
        Input,
        InputPassword: Input.Password,
        Divider,
        GithubOutlined,
    },
    setup() {
        const router = useRouter();
        const formRef = ref();
        const formState: UnwrapRef<FormState> = reactive({
            pass: "admin",
            checkPass: "admin",
        });

        const submitUserInfo = () => {
            console.log(123);
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