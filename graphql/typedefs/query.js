const { gql } = require('apollo-server');

const query = gql`
  type Query {
    animes: [Anime]!
    anime(id: ID!): Anime!

    users: [User]!
    user(id: ID!): User!
  }
`;

module.exports = { query };
