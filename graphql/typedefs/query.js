const { gql } = require('apollo-server');

const query = gql`
  type Query {
    animes: [Anime]!
    anime(id: ID!): Anime!

    users: [User]!
    user(id: ID!): User!
  }

  type Mutation {
    createAnime: String!
    updateAnime: String!
    deleteAnime: String!

    createUser: String!
    updateUser: String!
    deleteUser: String!
  }
`;

module.exports = { query };
