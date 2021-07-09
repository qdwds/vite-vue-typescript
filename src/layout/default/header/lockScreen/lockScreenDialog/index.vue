<!--
 * @Description: 
 * @Date: 2021-07-07 10:07:58
 * @LastEditTime: 2021-07-09 16:36:58
-->
<template>
        :visible="getUnlocking"

    <a-drawer
        :closable="false"
        :bodyStyle="{
            padding: 0,
            margin: 0,
        }"
        placement="bottom"
        width="100vw"
        height="100vh"
        destroyOnClose
        @click="handleMouseClick"
    >
        <div class="lock_content">
            <Lock :unlockingShow="unlockingShow"></Lock>
            <Unlocking
                v-if="unlockingShow"
                @handleReturn="handleReturn"
            ></Unlocking>
        </div>
    </a-drawer>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Lock from "./lock.vue";
import Unlocking from "./unlocking.vue";
// import { useAppStoreModule } from "@/hooks/web/useApp";
export default defineComponent({
    props: {
        locking: Boolean,
    },
    components: {
        Lock,
        Unlocking,
    },
    setup() {
        // const { getUnlocking } = useAppStoreModule();
        const state = reactive({
            unlockingShow: false,
        });
        //  切换解锁界面
        const handleMouseClick = (): void => {
            state.unlockingShow = true;
        };

        //  返回
        const handleReturn = (): void => {
            state.unlockingShow = false;
        };
        return {
            handleMouseClick,
            handleReturn,
            // getUnlocking,
            ...toRefs(state),
        };
    },
});
</script>


<style lang="less" scoped>
.lock_content {
    height: 100%;
}
</style>