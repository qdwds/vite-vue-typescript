<template>
    <div class="unlocking">
        <div class="input_box">
            <a-avatar :size="64" class="mb10">
                <template #icon><UserOutlined /></template>
            </a-avatar>
            <span class="mb10">admin</span>
            <a-input-password
                class="mb10"
                v-model:value="password"
                allowClear
                placeholder="请输入登录密码解锁!"
                @keyup.enter.self="handleUnlocking"
            />
            <div class="box_submit mb10">
                <a-button type="link" @click.stop="handleReturn">返回</a-button>
                <a-button type="link" @click.stop="handleToLogin"
                    >重新登录</a-button
                >
                <a-button type="link" @click.stop="handleUnlocking"
                    >解锁</a-button
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
// import { useAppStoreModule } from "@/hooks/web/useApp";
import { useRouter } from "vue-router";
export default defineComponent({
    components: {
        UserOutlined,
    },
    emits: ["handleReturn"],
    setup(_, ctx) {
        const password = ref<string>("");
        // const { setUnlocking } = useAppStoreModule();
        const router = useRouter();
        //  解锁
        const handleUnlocking = () => {
            if (password.value === "admin") {
                // setUnlocking(false);
            }
        };
        //  返回重新登录
        const handleToLogin = () => {
            // setUnlocking(false);
            router.push({
                name: "Login",
            });
        };
        //  返回
        const handleReturn = () => {
            ctx.emit("handleReturn");
        };
        return {
            password,
            handleUnlocking,
            handleToLogin,
            handleReturn,
        };
    },
});
</script>

<style lang="less" scoped>
.unlocking {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    background: hska(0, 0%, 100%, 0.3);
    animation: unlocking 2s;
    display: flex;
    justify-content: center;
    align-items: center;
    .mb10 {
        margin-bottom: 8px;
    }
    .input_box {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .box_submit {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
    .ant-btn {
        border-radius: 50%;
    }
    .ant-btn:hover {
        border-bottom: 1px solid #1890ff;
        border-radius: 0;
    }
}

@keyframes unlocking {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>