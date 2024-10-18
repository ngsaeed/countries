<script setup lang="ts">

import CountriesFilters from '@/components/CountriesFilters.vue'
import CountryCard from '@/components/CountryCard.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const countries = ref([])
onMounted(async () => {
  try {
    countries.value = (await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital')).data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

const router = useRouter()
const goToDetails = (name: string) => {
  router.push({ name: 'details', params: { name } })
}
</script>

<template>
  <CountriesFilters/>
  <div class="flex flex-wrap justify-content-between gap-6 px-6 sm:px-8 mb-7">
    <CountryCard
      v-for="country in countries"
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
