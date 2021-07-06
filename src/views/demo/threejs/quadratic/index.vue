<!--
 * @Description: 二次元
 * @Date: 2021-07-06 16:37:47
 * @LastEditTime: 2021-07-06 17:46:24
-->

<template>
    <div>
二次元
<button @click="remove"> remove Router</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
    setup () {
        const router = useRouter();
        const route = useRoute();

        const remove = () => {
            router.removeRoute("World");
        }

        return {
            remove
        }
    }
})
</script>

<style scoped>

</style>