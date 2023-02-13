import React, { useContext } from "react";
import Title from "./Title";
import Navs from "./Navs";
import "./Header.css";
import useOnline from "../../hooks/useOnline";
import UserContext from "../../helpers/userContext";

const Header = () => {
  const { user } = useContext(UserContext)
  const isOnline = useOnline()
  return (
    <div className="header">
      <Title />
      {isOnline ? "✅":"⛔"}
      {user.name} {user.email}
      <Navs />
    </div>
  );
};

export default Header;
