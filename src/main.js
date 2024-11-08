import Vue from 'vue';
import App from './App.vue';

// 引入 Element UI 样式和组件
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
