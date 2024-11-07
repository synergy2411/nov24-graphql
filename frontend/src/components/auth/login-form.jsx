import { useMutation } from "@apollo/client";
import { useRef, useState, useContext } from "react";
import SIGN_IN from "../../apollo/sign-in";
import AuthContext from "../../context/auth-context";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loginError, setLoginError] = useState("");
  const context = useContext(AuthContext);

  const [signInMutation] = useMutation(SIGN_IN);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signInMutation({
        variables: {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
      });
      localStorage.setItem("token", data.signIn.token);
      context.setIsLoggedIn(true);
      setLoginError("");
    } catch (err) {
      setLoginError(err.message);
    }
  };
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Login Form</h2>

            {loginError !== "" && (
              <div className="alert alert-danger">
                <p>{loginError}</p>
              </div>
            )}
            <form onSubmit={submitHandler}>
              {/* email */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder=""
                  ref={emailRef}
                />
                <label htmlFor="email">Email:</label>
              </div>

              {/* password */}
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder=""
                  ref={passwordRef}
                />
                <label htmlFor="password">Password:</label>
              </div>
              {/* buttons */}
              <div className="row">
                <div className="col-6">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid">
                    <button className="btn btn-secondary">Reset</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
