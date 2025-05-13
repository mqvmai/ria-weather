<template>
  <v-card class="bg-white">
    <v-card-title>
      Next hours
    </v-card-title>
    <v-divider></v-divider>
    <v-row no-gutters>
      <v-col v-for="day in mockWeatherHours" :key="day.time" cols="3">
        <v-sheet class="pt-2 pb-2 text-center" border>
          <v-row no-gutters>
            <v-col cols="12" sm="4">
              <v-sheet>
                {{ day.temp }}°
              </v-sheet>
              <v-sheet class="text-blue">
                {{ day.precip }}%
              </v-sheet>
              <v-sheet>
                <img :src="getWeatherIcon('10d')" />
              </v-sheet>
              <v-sheet>
                {{ day.time }}
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
  <v-card class="mt-5 bg-white">
    <v-card-title>
      Next 5 days
    </v-card-title>
    <v-list class="pt-0">
      <v-list-item lines="two" :border="true" v-for="day in mockWeatherDays" :key="day.time" :subtitle="day.description"
        :title="day.time">
        <template v-slot:prepend>
          <v-avatar color="white">
            <img :src="getWeatherIcon('10d')" />
          </v-avatar>
        </template>
        <template v-slot:append>
          {{ day.high }}° {{ day.low }}°
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
const mockWeatherHours = [
  {
    temp: '20',
    precip: '0',
    time: '3:00 PM'
  },
  {
    temp: '23',
    precip: '0',
    time: '4:00 PM'
  },
  {
    temp: '25',
    precip: '0',
    time: '5:00 PM'
  },
  {
    temp: '26',
    precip: '0',
    time: '6:00 PM'
  }
]
const mockWeatherDays = [
  {
    time: 'Fri, Nov 1',
    description: 'Clear throughout the day',
    high: '27',
    low: '11'
  },
  {
    time: 'Sat, Nov 2',
    description: 'Clear throughout the day',
    high: '28',
    low: '13'
  },
  {
    time: 'Sun, Nov 2',
    description: 'Clear throughout the day',
    high: '27',
    low: '14'
  },
  {
    time: 'Mon, Nov 3',
    description: 'Clear throughout the day',
    high: '26',
    low: '11'
  },
]

const getWeatherIcon = (id: string) => {
  return `https://openweathermap.org/img/wn/${id}.png`
}
</script>

<style lang="css">
.v-list-item__content {
  text-align: center;
}
</style>