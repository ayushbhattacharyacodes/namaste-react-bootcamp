import { useState } from "react";
import "./Navs.css";

const Navs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="navs">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Cart</a>
        </li>
        <li>
          {!isLoggedIn && (
            <button className="auth-btn" onClick={toggleLogin}>
              Logout
            </button>
          )}
          {isLoggedIn && (
            <button className="auth-btn" onClick={toggleLogin}>
              Login
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navs;
