import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LevelSelection from './components/LevelSelection';
import Level1 from './components/Level1';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/levels" element={<LevelSelection />} />
          <Route path="/level1" element={<Level1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
