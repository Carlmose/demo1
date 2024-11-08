<template>
    <div>
        <h1>子组件{{ msg }}</h1>
        <h2>父组件传递过来的值：{{ msg }}</h2>
    </div>
</template>
<script>
export default {
    props: ['msg']
}
</script>