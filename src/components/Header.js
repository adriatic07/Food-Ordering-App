import { LOGO_URL } from "../Utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const style = {
    textDecoration: "none",
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  //  console.log(cartItems);

  return (
    <div className="flex justify-between drop-shadow-lg bg-green-100">
      <img className="w-40 h-28 ml-20" src={LOGO_URL} alt="logo" />
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "⛔"}</li>
          <li className="px-4">
            <Link style={style} to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link style={style} to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link style={style} to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link style={style} to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link style={style} to="/cart">
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <li>
            <button
              className="login-btn"
              style={
                btnName === "Login" ? { color: "green" } : { color: "red" }
              }
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          {btnName === "Logout" ? (
            <li className="px-4 font-semibold text-gray-600">{loggedInUser}</li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
