import { LOGO_URL } from "../Utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("Header Render");

  useEffect(() => {
    console.log("Use Effect Render");
  }, [btnName]);

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo" />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Menu</li>
        <li>Cart</li>
        <li>
          <button
            className="login-btn"
            style={btnName === "Login" ? { color: "green" } : { color: "red" }}
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
