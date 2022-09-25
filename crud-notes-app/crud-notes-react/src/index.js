import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomeScreen from './Screens/WelcomeScreen';
import CreateAccountScreen from './Screens/CreateAccountScreen';
import PurchasePremiumScreen from './Screens/PurchasePremiumScreen';
import NotesHomepageScreen from './Screens/NotesHomepageScreen';
import ProfilePage from './Screens/ProfilePage';
import reportWebVitals from './reportWebVitals';
import EditNoteScreen from './Screens/EditNoteScreen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />}/>
          <Route path="/welcome" element={<WelcomeScreen />}/>
          <Route path="/create-my-account" element={<CreateAccountScreen />}/>
          <Route path="/purchase-premium" element={<PurchasePremiumScreen />}/>
          <Route path="/notes-homepage" element={<NotesHomepageScreen />}/>
          <Route path="/edit-note" element={<EditNoteScreen />}/>
          <Route path="/my-profile" element={<ProfilePage />}/>

        </Routes>
      </Router>
);

reportWebVitals();