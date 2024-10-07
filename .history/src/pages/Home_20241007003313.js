import React, { useState } from "react";
import { motion } from "framer-motion";



function Home() {

    const [appointment, setAppointment] = useState({
      name: "",
      date: "",
      time: ""
    });

      return (
            <div className="min-h-screen bg-primary text-my_white font-montserrat flex flex-col">
                  {/* Hero Section */}
                  <section className="h-[20rem] flex items-center justify-center bg-background-image relative  ">
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
                                    className="bg-primary  text-my_white text-xl font-bold py-3 px-6 rounded-full shadow-yellow hover:bg-my_black"
                              >
                                    Discover Our Services
                              </a>
                        </motion.div>
                  </section>

                  {/* Services Section */}
                  <section
                        id="services"
                        className="bg-my_white text-my_black "
                  >
                    <a
                                    href="#services"
                                    className="bg-primary absolute top-4 text-my_white text-xl font-bold py-3 px-6 rounded-full shadow-yellow hover:bg-my_black"
                              >
                                    Discover Our Services
                              </a>
                        <div className="h-auto">
                              <img src="/images/Huging.png" alt="" />
                        </div>
                  </section>
            </div>
      );
}

export default Home;
