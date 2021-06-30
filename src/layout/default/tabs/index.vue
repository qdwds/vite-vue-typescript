<!--
 * @Description: bar
 * @Date: 2021-06-21 16:07:17
 * @LastEditTime: 2021-06-30 18:04:53
-->

<template>
    <div
        class="
            h-8
            bg-white
            border-t-1
            border-b-1
            border-l-0
            border-r-0
            border-gray-100
            border-solid
            bg-dark
            dark:border-gray-600
        "
    >
        <Tabs
            v-model:activeKey="activeKey"
            hide-add
            type="editable-card"
            class="tabs"
        >
            <template v-for="pageItem in routes">
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
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, toRefs } from "vue";
import { Tabs, Dropdown } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import { AppRouteModule } from "@/router/types";
import { useHandleRoutes } from "@/hooks/menus/useRouterfFeat";
export default defineComponent({
    components: {
        Tabs,
        Dropdown,
        TabPane: Tabs.TabPane,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const state = reactive({
            activeKey: route.fullPath,
            routes: [],
        });
        const { fileterRoutes } = useHandleRoutes();
        const routesFirst = fileterRoutes(router.options.routes)![0].children;
        console.log(routesFirst);
        if (routesFirst) {
            state.routes.push(...routesFirst);
        }

        return {
            ...toRefs(state),
        };
    },
});
</script>

<style scoped>
</style>