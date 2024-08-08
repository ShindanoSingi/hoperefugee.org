// src/App.js
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";

function App() {
      const [isOpen, setOpen] = useState(false);
      const [show, SetShow] = useState(false);

      return (
            <Router>
                  <div className="h-screen flex flex-col">
                        <div className="bg-my_black p-2 h-20 border border-primary shadow-yellow lg:h-24 flex items-center justify-between lg:w-screen px-4">
                              <div className="h-12 w-12 rounded-full shadow-yellow glow-border border-primary border flex items-center ">
                                    <Link to="/">
                                          <img
                                                src="/images/logo_no_background.png"
                                                alt="logo"
                                          />
                                    </Link>
                              </div>
                              <div className="h-12 w-12 rounded-full bg-my_green shadow-yellow glow-border border-primary border flex items-center lg:hidden" onClick={()=>{SetShow(!show)}}>
                                    <Hamburger
                                          toggled={isOpen}
                                          toggle={setOpen}
                                          size={32}
                                        //   direction="right"
                                          duration={0.8}
                                          distance="lg"
                                          color="#E6C068"
                                          onClick={()=>{SetShow(!show)}}
                                    />
                              </div>
                              <div className="hidden ">
                        <MenuList show={show} />
                    </div>
                              <div className="hidden relative left-[48%] lg:w-full lg:block">
                            <MenuList />
                              </div>
                        </div>
                        <div className="flex-1">
                              <Routes>
                                    <Route path="/" element={<LandingPage />} />
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
                                    <Route path='/menu' element={<MenuList show={show}/>}/>
                              </Routes>
                        </div>
                  </div>
            </Router>
      );
}

export default App;
