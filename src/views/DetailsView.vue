<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import router from '@/router'

const route = useRoute() // Get access to the current route
let countryName = '' // Access the route parameter "name"
const countryInfo = ref({})
const detailsList1 = ref<{ label: string, value: string | number }[]>([])
const detailsList2 = ref<{ label: string, value: string | number }[]>([])
const borders = ref<string[] | null>([])
onMounted(async () => {
  await reqForInfo()
})

const reqForInfo = async () => {
  countryName = route.params.name as string
  try {
    countryInfo.value = (await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)).data[0]
    borders.value = countryInfo.value.borders ? Object.values(countryInfo.value.borders) as (string[]) : null

    detailsList1.value = []
    detailsList1.value.push({
      label: 'Native Name',
      value: (Object.values(countryInfo.value.name.nativeName)[0] as { common: string }).common
    })
    detailsList1.value.push({ label: 'Population', value: countryInfo.value.population })
    detailsList1.value.push({ label: 'Region', value: countryInfo.value.region })
    detailsList1.value.push({ label: 'Sub Region', value: countryInfo.value.subregion })
    detailsList1.value.push({ label: 'Capital', value: countryInfo.value.capital[0] })

    detailsList2.value = []
    detailsList2.value.push({ label: 'Top Level Domain', value: countryInfo.value.tld[0] })
    detailsList2.value.push({
      label: 'Currencies',
      value: (Object.values(countryInfo.value.currencies) as { name: string }[]).reduce((total, currency) => total + currency.name + ', ', '')
    })
    detailsList2.value.push({
      label: 'Languages',
      value: (Object.values(countryInfo.value.languages) as string[]).reduce((total, currency) => total + currency + ', ', '')
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const goBack = () => {
  router.replace('/')
}

const goToCountry = (countryCode: string) => {
  router.replace('/details/' + countryCode)
}

watch(route, () => {
  reqForInfo()
})

</script>

<template>
  <div class="flex flex-column px-4 sm:px-8 py-5 sm:py-7">
    <div class="sm:mt-3 mt-3">
      <Button class="px-5 shadow-6 border-round-sm" :raised="true" label="Back" icon="pi pi-arrow-left" @click="goBack()"></Button>
    </div>
    <div class="flex flex-column sm:flex-row pt-7 sm:pt-8">
      <div class="col-12 px-0 sm:col-6 sm:pr-7 max-h-25rem" v-if="countryInfo.flags">
        <img class="w-full" :src="countryInfo.flags.png" :alt="countryInfo.flags.alt">
      </div>
      <div class="col-12 sm:col-6 flex flex-column px-0 sm:pl-6">
        <div class="flex flex-column justify-content-between h-full">
          <div class="h-6rem flex align-items-center">
            <span class="text-4xl font-bold" v-if="countryInfo.name">
              {{ countryInfo.name.common }}
            </span>
          </div>
          <div class="flex-grow-1 flex flex-column sm:flex-row">
            <div class="col-12 sm:col-6 pl-0">
              <ul class="list-none pl-0 mt-0">
                <li class="line-height-4" v-for="detail in detailsList1" :key="detail.label">
                  <span class="font-semibold">{{detail.label}}: </span>
                  <span>{{detail.value}}</span>
                </li>
              </ul>
            </div>
            <div class="col-12 sm:col-6 pl-0">
              <ul class="list-none pl-0 mt-0">
                <li class="line-height-4" v-for="detail in detailsList2" :key="detail.label">
                  <span class="font-semibold">{{detail.label}}: </span>
                  <span>{{detail.value}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="">
            <div class="font-semibold sm:inline-flex mb-4">Border Countries: </div>
            <div class="flex sm:inline-flex mx-2 gap-2 flex-wrap">
              <Button :v-if="borders" v-for="country in borders" :key="country" :label="country" size="small" class="px-4 shadow-3"
                      @click="goToCountry(country)"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
