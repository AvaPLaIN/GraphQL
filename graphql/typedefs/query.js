const { gql } = require('apollo-server');

const query = gql`
  type Query {
    animes: String!
    anime(id: ID!): Anime!

    users: [User]!
    user(id: ID!): User!
  }
`;

module.exports = { query };
