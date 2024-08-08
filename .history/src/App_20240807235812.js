// src/App.js
import React from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import MenuList from "./components/MenuList";


function App() {
      return (
        <Router>
            <div className="h-screen flex flex-col">
                <div className="bg-my_black p-2 h-14 text-center">
                    <div className="h-10 w-10">
                        <img src='/images/logo_background.png' alt="logo" />
                    </div>

                </div>
                <div className="flex-1 bg-gray-200 p-4 text-center">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </div>
                <div className="bg-gray-100 p-4 text-center">
                    Footer
                </div>
            </div>
        </Router>
      );
}

export default App;
