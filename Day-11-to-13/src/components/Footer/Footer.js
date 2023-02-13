import React, { useContext } from "react";
import UserContext from "../../helpers/userContext";
import "./Footer.css";

const Footer = () => {
  const { user } =useContext(UserContext)
  return <div className="footer">
    <p>Developed with ♥ by {user.name}</p>
    <p>Contact us {user.email}</p>
  </div>;
};

export default Footer;
