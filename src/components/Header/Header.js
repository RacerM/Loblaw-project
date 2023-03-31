import "./Header.scss";
import Headerlogo from "../../assets/Photos-PNG/Loblaws-Logo.png";
import searchicon from "../../assets/Icons-SVG/Search Icon.svg";
import cartlogo from "../../assets/Icons-SVG/Cart.svg";

function Header() {
  return (
    <header className="header">
      <img src={Headerlogo} className="headerlogo" alt="logo" />
      <div id="input_container">
        <input type="text" id="input" placeholder="search" />
        {/* <img src={searchicon} id="input_img" /> */}
      </div>
      <img src={cartlogo} className="cartlogo" alt="logo" />
      <button className="button" type="button">
        Checkout
      </button>
    </header>
  );
}
export default Header;
