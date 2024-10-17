<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue'
</script>

<template>
  <div class="header flex justify-content-between px-3 sm:px-8 py-4 align-items-center border-bottom-2 border-300">
    <div class="text-md sm:text-2xl">
      Where in the world?
    </div>
    <DarkModeToggle/>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: var(--elements);
  border-bottom: var(--header-border-color);
}
</style>
