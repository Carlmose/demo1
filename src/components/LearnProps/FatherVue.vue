<!-- 通过 Prop 向子组件传递数据 -->
<template>
    <div>
        <h1>父组件</h1>
        <SonVue :msg="message"></SonVue>
    </div>
</template>
<script>
import SonVue from './SonVue.vue';
export default {
    components: {
        SonVue,
    },
    data() {
        return {
            message: 'Hello from Parent'  // 父组件的数据
        };
    },
}
</script>