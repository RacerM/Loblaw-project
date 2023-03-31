import { useState } from "react";
import { createPortal } from "react-dom";
import "./Header.scss";
import Headerlogo from "../../assets/Photos-PNG/Loblaws-Logo.png";
import searchicon from "../../assets/Icons-SVG/Search Icon.svg";
import cartlogo from "../../assets/Icons-SVG/Cart.svg";
import Modal from "../Modal/Modal";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="header">
      <img src={Headerlogo} className="headerlogo" alt="logo" />
      <div id="input_container">
        <input type="text" id="input" placeholder="search" />
        {/* <img src={searchicon} id="input_img" /> */}
      </div>
      <img src={cartlogo} className="cartlogo" alt="logo" />
      <button
        className="button"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Checkout
      </button>
      {showModal && createPortal(<Modal />, document.body)}
    </header>
  );
}
export default Header;
