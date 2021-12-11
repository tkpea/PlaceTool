import {mutations} from './mutations';
import {query} from './queries';
import {dateScalar} from './scalars/date';

export const resolvers = {
  Query: query,
  Mutation: mutations,
  Date: dateScalar,
};
