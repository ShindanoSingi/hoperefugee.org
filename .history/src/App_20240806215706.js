// src/App.js
import React from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <Router>
        <div className="flex flex-col lg:flex-row">
            <div className="w-1/4 lg:w-1/5 bg-my_black h-screen">
                <div className="text-primary text-2xl font-bold text-center p-4">
                    <h1>Menu</h1>
                </div>
                <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
        </Routes>
            </div>

    </Router>
  );
}

export default App;
