let Subscription = {
  comment: {
    subscribe: (parent, args, { pubsub }, info) => {
      return pubsub.subscribe("the-comment-channel");
    },
    resolve: (payload) => payload,
  },
};

export default Subscription;
