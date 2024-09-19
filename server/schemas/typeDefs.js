const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    books: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, book: String!): User
    removeBook(book: String!): User
  }
`;

module.exports = typeDefs;
