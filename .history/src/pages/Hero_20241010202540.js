import React, { useState } from "react";
import { motion } from "framer-motion";



function Hero() {

    const [appointment, setAppointment] = useState({
      name: "",
      date: "",
      time: ""
    });

      return (
            <div className="bg-center text-white text-my_white font-montserrat flex flex-col"
                        style={{
                              backgroundImage: "url('/images/Huging.png')"
                        }}
            >
                  {/* Hero Section */}
                  <section className="h-[15rem] flex items-center justify-center bg-background-image relative  ">
                        <div className="absolute inset-0 bg-my_black opacity-75"></div>
                        <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1 }}
                              className="relative z-5 text-center text-my_white"
                        >
                              <h1 className="text-4xl md:text-6xl font-buffalo mb-8">
                                    Refugee Hope Bridge
                              </h1>
                              <p className="text-xl mt-2 md:text-2xl mb-10">
                              Bringing Hope to Refugees' Lives
                              </p>
                              <a
                                    href="#services"
                                    className="bg-primary  text-my_white text-xl font-bold py-3 px-6 rounded-full hover:bg-my_black"
                              >
                                    Discover Our Services
                              </a>
                        </motion.div>
                  </section>

                  {/* Services Section */}
                  <section
                        id="services"
                        className="bg-my_white text-my_black flex flex-1"
                  >



                  </section>
            </div>
      );
}

export default Hero;
