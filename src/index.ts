import {ApolloServer} from 'apollo-server';
import {loadSchemaSync} from '@graphql-tools/load';
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {addResolversToSchema} from '@graphql-tools/schema';
import {join} from 'path';
import {resolvers} from './resolvers';
import auth from './contexst/auth';

const schema = loadSchemaSync(join(__dirname, '../schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({schema, resolvers});

// サーバーの起動
const server = new ApolloServer({
  schema: schemaWithResolvers,
  context: auth
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});

