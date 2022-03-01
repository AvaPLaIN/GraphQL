const { gql } = require("apollo-server");

const animeType = gql`
  type Anime {
    _id: ID!
    titleEng: String!
    titleJap: String!
    groupName: String!
    type: String!
    description: String!
    banner: String!
    thumnail: String!
    logo: String!
    trailer: String!
    genres: [String]!
    status: String!
    released: String!
    episodes: [String]!
    episodesCount: Int!
  }
`;

module.exports = { animeType };
