let Query = {
  hello: () => "World!",
  posts: async (parent, args, { prisma }, info) => {
    try {
      const allPosts = await prisma.post.findMany({
        include: {
          author: true,
        },
      });
      return allPosts;
    } catch (err) {
      throw new GraphQLError(err);
    }
  },
};

export default Query;
