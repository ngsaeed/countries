<script setup lang="ts">
import Card from 'primevue/card'
// eslint-disable-next-line no-undef
defineProps({
  name: String,
  flag: String,
  region: String,
  population: Number,
  capital: String
})
</script>

<template>
  <Card class="w-full sm:w-16rem border-round-md" style="overflow: hidden">
    <template #header>
      <img alt="user header" :src="flag" class="h-10rem"/>
    </template>
    <template #title>
      <span class="text-lg" style="font-weight: 800 ">
        {{ name }}
      </span>
    </template>
    <template #content>
      <div class="mb-5 flex flex-column">
        <div>
          <span class="text-sm font-semibold">Population: </span>
          <span class="text-sm font-light">{{ population }}</span>
        </div>
        <div>
          <span class="text-sm font-semibold">Region: </span>
          <span class="text-sm font-light">{{ region }}</span>
        </div>
        <div>
          <span class="text-sm font-semibold">Capital: </span>
          <span class="text-sm font-light">{{ capital }}</span>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">

</style>
