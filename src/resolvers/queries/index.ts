import {QueryResolvers} from '../../types/generated/graphql';
import {latLngByAddress} from './latLngByAddress';
import {placesByLatLng} from './placesByLatLng';

export const query: QueryResolvers = {
  latLngByAddress,
  placesByLatLng,
};
