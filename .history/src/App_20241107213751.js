// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Team from "./pages/Team";
import History from "./pages/History";
import Service from "./pages/Service";
import Contacts from "./pages/Contacts";
import TestimonialCard from "./components/TestimonialCard";
import Testimonials from "./pages/Testimonials";


function App() {
      return (
            <Router>
                  <div className="h-screen flex flex-col">
                  <Navbar />
                        <div className="flex-1">
                              <Routes>
                                    <Route path="/" element={<Hero />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/team" element={<Team />} />
                                    <Route path="/history" element={<History />} />
                                    <Route path="/card/:id" element={<Service />} />
                                    <Route path="/contacts" element={<Contacts />} />
                                    <Route path="/team" element={<Team />} />
                                    <Route path="/testimonials" element={<Testimonials />} />
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
                        <Footer />
                  </div>
            </Router>
      );


}

export default App;
