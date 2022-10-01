import { useEffect } from "react";
import "../../App.css";

const NoNotes = ({ renderNotes, notesArray, addAnotherNote }) => {

  useEffect(() => {
  }, [notesArray])

  return (
    <>
      <p className="custom-font all-notes-header" id="profile-icon">
        profile
      </p>
      <div className="all-notes-top-btns">
        <button className="all-notes-btn">sort</button>
        <button className="all-notes-btn custom-font all-notes-header">
          All Notes
        </button>
        <button className="all-notes-btn">sear</button>
      </div>
      <div className="notes-background">
        <div className="notes-container">{renderNotes()}</div>
      </div>
      <button onClick={addAnotherNote}>+</button>
    </>
  );
};

export default NoNotes;
