// 引入Vue.js库
import Vue from 'vue';
// 引入element-ui组件库
import ElementUI from 'element-ui';
// 引入element-ui的css样式
import 'element-ui/lib/theme-chalk/index.css';
// 根组件
import App from './App.vue';

//关闭生产环境下的提示信息，通常用在生产环境中以避免在控制台打印出不必要的警告。
Vue.config.productionTip = false;
//全局注册Element UI组件库
Vue.use(ElementUI);

//创建Vue实例
new Vue({
  el: '#app',
  render: h => h(App)
});