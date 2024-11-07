import { useState } from "react";
import LoginForm from "./components/auth/login-form";
import Posts from "./components/posts/posts";
import AuthContext from "./context/auth-context";
import MainNavigation from "./components/header/MainNavigation";
import PostForm from "./components/form/post-form";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);

  const onTabSelected = (tab) => setSelectedTab(tab);

  return (
    <div className="container">
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <MainNavigation onTabSelected={onTabSelected} />
        <h1 className="text-center">My Blog App</h1>
        {selectedTab === 1 && <Posts />}
        {selectedTab === 2 && <LoginForm />}
        {selectedTab === 3 && <PostForm />}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
