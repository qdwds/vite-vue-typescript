<!--
 * @Description: 其他登录
 * @Date: 2021-07-05 11:20:37
 * @LastEditTime: 2021-07-05 11:24:05
-->


<template>
     <div class="w-full flex justify-around relative">
        <GithubOutlined
            v-for="icon in 3"
            class="
                text-2xl text-gray-500
                cursor-pointer
                hover:text-violet-500
            "
        ></GithubOutlined>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GithubOutlined } from "@ant-design/icons-vue";
export default defineComponent({
    components:{
        GithubOutlined,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>