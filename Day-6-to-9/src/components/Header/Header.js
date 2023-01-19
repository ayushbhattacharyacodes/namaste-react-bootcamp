import React from "react";
import Title from "./Title";
import Navs from "./Navs";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <Navs />
    </div>
  );
};

export default Header;
