import "../../App.css";

const NoNotes = () => {
  return (
    <>
        <p className="custom-font all-notes-header" id="profile-icon">profile</p>
    <div className="all-notes-top-btns">
        <button className="all-notes-btn">sort</button>
        <button className="all-notes-btn custom-font all-notes-header">All Notes</button>
        <button className="all-notes-btn">sear</button>
    </div>
      <button className="introduction-button-group create-note-btn">CREATE A NOTE</button>
    </>
  );
}

export default NoNotes;
