import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
// const graphqlYoga = require("graphql-yoga");
// console.log("hello");
const server = new GraphQLServer({
  // write schema here
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("GraphQL Server Running"));
