const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookcount: Int
    savedBooks


}
  type Query {
   me: [User]
  }
`;

module.exports = typeDefs;
