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

  if (!notesPresentBoolean) {
    return (
      <>
        <NoNotes />
      </>
    );
  } else {
    return (
      <>
        <NotesExist />
      </>
    );
  }
};

export default NotesHomepageScreen;
