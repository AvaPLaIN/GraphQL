const { ApolloServer } = require('apollo-server');

const { typeDefs } = require('./typedefs/index');
const { resolvers } = require('./resolvers/index');

console.log('graphql/index.js-resolvers:', resolvers);

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
