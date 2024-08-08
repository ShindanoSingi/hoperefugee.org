// src/App.js
import React from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-my_black">
      <LandingPage />
    </div>
  );
}

export default App;
