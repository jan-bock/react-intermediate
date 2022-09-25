import "../App.css";

import React from "react";
import WelcomeImage from "../images/welcome-page.png";
import { useNavigate } from "react-router-dom";

function WelcomeScreen() {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/create");
  }

  return (
    <>
      <h1 className="notely-title">Notely</h1>
      <img src={WelcomeImage} id="welcome-image" placeholder="hello" alt="alt text"/>
      <h2 className="screen-title">World's Safest Digital Notebook</h2>
      <p className="app-default-font">Notely is the world’s safest, largest and intelligent digital notebook. Join over 10M+ users already using Notely.</p>
      <button className="introduction-button-group" onClick={navigateToCreate}>GET STARTED</button>
      <p className="introduction-alt">Already have an account?</p>
    </>
  );
}

export default WelcomeScreen;
