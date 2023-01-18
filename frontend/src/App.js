import WelcomePage from './Pages/WelcomePage';
import PersonalPage from './Pages/PersonalPage';
import SharedPage from './Pages/SharedPage';
import SpendingForm from './Pages/SpendingForm';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/spendingForm" element={<SpendingForm />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App
