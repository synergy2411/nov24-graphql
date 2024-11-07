import LoginForm from "./components/auth/login-form";
import Posts from "./components/posts/posts";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">My Blog App</h1>
      <LoginForm />
      <Posts />
    </div>
  );
}

export default App;
