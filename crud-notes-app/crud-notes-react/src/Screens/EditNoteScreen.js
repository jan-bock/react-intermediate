import "../App.css";
import React from "react";
import Options from "../images/options.png";
import BackArrow from "../images/back-arrow-left.png";

function EditNoteScreen() {
  return (
    <>
      <div className="all-notes-top-btns">
        <button className="all-notes-btn"><img src={BackArrow} alt="back arrow"/></button>
        <p className="all-notes-btn custom-font all-notes-header">Edit Note</p>
        <button className="all-notes-btn"> <img src={Options} alt="options symbol"/></button>
      </div>
      <div id="edit-note">
        <input className="edit-inputs" id="edit-title-input" placeholder="Title..." />
        <textarea className="edit-inputs" id="edit-body-input" placeholder="Note body..." />
      </div>
    </>
  );
}

export default EditNoteScreen;
