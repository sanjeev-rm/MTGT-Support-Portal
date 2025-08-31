import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import WelcomeScreen from './Welcome/WelcomeScreen';
import FieldIssueFormStep1 from './Issue1/FieldIssueFormStep1';
import FieldIssueFormStep2 from './Issue2/FieldIssueFormStep2';
import FieldIssueFormStep3 from './Issue3/FieldIssueFormStep3';
import Popup from './Submission/Popup';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/issue1" element={<FieldIssueFormStep1 />} />
        <Route path="/issue2" element={<FieldIssueFormStep2 />} />
        <Route path="/issue3" element={<FieldIssueFormStep3 />} />
        <Route path="/submission" element={<Popup />} />
      </Routes>
    </Router>
  );
};

export default App;
