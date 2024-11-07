import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import { loadFile } from "graphql-import-files";
import Query from "./graphql/resolvers/Query.js";
import Mutation from "./graphql/resolvers/Mutation.js";

const prisma = new PrismaClient();

const schema = createSchema({
  typeDefs: loadFile("./src/graphql/schema.graphql"),
  resolvers: { Query, Mutation },
});

const yoga = createYoga({
  schema,
  context: ({ request }) => {
    const authHeader = request.headers.get("authorization");
    let token = null;
    if (authHeader) {
      token = authHeader.split(" ")[1]; // "Bearer TOKEN_VALUE"
    }
    return {
      token,
      prisma,
    };
  },
});

const server = createServer(yoga);

server.listen(4100, () => console.log("Graphql Server running on PORT: 4100"));
