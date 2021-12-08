const { gql } = require('apollo-server');

const userType = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
    resetPasswordToken: String!
    resetPasswordExpire: String!
    verified: Boolean!
    verifiedToken: String!
  }
`;

module.exports = userType;
