import "../App.css";

import React from "react";
import { useNavigate } from "react-router-dom";

function CreateAccountScreen() {
  const navigate = useNavigate();

  const navigateToPrem = () => {
    navigate("/premium");
  };
  return (
    <>
      <h1 className="notely-title">Notely</h1>
      <h2 className="screen-title">Create a free account</h2>
      <p className="app-default-font">
        Join Notely for free. Create and share unlimited notes with your
        friends.
      </p>
      <div className="input-group">
        <div className="input-block">
          <h3 className="input-headers">First Name</h3>
          <input className="input-boxes" placeholder="Jan" />
        </div>
        <div className="input-block">
          <h3 className="input-headers">Last Name</h3>
          <input className="input-boxes" placeholder="Bock" />
        </div>
        <div className="input-block">
          <h3 className="input-headers">Email Address:</h3>
          <input className="input-boxes" placeholder="j.g.bock@outlook.com" />
        </div>
        <div className="input-block">
          <h3 className="input-headers">Create a Password</h3>
          <input className="input-boxes" placeholder="********" />
        </div>
      </div>

      <button onClick={navigateToPrem} className="introduction-button-group">CREATE ACCOUNT</button>
      <p className="introduction-alt">Already have an account?</p>
    </>
  );
}

export default CreateAccountScreen;
