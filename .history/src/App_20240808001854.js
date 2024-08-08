// src/App.js
import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import MenuList from "./components/MenuList";


function App() {
    const [isOpen, setOpen] = useState(false)
      return (
        <Router>
            <div className="h-screen flex flex-col">
                <div className="bg-my_black p-2 h-16 flex items-center">
                    <div className="h-12 w-12 rounded-full border-primary border flex items-center">
                        <Link to='/'>
                        <img src='/images/logo_no_background.png' alt="logo" />
                        </Link>
                    </div>
                    <div className="h-12 w-12 rounded-full border-primary border flex items-center">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
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
