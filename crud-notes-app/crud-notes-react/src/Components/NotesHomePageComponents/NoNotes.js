import "../../App.css";
import AllNotesImg from "../../images/all-notes-page.png";

const NoNotes = ( { addFirstNote } ) => {
  return (
    <>
        <p className="custom-font all-notes-header" id="profile-icon">profile</p>
    <div className="all-notes-top-btns">
        <button className="all-notes-btn">sort</button>
        <button className="all-notes-btn custom-font all-notes-header">All Notes</button>
        <button className="all-notes-btn">sear</button>
    </div>
      <img className="premium-img all-notes-img" placeholder="shelf with random items" alt="all notes page" src={AllNotesImg}/>
      <h2 className="screen-title">Create your first note!</h2>
      <p className="app-default-font all-notes-desc">Add a note about anything (your thoughts on climate change, or your history essay) and share it witht the world.</p>
      <button className="introduction-button-group create-note-btn" onClick={addFirstNote}>CREATE A NOTE</button>
    </>
  );
}

export default NoNotes;
