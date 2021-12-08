require('dotenv').config({ path: './config.env' });
const connectDB = require('./config/database');
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

connectDB();
const PORT = process.env.PORT || 8800;

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => 'hello world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port: PORT })
  .then((res) => console.log(`Server running at ${res.url}`));
