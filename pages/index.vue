<template>
    <h1>Main Page</h1>
    <button @click="handleClick">Show</button>
    <LazyNotice v-if="show" />
</template>
<script setup>
const show = ref(false);

const handleClick = () => {
    show.value = true;
};
</script>