<!--
 * @Description: tabs 
 * @Date: 2021-07-01 21:28:51
 * @LastEditTime: 2021-07-06 11:34:37
-->

<template>
    <Tabs
            v-model:activeKey="activeKey"
            hide-add
            type="editable-card"
            size="small"
            @change="changeTab"
            @edit="delTabItem"
        >
            <template v-for="pageItem in getInfoTabs" :key="pageItem.fullPath">
                <TabPane>
                    <template #tab>
                        <Dropdown :trigger="['contextmenu']">
                            <div style="display: inline-block">
                                {{ pageItem.meta.title }}
                            </div>
                        </Dropdown>
                    </template>
                </TabPane>
            </template>
        </Tabs>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, toRefs, watch } from "vue";
import { Tabs, Dropdown, message } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import { useTabStore } from "@/hooks/tabs/useTabs";
import { ITabState } from "./types";
import { useHandleRoutes } from "@/hooks/menus/useRouterfFeat";
import { ITabsRouteInfo } from "@/store/modules/tabs";
export default defineComponent({
    components: {
        Tabs,
        Dropdown,
        TabPane: Tabs.TabPane,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const { getSimpleRoute } = useHandleRoutes();
        const state = reactive<ITabState>({
            activeKey: route.fullPath,
        });

        const { getInfoTabs, setInfoTabs, delInfoTabs } = useTabStore();

        //  获取当前页面路由信息
        setInfoTabs(getSimpleRoute(route));

        watch(
            () => route.fullPath,
            (to) => {
                if(to.includes("redirect")) return
                state.activeKey = to;
                setInfoTabs(getSimpleRoute(route));
            }
        );
        //  点击切换tab时，切换路由
        const changeTab = (key: string): void => {
            state.activeKey = key;
            router.push(key);
        };

        const delTabItem = (fullPath: string) => {
            const len = getInfoTabs.length;
            if (len <= 1) {
                return message.error("已经是最后一页了,不能再关闭了！");
            }
            //  删除tab
            delInfoTabs(fullPath);

            //   校验关闭的是否是当前页
            if (state.activeKey === fullPath) {
                const currentRoute = getInfoTabs[getInfoTabs.length - 1];
                state.activeKey = currentRoute.fullPath;
                router.push({ name: currentRoute.name });
            }
        };
        return {
            ...toRefs(state),
            getInfoTabs,
            changeTab,
            delTabItem,
        };
    },
})
</script>

<style lang="less" scoped>
:deep(.ant-tabs-bar){
    margin: 0;
    border: 0;
}
:deep(.ant-tabs-tab-active),
:deep(.ant-tabs-tab){
    height: 30px !important;
    line-height: 30px !important;
    border: 1px solid #f0f0f0 !important;
}
</style>