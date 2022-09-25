import "../App.css";

import React from "react";
import Premium from "../images/premium.png";
import Check from "../images/check.png";
import Close from "../images/close.png";
import { useNavigate } from "react-router-dom";

function PurchasePremiumScreen() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <h1 className="notely-title">Notely Premium</h1>
      <button id="close-btn" onClick={navigateToHome}>
        <img src={Close} alt="exit button" />
      </button>
      <img
        src={Premium}
        className="premium-img"
        placeholder="other image"
        alt="premium"
      />
      <h2 className="screen-title">Start Using Notely with Premium Benefits</h2>

      <ul className="app-default-font premium-list">
        <li>
          <img className="check" src={Check} alt="tick" />
          Save unlimited notes to a single project
        </li>
        <li>
          <img className="check" src={Check} alt="tick" />
          Create unlimited projects and teams
        </li>
        <li>
          <img className="check" src={Check} alt="tick" />
          Daily backups to keep your data safe
        </li>
      </ul>

      <div className="premium-options-btn-group">
        <button className="premium-btn">
          <p className="prem-desc-title">Annual</p>
          <h1 className="prem-btn-price">£24.99</h1>
          <p className="custom-font premium-desc">per year</p>
        </button>
        <button className="premium-btn">
          <p className="prem-desc-title">Monthly</p>
          <h1 className="prem-btn-price">£3.99</h1>
          <p className="custom-font premium-desc">per month</p>
        </button>
      </div>

      <button className="introduction-button-group">CONFIRM</button>
    </>
  );
}

export default PurchasePremiumScreen;
