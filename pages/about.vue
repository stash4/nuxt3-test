<template>
  <h1>About Page</h1>
  <div>
    <button @click="enableCustomLayout">Update Layout</button>
  </div>
</template>
<script setup>
function enableCustomLayout() {
  setPageLayout('custom');
}
definePageMeta({
    layout: 'custom',
});
</script>