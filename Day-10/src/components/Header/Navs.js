import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/instamart">Instamart</Link>
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
