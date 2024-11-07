import { ApolloClient, InMemoryCache } from "@apollo/client";
import FETCH_POSTS from "./apollo/fetchPosts";
import SIGN_IN from "./apollo/sign-in";

describe("GraphQL Server Test Suite", () => {
  let client = null;

  // setup and tear-down approach
  beforeEach(() => {
    client = new ApolloClient({
      uri: "http://localhost:4100/graphql",
      cache: new InMemoryCache(),
    });
  });
  afterEach(() => {
    client = null;
  });
  //   beforeAll(() => {});
  //   afterAll(() => {});

  test("should receive all the posts from GraphQL Server", async () => {
    const { data } = await client.query({
      query: FETCH_POSTS,
    });

    expect(data).not.toBeUndefined();
    expect(data.posts.length).toBeGreaterThan(0);
  });

  test("Should generate token when correct credentials given", async () => {
    const { data } = await client.mutate({
      mutation: SIGN_IN,
      variables: {
        email: "ross@test",
        password: "ross123",
      },
    });

    expect(data).not.toBeUndefined();
    expect(data.signIn.token).not.toBeUndefined();
  });

  // test("Should true to be truthy", () => {
  //   expect(true).toBeTruthy();
  // });
  // test("should 5 is greater than 2", () => {
  //   expect(5).toBeGreaterThan(2);
  // });
});
