import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { users, quotes } from "./fakeDB.js";
const typeDefs = gql`
  type Query {
    users: [User]
  }

  type Query {
    quotes: [quote]
  }

  type quote {
    name: String
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    quotes: () => quotes,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then((url) => {
  console.log("Server ready at", url);
});
