import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MeditationPage from './pages/MeditationPage';
import MeditationLogPage from './pages/MeditationLogPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/meditation-log" element={<MeditationLogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;