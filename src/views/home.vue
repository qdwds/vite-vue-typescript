<!--
 * @Description: v
 * @Date: 2021-06-16 16:12:43
 * @LastEditTime: 2021-07-05 14:53:57
-->


<template>
    <div>
      <div class="2-20 h-20 bg-yellow-100 dark:bg-black"></div>
      <div class="2-20 h-20 bg-yellow-100 dark"></div>
    
        <button  @click="info">12111</button>
    </div>
</template>
<script lang="ts">
export default {
    setup() {
      let a = true;
        const info = () => {
          console.log(document.getElementById("html"));
          if(a){

            document.getElementById("html").classList.add("dark");
            a=false
          }else{
            document.getElementById("html").classList.remove("dark");
            a=true
            

          }
        };
        return {
          info
        };
    },
};
</script>
