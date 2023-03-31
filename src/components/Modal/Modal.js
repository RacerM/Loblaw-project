import { useState } from "react";

import "./Modal.scss";
import firstitem from "../../assets/Photos-PNG/Sirloin.png";
import seconditem from "../../assets/Photos-PNG/Striploin.png";

export default function Modal() {
  const [swap, setSwap] = useState(false);

  if (swap) {
    return (
      <>
        <div className="modal-delete-overlay" />
        <div className="modal-delete-body">
          <div className="modal-delete-content">
            <h1 className="modal-title">
              Amazing! You’re now <span className="amount-under">$3.77</span>{" "}
              under your budget!
            </h1>
            <div className="btns">
              <button className="swappedbtn">CHECKOUT</button>
              <button className="swappedbtn">KEEP SHOPPING</button>
            </div>
          </div>
          <p>Change Budget</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="modal-delete-overlay" />
      <div className="modal-delete-body">
        <div className="modal-delete-content">
          <h1 className="modal-title">
            Oops! Looks like you’ve gone{" "}
            <span className="amount-over">$2.04</span> over your budget.
          </h1>
          <h3 className="sub-title">
            Here are some of our suggestions to help you stay under your target.
          </h3>
          <hr></hr>
          <div className="modal-content">
            <div className="first-item">
              <img className="product" src={firstitem} alt="sirloin" />
              <p className="item-name">Beef Sirloin Steak</p>
              <p className="price">$21.56 ea</p>
            </div>
            <button
              className="swap"
              onClick={() => {
                setSwap(true);
              }}
            >
              SWAP
            </button>
            <div className="second-item">
              <img className="product" src={seconditem} alt="sirloin" />
              <p className="item-name">Beef Striploin Steak</p>
              <p className="price">$15.75 ea</p>
            </div>
          </div>
          <div className="modal-delete-actions">
            <p>Change Budget</p>
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </>
  );
}
