const { gql } = require('apollo-server');

const animeType = gql`
  type Anime {
    _id: ID!
    title: String!
    description: String!
    banner: String!
    thumnail: String!
    logo: String!
    trailer: String!
    genres: [String]!
    status: String!
    released: String!
    episodes: [String]!
  }
`;

module.exports = { animeType };
