let Query = {
  hello: () => "World!",
  users: (parent, args, { db }, info) => {
    if (args.searchTerm) {
      return db.users.filter((user) => user.name.includes(args.searchTerm));
    }
    return db.users;
  },
  posts: (parent, args, { db }, info) => {
    const sortOrder = args.order;
    if (sortOrder && sortOrder === "asc") {
      return db.posts.sort((a, b) => {
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
      return db.posts.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (b.title > a.title) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return db.posts;
  },
  comments: (parent, args, { db }, info) => {
    return db.comments;
  },
};

export default Query;
