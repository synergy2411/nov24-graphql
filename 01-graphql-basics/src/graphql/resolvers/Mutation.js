import { v4 } from "uuid";
import { GraphQLError } from "graphql";

const Mutation = {
  createUser: (parent, args, { db }, info) => {
    const { name, age } = args;
    const newUser = {
      id: v4(),
      name,
      age,
    };
    db.users.push(newUser);
    return newUser;
  },
  createPost: (parent, args, { db }, info) => {
    const { title, body } = args.data;
    const position = db.users.findIndex((user) => user.id === args.author);
    if (position === -1) {
      throw new GraphQLError("User does not exist for Id - " + args.author);
    }
    const newPost = {
      id: v4(),
      title,
      body,
      published: false,
      author: args.author,
    };
    db.posts.push(newPost);
    return newPost;
  },
};

export default Mutation;
