<template>
  <div id="app">
    <h1>Vue 表单验证示例</h1>
    <FormExample />
  </div>
</template>

<script>
import FormExample from './components/FormExample.vue';

export default {
  name: 'App',
  components: {
    FormExample
  }
};
</script>

<style>
/* 根组件样式 */
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 30px;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
