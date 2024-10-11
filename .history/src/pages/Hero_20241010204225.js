import React, { useState } from "react";
import { motion } from "framer-motion";



function Hero() {

    const [appointment, setAppointment] = useState({
      name: "",
      date: "",
      time: ""
    });

      return (
            <div className="bg-cover text-white text-my_white font-montserrat flex flex-col"
                        style={{
                              backgroundImage: "url('/images/Huging.png')"
                        }}
            >

                  {/* Services Section */}

                  <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 0.5, y: 300 }}
                              transition={{ duration: 1 }}
                              className="relative z-5 text-center glass text-white"
                        >
                              <h1 className="text-4xl text-primary glass p-2 md:text-6xl font-buffalo mb-8">
                                    Refugee Hope Bridge
                              </h1>
                              <p className="text-xl mt-2 text-primary p-2 md:text-2xl mb-10">
                              Bringing Hope to Refugees' Lives
                              </p>
                              <a
                                    href="#services"
                                    className="bg-primary  text-my_white text-xl font-bold py-3 px-6 rounded-full hover:bg-my_black"
                              >
                                    Discover Our Services
                              </a>
                        </motion.div>

            </div>
      );
}

export default Hero;
