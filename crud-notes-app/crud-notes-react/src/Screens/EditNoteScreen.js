import "../App.css";

import React from "react";

function EditNoteScreen() {
  return (
    <>
    <div>
        <button>back</button>
        <p>Edit Note</p>
        <button>options</button>
    </div>
      <input placeholder="Title..."/>
      <textarea placeholder="Note body..."/>
    </>
  );
}

export default EditNoteScreen;
