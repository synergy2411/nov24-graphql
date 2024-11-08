import { useQuery } from "@apollo/client";
import FETCH_POSTS from "../../apollo/fetchPosts";

const Posts = () => {
  const { data, loading, error, refetch } = useQuery(FETCH_POSTS);
  if (error) return <h2>Something went wrong</h2>;
  if (loading) return <h2>Loading...</h2>;

  refetch();

  return (
    <>
      <h1 className="text-center">Awesome Posts</h1>

      <div className="row">
        {data &&
          data.posts.map((post) => (
            <div className="col-4" key={post.id}>
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center">{post.title.toUpperCase()}</h4>
                </div>
                <div className="card-body">
                  <blockquote>
                    {post.body}{" "}
                    <cite className="float-end">-{post.author.name}</cite>{" "}
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Posts;
