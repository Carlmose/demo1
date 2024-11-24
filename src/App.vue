<template>
  <div id="app">
    <h1>Vue 实例</h1>
    <FatherVue />
  </div>
</template>

<script>

// import LearnComponents from './components/LearnComponents.vue';
import FatherVue from './components/LearnProps/FatherVue.vue'
// import TableExample from './components/TableExample.vue';
// import FormExample from './components/FormExample.vue';

export default {
  name: 'App',
  components: {
    FatherVue
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
