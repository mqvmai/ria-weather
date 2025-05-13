const API_KEY = '9170e0e85794088df319259526c55afd'

export default defineEventHandler(async (event) => {
  const { city } = getQuery(event)

  try {
    // const sports: any = await $fetch(`${SPORTS_ENDPOINT}`, {
    //   params: {
    //     apiKey: API_KEY
    //   }
    // });

    return {
      data: 'test'
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch weather'
    })
  }
});