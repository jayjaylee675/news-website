import "./Header.css";
import logo from "../assets/logo_white.png"

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} className="header-logo" />
      </div>
    </header>
  );
}

export default Header;
