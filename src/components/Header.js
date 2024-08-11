import { LOGO_URL } from "../Utils/constants";
import { useState, lazy } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const style = {
    textDecoration: "none",
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo" />
      <ul className="nav-items">
        <li>Online Status:{onlineStatus ? "✅" : "⛔"}</li>
        <li>
          <Link style={style} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={style} to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link style={style} to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link style={style} to="/grocery">
            Grocery
          </Link>
        </li>
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
