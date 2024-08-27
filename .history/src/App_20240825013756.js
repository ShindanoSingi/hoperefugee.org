// src/App.js
import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import MenuList from "./components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { SetShowMenu } from "./redux/userSlice";
import PictureCard from "./pages/PictureCard";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
      const showMenu = useSelector((state) => state.userReducer.showMenu);

      return (
            <Router>
                  <div className="h-screen flex flex-col bg-my_black">
                        <Header />

                        <div className="flex-1">
                              <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route
                                          path="/contact"
                                          element={<Contact />}
                                    />
                                    <Route
                                          path="/services"
                                          element={<LandingPage />}
                                    />
                                    <Route
                                          path="*"
                                          element={<h1>Not Found</h1>}
                                    />
                              </Routes>
                        </div>
                        <Footer />
                        <div className="absolute lg:hidden">
                              {!showMenu && <MenuList />}
                        </div>
                  </div>
            </Router>
      );
}

export default App;
