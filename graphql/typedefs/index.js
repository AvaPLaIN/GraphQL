const { makeExecutableSchema } = require('@graphql-tools/schema');

const animeType = require('./types/anime');
const userType = require('./types/user');
const { query } = require('./query');

const typeDefs = makeExecutableSchema({
  typeDefs: [query, userType, animeType],
  resolvers: {},
});

module.exports = { typeDefs };
