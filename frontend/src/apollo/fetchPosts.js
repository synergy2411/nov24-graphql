import { gql } from "@apollo/client";

const FETCH_POSTS = gql`
  query FetchPosts {
    posts {
      id
      title
      body
      published
    }
  }
`;

export default FETCH_POSTS;
