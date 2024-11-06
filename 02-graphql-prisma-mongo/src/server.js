import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import { GraphQLError } from "graphql";
import bcrypt from "bcryptjs";
const { hashSync, compareSync } = bcrypt;

const prisma = new PrismaClient();

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
  }
  type Mutation {
    signUp(data: SignUpInput): SignUpPayload!
    signIn(data: SignInInput): SignInPayload!
  }
  type SignUpPayload {
    message: String!
  }
  type SignInPayload {
    token: String!
  }
  input SignUpInput {
    name: String!
    age: Int!
    email: String!
    password: String!
    role: Role
  }
  input SignInInput {
    email: String!
    password: String!
  }
  enum Role {
    ADMIN
    DEVELOPER
    MANAGER
  }
`;
const resolvers = {
  Query: {
    hello: () => "World!",
  },
  Mutation: {
    signUp: async (parent, args, context, info) => {
      let { name, age, email, password, role } = args.data;
      role = role || "DEVELOPER";
      const hashedPassword = hashSync(password, 12);
      try {
        const createdUser = await prisma.user.create({
          data: {
            name,
            age,
            email,
            password: hashedPassword,
            role,
          },
        });
        return { message: "User signed up successfully" };
      } catch (err) {
        console.log(err);
        throw new GraphQLError(err);
      }
    },
    signIn: async (parent, args, context, info) => {
      try {
        const { email, password } = args.data;
        const foundUser = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!foundUser) {
          throw new GraphQLError("Email not found - " + email);
        }
        console.log(foundUser);
        const isMatched = compareSync(password, foundUser.password);
        if (!isMatched) {
          throw new GraphQLError("Password does not match!");
        }
        return { token: "TOKEN VALUE" };
      } catch (err) {
        console.log(err);
        throw new GraphQLError(err);
      }
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

server.listen(4100, () => console.log("Graphql Server running on PORT: 4100"));
