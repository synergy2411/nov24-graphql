import { createServer } from "node:http";
import { createYoga, createSchema, createPubSub } from "graphql-yoga";
import { loadFile } from "graphql-import-files";
import db from "./model/db.js";
import resolvers from "./graphql/resolvers/resolvers.js";

const pubsub = createPubSub();

const schema = createSchema({
  typeDefs: loadFile("./src/graphql/schema.graphql"),
  resolvers,
});

const yoga = createYoga({
  schema,
  context: {
    db,
    pubsub,
  },
});

const server = createServer(yoga);

server.listen(4000, () => console.log("Yoga server started at PORT : 4000"));
