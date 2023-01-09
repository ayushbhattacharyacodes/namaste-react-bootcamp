import React from "react";
import "./Header.css";

const Title = () => {
  return (
    <h1 className="logo">
      <a href="/">Eat St.</a>
    </h1>
  );
};

const Navs = () => {
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
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <Navs />
    </div>
  );
};

export default Header;
