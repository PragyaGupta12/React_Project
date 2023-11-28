import logo from "/src/logo.png";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent