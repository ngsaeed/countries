<script setup lang="ts">

import CountriesFilters from '@/components/CountriesFilters.vue'
import CountryCard from '@/components/CountryCard.vue'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute() // Access the current route

const allCountries = ref([])
const filteredCountries = ref([])
const regionFilter = ref<string | null>(null)
const nameFilter = ref<string | null>(null)

const filter = () => {
  let tempList = allCountries.value
  if (regionFilter.value) {
    tempList = allCountries.value.filter(country => country.region === regionFilter.value)
  }
  if (nameFilter.value && nameFilter.value !== '') {
    tempList = tempList.filter(country => country.name.common === nameFilter.value)
  }
  filteredCountries.value = tempList
}

onMounted(async () => {
  try {
    allCountries.value = (await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital')).data
    if (route.query && route.query.region) {
      regionFilter.value = route.query.region as string
    }
    if (route.query && route.query.name) {
      nameFilter.value = route.query.name as string
    }
    filter()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
watch(
  route,
  (newRoute) => {
    if (newRoute.query && newRoute.query.region) {
      regionFilter.value = newRoute.query.region as string
    }
    if (newRoute.query && newRoute.query.name !== undefined) {
      nameFilter.value = newRoute.query.name as string
    }
    filter()
  }
)
const router = useRouter()
const goToDetails = (name: string) => {
  router.push({ name: 'details', params: { name } })
}
</script>

<template>
  <CountriesFilters/>
  <div class="flex flex-wrap justify-content-between gap-6 px-6 sm:px-8 mb-7">
    <CountryCard
      v-for="country in filteredCountries"
      :key="country.name.official"
      :flag="country.flags.png"
      :name="country.name.common"
      :region="country.region"
      :capital="country.capital[0]"
      :population="country.population"
      @click="goToDetails(country.name.common)"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
