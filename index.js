//* IMPORTS
//     * CONFIG
require('dotenv').config({ path: './config.env' });
const connectDB = require('./config/database');

//     * SERVER
const server = require('./graphql/index');
// const { ApolloServer } = require('apollo-server');

//     * GRAPHQL
// const gql = require('graphql-tag');

//     * MODELS
const Anime = require('./models/Anime');
const User = require('./models/User');

//     * MIDDLEWARE

//     * LIBRARIES

connectDB();
const PORT = process.env.PORT || 8800;

//! GraphQL TYPE
// const typeDefs = gql`
//   type Anime {
//     _id: ID!
//     title: String!
//     description: String!
//     banner: String!
//     thumnail: String!
//     logo: String!
//     trailer: String!
//     genres: [String]!
//     status: String!
//     released: String!
//     episodes: [String]!
//   }
//   type Query {
//     getAnimes: [Anime]
//   }
// `;

// const resolvers = {
//   Query: {
//     getAnimes: async () => {
//       try {
//         const animes = await Anime.find({}, null, { limit: 50 });
//         return animes;
//       } catch (error) {
//         throw new Error(error);
//       }
//     },
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

server
  .listen({ port: PORT })
  .then((res) => console.log(`Server running at ${res.url}`));
