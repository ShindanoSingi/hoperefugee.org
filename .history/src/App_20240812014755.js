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
                        <div className="bg-my_black p-2 h-20 mb-6 shadow-yellow border border-primary lg:h-24 flex items-center justify-between px-6">
                              <Logo />
                              <div className="md:hidden"><Hambourger /></div>
                                <div className="hidden md:block"><Menu /></div>

                        </div>
                        <div className="absolute lg:hidden">{!showMenu && <MenuList />}</div>

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
                  </div>
            </Router>
      );


}

export default App;
