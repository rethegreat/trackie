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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/trackie" element={<WelcomePage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/spendingForm" element={<SpendingForm />} />
      </Routes>
    </Router>
  );
}

export default App
