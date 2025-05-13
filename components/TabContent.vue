<template>
  <v-card class="bg-white" v-if="hourlyWeather">
    <v-card-title>
      Next hours
    </v-card-title>
    <v-divider></v-divider>
    <v-row no-gutters>
      <v-col v-for="day in hourlyWeather?.list" :key="day.dt" cols="3">
        <v-sheet class="pt-2 pb-2 text-center" border>
          <v-row no-gutters>
            <v-col cols="12" sm="4">
              <v-sheet>
                {{ Math.trunc(day.main.temp) }}°
              </v-sheet>
              <v-sheet class="text-blue">
                {{ day.main.humidity }}%
              </v-sheet>
              <v-sheet>
                <img :src="getWeatherIcon(day.weather[0].icon)" />
              </v-sheet>
              <v-sheet>
                {{ formatDateForHourly(day.dt_txt) }}
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
  <v-card class="mt-5 bg-white" v-if="currentWeather">
    <v-card-title>
      Next 5 days
    </v-card-title>
    <v-list class="pt-0">
      <v-list-item lines="two" :border="true" v-for="(day, index) in Array(5).fill(currentWeather)" :key="index"
        :subtitle="day.weather[0].description" :title="formatDateForDaily(day.dt)">
        <template v-slot:prepend>
          <v-avatar color="white">
            <img :src="getWeatherIcon(day.weather[0].icon)" />
          </v-avatar>
        </template>
        <template v-slot:append>
          {{ Math.trunc(day.main.temp_max) }}° {{ Math.trunc(day.main.temp_min) }}°
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import moment from 'moment'

defineProps({
  currentWeather: Object,
  hourlyWeather: Object
})

const getWeatherIcon = (id: string) => {
  return `https://openweathermap.org/img/wn/${id}.png`
}

const formatDateForHourly = (date: number) => {
  return moment(date).format('h:mm a')
}

const formatDateForDaily = (date: number) => {
  return moment.unix(date).format('ddd, MMM D')
}
</script>

<style lang="css">
.v-list-item__content {
  text-align: center;
}
</style>