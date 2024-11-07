let Query = {
  hello: () => "World!",
  posts: async (parent, args, { prisma }, info) => {
    try {
      const allPosts = prisma.post.findMany();
      return allPosts;
    } catch (err) {
      throw new GraphQLError(err);
    }
  },
};

export default Query;
