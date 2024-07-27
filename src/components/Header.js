import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo" />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Menu</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
