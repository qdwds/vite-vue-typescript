<!--
 * @Description: Divider
 * @Date: 2021-07-05 16:20:03
 * @LastEditTime: 2021-07-05 16:35:32
-->

<template>
    <div class="divider">
        <span>
            <slot class="text-black dark:text-white"></slot>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
.divider {
    display: flex;
    margin: 16px 0;
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    border-top: 0;
    border-top-color: rgba(0, 0, 0, 0.06);
    span {
        display: inline-block;
        padding: 0 1em;
    }
}
.divider::after,
.divider::before {
    position: relative;
    top: 50%;
    width: 50%;
    border-top: 1px solid transparent;
    border-top-color: inherit;
    border-bottom: 0;
    transform: translateY(50%);
    content: "";
}
</style>