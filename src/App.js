import WelcomePage from './Pages/WelcomePage';
import PersonalPage from './Pages/PersonalPage';
import SharedPage from './Pages/SharedPage';

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
      </Routes>
    </Router>
  );
}

export default App
