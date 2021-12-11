import { QueryResolvers } from '../../types/generated/graphql'
import { Client, Language } from '@googlemaps/google-maps-services-js'
import { GOOGLE_API_KEY } from '../../config/constants'
export const placesByLatLng: QueryResolvers['placesByLatLng'] = async (
  _,
  args,
  __,
  ___
) => {
  if (!args.input) throw new Error('inputが見つかりません')
  const client = new Client({})
  const places = await client.placesNearby({
    params: {
      location: {
        lat: args.input.lat,
        lng: args.input.lng
      },
      radius: args.input.radius || 500,
      type: args.input.type || undefined,
      language: Language.ja,
      key: GOOGLE_API_KEY,
      pagetoken: args.input.pageToken || undefined
    }
  })

  return {
    places: places.data.results.map(place => {
      return {
        name: place.name,
        latlng: {
          lat: place.geometry?.location.lat || 0,
          lng: place.geometry?.location.lng || 0
        },
        address: place.vicinity,
        placeId: place.place_id
      }
    }),
    nextPageToken: places.data.next_page_token || ''
  }
}
