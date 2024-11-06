let Subscription = {
  comment: {
    subscribe: (parent, args, { pubsub }, info) => {
      return pubsub.subscribe("the-comment-channel");
    },
    resolve: (payload) => payload,
  },
  post: {
    subscribe: (parent, args, { pubsub }, info) => {
      return pubsub.subscribe("the-post-channel");
    },
    resolve: (payload) => payload,
  },
};

export default Subscription;
