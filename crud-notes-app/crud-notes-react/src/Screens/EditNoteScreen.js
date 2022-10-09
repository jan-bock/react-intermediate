import "../App.css";
import React, { useEffect } from "react";
import Options from "../images/options.png";
import BackArrow from "../images/back-arrow-left.png";

function EditNoteScreen({ dataToDisplay }) {

  useEffect(() => {
  }, [dataToDisplay])

  //onchange of input or textarea, lift state to where notes array is held

  return (
    <>
      <div className="all-notes-top-btns">
        <button className="all-notes-btn"><img src={BackArrow} alt="back arrow"/></button>
        <p className="all-notes-btn custom-font all-notes-header">Edit Note</p>
        <button className="all-notes-btn"> <img src={Options} alt="options symbol"/></button>
      </div>
      <div id="edit-note">
        <input className="edit-inputs" id="edit-title-input" placeholder="Title..." value={dataToDisplay[1]}/>
        <textarea className="edit-inputs" id="edit-body-input" placeholder="Type your note here..." value={dataToDisplay[2]}/>
      </div>
    </>
  );
}

export default EditNoteScreen;
