import { DirectionResponse, Leg, QueryResolvers, Route, Step } from '../../types/generated/graphql'
import { Client, DirectionsRoute, DirectionsStep, Language, RouteLeg, TravelMode } from '@googlemaps/google-maps-services-js'
import { GOOGLE_API_KEY } from '../../config/constants'

export const direction: QueryResolvers['direction'] = async (
  _,
  args,
  __,
  ___
) => {
  const client = new Client({})
  if (!args.input) throw new Error('Inputがありません')
  const results = await client.directions({
    params: {
      origin: {
        lat: args.input.origin.lat!,
        lng: args.input.origin.lng!
      },
      destination: {
        lat: args.input.destination.lat!,
        lng: args.input.destination.lng!
      },
      mode: args.input.mode as unknown as TravelMode || undefined,
      language: Language.ja,
      key: GOOGLE_API_KEY
    }
  }).catch(e => {
    console.error(e)
  })
  if (!results) throw new Error('api error')

  const response: DirectionResponse = {
    routes: setRoutes(results.data.routes)
  }
  return response
}

const setSteps = (steps: DirectionsStep[]): Step[] => {
  return steps.map((step) => {
    return {
      distance: step.distance.value,
      duration: step.duration.value,
      endLocation: step.end_location,
      startLocation: step.start_location,
      travelMode: step.travel_mode
    }
  })
}

const setLegs = (legs: RouteLeg[]): Leg[] => {
  return legs.map((leg) => {
    return {
      distance: leg.distance.value,
      duration: leg.duration.value,
      startAddress: leg.start_address,
      endAddress: leg.end_address,
      steps: setSteps(leg.steps)
    }
  })
}

const setRoutes = (routes: DirectionsRoute[]): Route[] => {
  return routes.map((route) => {
    return {
      summary: route.summary,
      legs: setLegs(route.legs)
    }
  })
}
