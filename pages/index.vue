<template>
  <v-tabs v-model="tab" bg-color="white" fixed-tabs class="mt-12" slider-color="orange">
    <v-tab v-for="city in cities" :value="city.value" :text="city.name" />
  </v-tabs>
  <v-card-text class="bg-blue">
    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="city in cities" :value="city.value">
        <TabContent :current-weather="currentWeather" :hourly-weather="hourlyWeather" />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card-text>
</template>

<script setup lang="ts">
const tab = ref(null)
const currentWeather = ref<any>(null)
const hourlyWeather = ref<any>(null)
const cities = [
  { name: 'Rio De Janeiro', value: 'RIO' },
  { name: 'Beijing', value: 'BEI' },
  { name: 'Los Angeles', value: 'LA' },
]

watch(tab, async (newCity, oldCity) => {
  if (newCity == oldCity) {
    return
  }
  console.log(`switching from ${oldCity} to ${newCity}`)
  const { data } = await useFetch('/api/weather', {
    query: {
      city: newCity
    }
  })
  currentWeather.value = data.value?.currentWeather
  hourlyWeather.value = data.value?.hourlyWeather
})
</script>