const { ApolloServer } = require('apollo-server');

const { typeDefs } = require('./typedefs/index');
const { resolvers } = require('./resolvers/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    authScope: req.headers.authorization,
  }),
});

module.exports = server;
