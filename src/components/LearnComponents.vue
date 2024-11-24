<template>
    <button v-on:click="count++">{{ title }} You click me {{ count }} times</button>
</template>
<script>
export default {
    name: "LearnComponents",
    props: ["title"],
    data() {
        return {
            count: 0
        };
    },
}
</script>