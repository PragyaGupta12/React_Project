import logo from "/src/img/logo.png";
import { Link } from "react-router-dom";

const AppLogo = () => (
  <a href="/" className="p-3 m-3">
    <img src={logo} alt="logo" className="logo" />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="navbar flex justify-between h-20 bg-pink-50">
      <AppLogo />
      <div className="nav-items">
        <ul className="flex py-6 me-5 text-green-600">
          <li className="px-3" ><Link to="/">Home</Link></li>
          <li className="px-3"><Link to="/about">About</Link></li>
          <li className="px-3"><Link to="/contact">Contact</Link></li>
          <li className="px-3">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
