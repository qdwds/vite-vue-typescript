<template>
    <div class="breadcrumb">
        <a-breadcrumb :routes="[getBreadcrumb]">
            <template #itemRender="{ route, routes, paths }">
                <span v-if="routes.indexOf(route) === routes.length - 1">
                    {{ route.name }}
                </span>
                <router-link v-else :to="{name:route.name}">
                    {{ route.meta.title }}
                </router-link>
            </template>
        </a-breadcrumb>
        <span class="br">/</span>
        <span class="title">{{ title }}</span>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useAppStoreModule } from "@/hooks/web/useApp";
import { useRoute } from "vue-router";
export default defineComponent({
    setup() {
        const { getBreadcrumb } = useAppStoreModule();
        const route = useRoute();
        const title = computed(() => route.meta.title);
        return {
            getBreadcrumb,
            title,
        };
    },
});
</script>

<style lang="less" scoped>
.breadcrumb {
    display: flex;
    align-items: center;
    .br {
        margin: 0 8px;
    }
    .br,
    .title {
        opacity: 0.7;
    }
    .title,
    .ant-breadcrumb{
        cursor: pointer;
    }
}
    .ant-dropdown{
        z-index: 10001 !important;
    }
</style>