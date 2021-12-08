const { gql } = require('apollo-server');

const userType = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    createdAt: Date!
    updatedAt: Date!
    resetPasswordToken: String!
    resetPasswordExpire: Date!
    verified: Boolean!
    verifiedToken: String!
  }
`;

module.exports = { userType };
