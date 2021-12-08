const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const { animeType, userType, query } = require('./typedefs/index');
const { resolvers } = require('./resolvers/index');

const typeDefs = makeExecutableSchema({
  typeDefs: [query, userType, animeType],
  resolvers,
});

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
