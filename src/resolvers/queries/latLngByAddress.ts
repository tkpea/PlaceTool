import {QueryResolvers} from '../../types/generated/graphql';
import {Client} from '@googlemaps/google-maps-services-js';
import {GOOGLE_API_KEY} from '../../config/constants';
export const latLngByAddress: QueryResolvers['latLngByAddress'] = async (
  _,
  args,
  __,
  ___
) => {
  const client = new Client({});
  const location = await client
    .geocode({
      params: {
        address: args.address,
        key: GOOGLE_API_KEY,
      },
    })
    .then(res => {
      return res.data.results[0].geometry.location;
    });
  return {
    lat: location.lat,
    lng: location.lng,
  };
};
