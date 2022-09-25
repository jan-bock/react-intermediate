import "../App.css";

import React from "react";

function ProfilePage() {
  return (
    <>
      <h1 className="notely-title">Notely</h1>
      <img placeholder="profile image" alt="alt text"/>
      <h2>Jan Bock</h2>
      <p>Edinburgh, United Kingdom</p>
      <ul>
        <li>
            <img placeholder="diamond pic" alt="diamond"/>
            <p>Buy Premium</p>
        </li>
        <li>
            <img placeholder="Log Out" alt="log out"/>
            <p>Log Out</p>
        </li>
      </ul>
    </>
  ); 
}

export default ProfilePage;
