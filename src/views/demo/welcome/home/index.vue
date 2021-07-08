<!--
 * @Description: 
 * @Date: 2021-07-07 10:07:59
 * @LastEditTime: 2021-07-08 15:45:25
-->
<template>
    <div>
        <Button type="primary">1111</Button>
        <a href="#">2344444444444444</a>
        {{v}}
        <input v-model="v"/>
        <input v-model="v"/>
        
    </div>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue'
import {Button} from "ant-design-vue"
export default defineComponent({
    components:{
        Button
    },
    setup () {
        
        const v = ref(0)
        return {
            v
        }
    }
})
</script>

<style scoped>

</style>