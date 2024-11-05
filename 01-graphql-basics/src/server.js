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
    author: "u003",
  },
  {
    id: "p002",
    title: "Advanced NodeJS",
    body: "For mastering node",
    published: true,
    author: "u002",
  },
  {
    id: "p003",
    title: "React Refrsh",
    body: "Write less do more",
    published: false,
    author: "u003",
  },
  {
    id: "p004",
    title: "Anxious Angular",
    body: "The CheatSheet",
    published: true,
    author: "u001",
  },
];

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
    users(searchTerm: String): [User!]!
    posts(order: String): [Post!]!
  }
  type User {
    id: ID!
    name: String!
    age: Int!
    posts: [Post!]!
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
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
    posts: (parent, args, context, info) => {
      const sortOrder = args.order;
      if (sortOrder && sortOrder === "asc") {
        return posts.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          } else if (b.title > a.title) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      if (sortOrder && sortOrder === "desc") {
        return posts.sort((a, b) => {
          if (a.title > b.title) {
            return -1;
          } else if (b.title > a.title) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      return posts;
    },
  },
  User: {
    posts: (parent, args, context, info) => {
      return posts.filter((post) => post.author === parent.id);
    },
  },
  Post: {
    author: (parent, args, context, info) => {
      return users.find((user) => user.id === parent.author);
    },
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
