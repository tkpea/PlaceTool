import { QueryResolvers } from '../../types/generated/graphql'
import { direction } from './direction'
import { latLngByAddress } from './latLngByAddress'
import { me } from './me'
import { placesByLatLng } from './placesByLatLng'

export const query: QueryResolvers = {
  latLngByAddress,
  placesByLatLng,
  direction,
  me
}
