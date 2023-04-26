<template>
  <div>
    <header>
      <slot name="header" />
      <Navbar />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt 3 test` : 'Nuxt 3 test';
  },
});
</script>