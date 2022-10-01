import "../App.css";
import NoNotes from "../Components/NotesHomePageComponents/NoNotes.js";
import NotesExist from "../Components/NotesHomePageComponents/NotesExist.js";

import React, { useState } from "react";

const NotesHomepageScreen = () => {
  const [notesPresentBoolean, setNotesPresentBoolean] = useState(false);
  const [notesArray, setNotesArray] = useState([]);

  //On page load (useEffect), if notes are in localstorage, then setNotesPresentBoolean to true;
  //On create-button click on NoNotes, create a card in NotesExist component, and set notesPresentBoolean to true;
  //On new empty card card click OR any card click, go to edit that specific card screen;

  //on create a Note click in NoNotes, append a new card in NotesHomepageScreen, and pass the new state to NotesExist component;

  const addFirstNote = () => {
    let firstNote = {
      uid: getUniqueId,
      title: "Title",
      content: "Type your note here...",
    };
    setNotesArray([firstNote]);
    setNotesPresentBoolean(true);
  };

  const addAnotherNote = () => {
    let newNote = {
      uid: getUniqueId,
      title: "Title2",
      content: "Type your note here...",
    }
    setNotesArray([...notesArray, newNote]);
  }

  const getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const renderNotes = () => {
    return notesArray.map((note) => {
      return (
        <div className="note" key={note.uid}>
          <h3 className="note-title">{note.title}</h3>
          <p className="note-content">{note.content}</p>
        </div>
      );
    });
  };

  if (!notesPresentBoolean) {
    return (
      <>
        {/* NoNotes does not render notes; it add the first note, and switches the component to NotesExist */}
        <NoNotes addFirstNote={addFirstNote} />
      </>
    );
  } else {
    return (
      <>
        <NotesExist renderNotes={renderNotes} notesArray={notesArray} addAnotherNote={addAnotherNote} />
      </>
    );
  }
};

export default NotesHomepageScreen;
