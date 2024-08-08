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
            <div class="h-screen flex flex-col">
                <div class="bg-gray-100 p-4 text-center">
                Header
                </div>
                <div class="flex-1 bg-gray-200 p-4 text-center">
                    Main
                </div>
                <div class="bg-gray-100 p-4 text-center">
                    Footer
                </div>
                  {/* <Router>
                        <div className="absolute lg:relative lg:block p-4">
                              <MenuList />
                        </div>
                        <Routes>
                              <Route path="/" element={<LandingPage />} />
                              <Route path="/home" component={<LandingPage />} />
                              <Route path="/about" element={<About />} />
                              <Route path="*" element={<h1>Not Found</h1>} />
                              <Route path="/contact" element={<Contact />} />
                              <Route path="/services" element={<Services />} />
                        </Routes>
                  </Router> */}
            </div>
      );
}

export default App;
