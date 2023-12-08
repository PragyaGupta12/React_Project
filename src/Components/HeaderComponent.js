import logo from "/src/img/logo.png";
import { Link } from "react-router-dom";

const AppLogo = () => (
  <a href="/">
    <img src={logo} alt="logo" className="logo" />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="navbar">
      <AppLogo />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
