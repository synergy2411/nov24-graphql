import { useContext } from "react";
import AuthContext from "../../context/auth-context";

function MainNavigation({ onTabSelected }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const onLogoutHandler = (event) => {
    localStorage.clear();
    setIsLoggedIn(false);
    onTabSelected(1);
  };
  return (
    <header>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className="nav-link" onClick={() => onTabSelected(1)}>
              All Posts
            </button>
          </li>
          {!isLoggedIn && (
            <li className="nav-item">
              <button className="nav-link" onClick={() => onTabSelected(2)}>
                Login{" "}
              </button>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <button className="nav-link" onClick={onLogoutHandler}>
                Logout{" "}
              </button>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <button className="nav-link" onClick={() => onTabSelected(3)}>
                Add Post{" "}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
