const API_KEY = '9170e0e85794088df319259526c55afd'
const HOURLY_WEATHER_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast'
const CURRENT_WEATHER_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather'
const cityCoordinatesMap = {
  'RIO': {
    latitude: '22.9068',
    longitude: '43.1729'
  },
  'LA': {
    latitude: '34.0549',
    longitude: '118.2426'
  },
  'BEI': {
    latitude: '39.9042',
    longitude: '116.4074'
  },
}

export default defineEventHandler(async (event) => {
  const { city } = getQuery(event)

  if (!city || typeof city !== 'string' || (city !== 'RIO' && city !== 'LA' && city !== 'BEI')) {
    throw createError({
      statusCode: 500,
      message: 'City is not supported'
    })
  }

  try {
    // swap this endpoint with real hourly endpoint when it works.  right now pulling every 3 hours
    const hourlyWeather = await $fetch(`${HOURLY_WEATHER_ENDPOINT}`, {
      params: {
        appid: API_KEY,
        lat: cityCoordinatesMap?.[city].latitude,
        lon: cityCoordinatesMap?.[city].longitude,
        cnt: 4,
        units: 'imperial',
      }
    });

    // swap this endpoint with real daily endpoint when it works.  right now pulling just current day weather
    const currentWeather = await $fetch(`${CURRENT_WEATHER_ENDPOINT}`, {
      params: {
        appid: API_KEY,
        lat: cityCoordinatesMap?.[city].latitude,
        lon: cityCoordinatesMap?.[city].longitude,
        units: 'imperial',
      }
    });

    return {
      hourlyWeather,
      currentWeather
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch weather'
    })
  }
});