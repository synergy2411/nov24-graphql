import { GraphQLError } from "graphql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { sign, verify } = jwt;
const { hashSync, compareSync } = bcrypt;

const SECRET_KEY = "MY_SUPER_SECRET_KEY";

let Mutation = {
  signUp: async (parent, args, { prisma }, info) => {
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
  signIn: async (parent, args, { prisma }, info) => {
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
      const isMatched = compareSync(password, foundUser.password);
      if (!isMatched) {
        throw new GraphQLError("Password does not match!");
      }
      const token = sign(foundUser, SECRET_KEY);
      return { token };
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },
  createPost: async (parent, args, { token, prisma }, info) => {
    if (!token) {
      throw new GraphQLError("Authentication required.");
    }
    try {
      const { title, body } = args.data;
      const { id } = verify(token, SECRET_KEY);
      const createdPost = await prisma.post.create({
        data: {
          title,
          body,
          published: false,
          authorId: id,
        },
      });
      return createdPost;
    } catch (err) {
      throw new GraphQLError(err);
    }
  },
};

export default Mutation;
