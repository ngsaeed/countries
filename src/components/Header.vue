<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue'
</script>

<template>
  <div class="header flex justify-content-between px-3 sm:px-8 py-4 align-items-center shadow-1">
    <div class="text-md sm:text-2xl font-bold">
      Where in the world?
    </div>
    <DarkModeToggle/>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: var(--elements);
}
</style>
