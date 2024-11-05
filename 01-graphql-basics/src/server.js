import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";

let users = [
  { id: "u001", name: "monica", age: 22 },
  { id: "u002", name: "rachel", age: 23 },
  { id: "u003", name: "ross", age: 24 },
];

let posts = [
  {
    id: "p001",
    title: "GraphQL 101",
    body: "Begenning with GraphQL",
    published: false,
  },
  {
    id: "p002",
    title: "Advanced NodeJS",
    body: "For mastering node",
    published: true,
  },
  {
    id: "p003",
    title: "React Refrsh",
    body: "Write less do more",
    published: false,
  },
  {
    id: "p004",
    title: "Anxious Angular",
    body: "The CheatSheet",
    published: true,
  },
];

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
    users(searchTerm: String): [User!]!
    posts: [Post!]!
  }
  type User {
    id: ID!
    name: String!
    age: Int!
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => "World!",
    users: (parent, args, context, info) => {
      if (args.searchTerm) {
        return users.filter((user) => user.name.includes(args.searchTerm));
      }
      return users;
    },
    posts: () => posts,
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
