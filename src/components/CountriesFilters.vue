<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('') // Search input binding
const selectedRegion = ref() // Region select binding
const regions = ref([
  { name: 'Africa', code: 'AfricaAfrica' },
  { name: 'America', code: 'AmericaAmerica' },
  { name: 'Asia', code: 'AsiaAsia' },
  { name: 'Europe', code: 'EuropeEurope' },
  { name: 'Oceania', code: 'OceaniaOceania' }
])

</script>

<template>
  <div class="flex flex-column sm:flex-row justify-content-between px-3 sm:px-8 py-4 sm:py-6 gap-5">
    <IconField>
      <InputIcon class="pi pi-search"/>
      <InputText size="large" id="over_label" v-model="searchQuery" autocomplete="off" placeholder="Search for a country..." class="search-input w-full sm:w-30rem"/>
    </IconField>
    <Select v-model="selectedRegion" :options="regions" optionLabel="name" placeholder="Filter by Region" class="region-select w-12rem" />
  </div>
</template>

<style scoped lang="scss">
.search-input, .region-select {
  height: 3.4rem;
}
</style>
