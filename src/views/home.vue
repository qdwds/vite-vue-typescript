<!--
 * @Description: v
 * @Date: 2021-06-16 16:12:43
 * @LastEditTime: 2021-06-22 15:49:10
-->


<template>
  <div>
    <a-button type="primary" @click="info">1111</a-button>
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script>
  import { message, notification } from 'ant-design-vue';
  export default {
    setup() {
      const info = () => {
        message.info('This is a normal message');
        notification.info({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      };
      return {
        info,
      };
    },
    components: {
    },
  };
</script>
<style lang="stylus" scoped>
</style>