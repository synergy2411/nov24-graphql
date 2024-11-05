import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";

let users = [
  { id: "u001", name: "monica", age: 22 },
  { id: "u002", name: "rachel", age: 23 },
  { id: "u003", name: "ross", age: 24 },
];

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
    users: [User!]!
  }
  type User {
    id: ID!
    name: String!
    age: Int!
  }
`;

const resolvers = {
  Query: {
    hello: () => "World!",
    users: () => users,
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

server.listen(4000, () => console.log("Yoga server started at PORT : 4000"));
