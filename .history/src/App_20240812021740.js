// src/App.js
import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import MenuList from "./components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { SetShowMenu } from "./redux/userSlice";
import Logo from "./components/Logo";
import Hambourger from "./components/Hambourger";
import Menu from "./components/Menu";
import PictureCard from "./pages/PictureCard";
import Home from "./pages/Home";


function App() {
      const showMenu = useSelector((state) => state.userReducer.showMenu);

      console.log(showMenu);

      const dispatch = useDispatch();

      return (
            <Router>
                  <div className="h-screen flex flex-col bg-my_black">
                        <div className="bg-my_black p-4 h-20 mb-6 shadow-yellow border border-primary lg:h-24 flex items-center justify-between px-6">
                              <Logo />
                              <div className="md:hidden"><Hambourger /></div>
                                <div className="hidden md:block"><Menu /></div>

                        </div>
                        <div className="absolute md:hidden">{!showMenu && <MenuList />}</div>

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
                                          element={<Services />}
                                    />
                                    <Route
                                          path="*"
                                          element={<h1>Not Found</h1>}
                                    />

                              </Routes>
                        </div>
                        {/* Footer Section */}
            <footer className="bg-my_black border-t-4 border-primary border-glow border text-my_white py-6">
                <div className="container mx-auto text-center">
                    <p className="text-my_white">
                        &copy; 2024 Hair Braiding Business. All rights reserved.
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="#" className="hover:text-primary">Facebook</a>
                        <a href="#" className="hover:text-primary">Instagram</a>
                        <a href="#" className="hover:text-primary">Twitter</a>
                    </div>
                </div>
            </footer>
                  </div>
            </Router>
      );


}

export default App;
