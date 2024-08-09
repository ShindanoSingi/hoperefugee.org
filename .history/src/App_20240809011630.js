// src/App.js
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import MenuList from "./components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { SetShowMenu } from "./redux/userSlice";


function App() {
      const [isOpen, setOpen] = useState(false);
      const showMenu = useSelector((state) => state.userReducer.showMenu);

      const dispatch = useDispatch();

      return (
            <Router>
                  <div className="h-screen flex flex-col">
                        <div className="bg-my_black p-2 h-20 shadow-yellow border border-primary lg:h-24 flex items-center justify-between px-6">
                              <div className="h-12 w-12 rounded-full shadow-yellow glow-border border-primary border flex items-center ">
                                    <Link to="/">
                                          <img
                                                src="/images/logo_no_background.png"
                                                alt="logo"
                                          />
                                    </Link>
                              </div>
                              <div className="h-12 w-12 rounded-full bg-my_green shadow-yellow glow-border border-primary border flex items-center lg:hidden">
                                    <Hamburger
                                          toggled={isOpen}
                                          toggle={setOpen}
                                          size={32}
                                          direction="right"
                                          duration={0.8}
                                          distance="lg"
                                          color="#E6C068"
                                          onClick={()=>{dispatch(SetShowMenu(!showMenu))}}
                                    />
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

                              </Routes>
                        </div>

                  </div>
            </Router>
      );
}

export default App;
