import { useContext } from "react";
import logo from "/src/img/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const AppLogo = () => (
  <a href="/" className="p-3 m-3">
    <img src={logo} alt="logo" className="logo" data-testid="logo"/> 
    {/* the jest doesn't understand html id that's why we have data-testId */}
  </a>
);

const HeaderComponent = () => {
  const { user } = useContext(UserContext); //user is inside {} because we need to extract it since it has the object in it.
  const cartItems = useSelector(store => store.cart.item)
  
  return (
    <div className="navbar flex justify-between h-20 bg-pink-50">
      <AppLogo />
      <div className="nav-items">
        <ul className="flex py-6 me-5 text-lime-600">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-3">Cart - {cartItems.length}</li>
          <li className="px-3">{user.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
