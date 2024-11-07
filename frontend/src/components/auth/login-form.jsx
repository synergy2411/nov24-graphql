const LoginForm = () => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Login Form</h2>
            <form>
              {/* email */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder=""
                />
                <label for="email">Email:</label>
              </div>

              {/* password */}
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder=""
                />
                <label for="password">Password:</label>
              </div>
              {/* buttons */}
              <div className="row">
                <div className="col-6">
                  <div className="d-grid">
                    <button className="btn btn-primary">Login</button>
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
