// src/App.js
import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";


function App() {
    const [isOpen, setOpen] = useState(false)
      return (
        <Router>
            <div className="h-screen flex flex-col">
                <div className="bg-my_black p-2 h-16 shadow-yellow lg:h-20 flex items-center justify-between px-4">
                    <div className="h-12 w-12 rounded-full shadow-yellow glow-border border-primary border flex items-center ">
                        <Link to='/'>
                        <img src='/images/logo_no_background.png' alt="logo" />
                        </Link>
                    </div>
                    <div className="h-12 w-12 rounded-full border-primary border flex items-center lg:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={32} direction="right" duration={0.8} distance="lg" color="#E6C068"/>
                    </div>
                    <MenuList />
                </div>
                <div className="flex-1 glow-border border-primary border">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </div>
                {/* <div className="bg-my_black p-2 h-16 shadow-yellow lg:h-20 flex items-center justify-between px-4">
                    <Footer />
                </div> */}
            </div>
        </Router>
      );
}

export default App;
