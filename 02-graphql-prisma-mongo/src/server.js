import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
  }
`;
const resolvers = {
  Query: {
    hello: () => "World!",
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

server.listen(4100, () => console.log("Graphql Server running on PORT: 4100"));
