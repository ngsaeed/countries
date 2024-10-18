<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute() // Access the current route
const searchQuery = ref('') // Search input binding
const selectedRegion = ref() // Region select binding
let query = {}
const regions = ref([
  { name: 'Africa', code: 'Africa' },
  { name: 'America', code: 'Americas' },
  { name: 'Asia', code: 'Asia' },
  { name: 'Europe', code: 'Europe' },
  { name: 'Oceania', code: 'Oceania' }
])

watch(selectedRegion, (newValue) => {
  query = { ...query, region: newValue.code }
  router.replace({ path: '/', query })
})

watch(searchQuery, (newValue) => {
  query = { ...query, name: newValue }
  router.replace({ path: '/', query })
})

onMounted(() => {
  if (route.query && route.query.region) {
    selectedRegion.value = regions.value.filter(region => region.code === route.query.region as string)[0]
  }
  if (route.query && route.query.name) {
    searchQuery.value = route.query.name as string
  }
})
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
