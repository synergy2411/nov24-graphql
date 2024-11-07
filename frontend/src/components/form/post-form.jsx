import { useRef } from "react";
import { useMutation } from "@apollo/client";
import CREATE_POST from "../../apollo/createPost";

function PostForm() {
  const titleRef = useRef();
  const bodyRef = useRef();

  const [createPostMutation] = useMutation(CREATE_POST);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createPostMutation({
        variables: {
          title: titleRef.current.value,
          body: bodyRef.current.value,
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Add New Post</h2>
            <form onSubmit={submitHandler}>
              {/* title */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder=""
                  ref={titleRef}
                />
                <label htmlFor="title">Title:</label>
              </div>

              {/* body */}
              <textarea
                name="body"
                className="form-control mb-3"
                id=""
                placeholder="write your post message here..."
                rows="8"
                ref={bodyRef}
              ></textarea>

              {/* button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Add Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
