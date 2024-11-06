import { graphql, GraphQLError } from "graphql";
import { v4 } from "uuid";

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
  deleteUser: (parent, args, { db }, info) => {
    const position = db.users.findIndex((user) => user.id === args.userId);
    if (position === -1) {
      throw new GraphQLError("Unable to delete user for Id - " + args.userId);
    }

    db.posts = db.posts.filter((post) => {
      const isMatched = post.author === args.userId;
      if (isMatched) {
        db.comments = db.comments.filter(
          (comment) => comment.postId !== post.id
        );
      }
      return !isMatched;
    });

    db.comments = db.comments.filter(
      (comment) => comment.creator !== args.userId
    );

    const [deletedUser] = db.users.splice(position, 1);
    return deletedUser;
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
  deletePost: (parent, args, { db }, info) => {
    const position = db.posts.findIndex((post) => post.id === args.postId);
    if (position === -1) {
      throw new GraphQLError("Unable to delete post for id - " + args.postId);
    }
    db.comments = db.comments.filter(
      (comment) => comment.postId !== args.postId
    );
    const [deletedPost] = db.posts.splice(position, 1);
    return deletedPost;
  },
  createComment: (parent, args, { db }, info) => {
    const { text, creator, postId } = args;
    const userPosition = db.users.findIndex((user) => user.id === creator);
    if (userPosition === -1) {
      throw new GraphQLError("Unable to find user for id - " + creator);
    }
    const postPosition = db.posts.findIndex((post) => post.id === postId);
    if (postPosition === -1) {
      throw new GraphQLError("Unable to find post for id - " + postId);
    }
    const newComment = {
      id: v4(),
      text,
      postId,
      creator,
    };
    db.comments.push(newComment);
    return newComment;
  },
  deleteComment: (parent, args, { db }, info) => {
    const position = db.comments.findIndex(
      (comment) => comment.id === args.commentId
    );
    if (position === -1) {
      throw new GraphQLError(
        "Unable to delete comment for id  - " + args.commentId
      );
    }
    const [deletedComment] = db.comments.splice(position, 1);
    return deletedComment;
  },
};

export default Mutation;
