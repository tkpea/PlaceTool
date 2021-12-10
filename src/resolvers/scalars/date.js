'use strict';
exports.__esModule = true;
exports.dateScalar = void 0;
const graphql_1 = require('graphql');
exports.dateScalar = new graphql_1.GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize: function (value) {
    return value.getTime();
  },
  parseValue: function (value) {
    return new Date(value);
  },
  parseLiteral: function (ast) {
    if (ast.kind === graphql_1.Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});
