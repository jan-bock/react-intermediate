import React, { useState } from "react";
import WelcomeScreen from "./Screens/WelcomeScreen";
import CreateAccountScreen from "./Screens/CreateAccountScreen";
import PurchasePremiumScreen from "./Screens/PurchasePremiumScreen";
import NotesHomepageScreen from "./Screens/NotesHomepageScreen";
import ProfilePage from "./Screens/ProfilePage";
import EditNoteScreen from "./Screens/EditNoteScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [tempEditData, setTempEditData] = useState([null, "", ""]);

  const liftDataToEditScreen = (array) => {
    setTempEditData(array);
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/create" element={<CreateAccountScreen />} />
        <Route path="/premium" element={<PurchasePremiumScreen />} />
        <Route path="/home" element={<NotesHomepageScreen liftDataToEditScreen={liftDataToEditScreen} />} />
        <Route path="/edit" element={<EditNoteScreen dataToDisplay={tempEditData} />} />
        <Route path="/my-profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
