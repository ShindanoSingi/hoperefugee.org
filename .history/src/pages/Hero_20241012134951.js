import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

function Hero() {
      return (
            <div className=" text-white bg-lightblue text-my_white font-montserrat flex flex-col">
                  <div className="flex flex-col h-full flex-1">
                        <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1 }}
                              className="relative z-5 text-center p-2 h-[23.5rem] bg-lightblue text-white"
                        >
                              <h1 className="text-4xl p-2 mt-2 md:text-6xl font-buffalo mb-8">
                                    Refugee Hope Bridge
                              </h1>
                              <p className="text-xl mt-2 p-2 md:text-2xl mb-10">
                                    Bringing Hope to Refugees' Lives
                              </p>
                              <div className="flex flex-col justify-center items-center md:w-lvw gap-4">
                                    <a
                                          href="#services"
                                          className="bg-bright w-[20rem] text-white text-2xl font-bold border-white border-2 py-3 px-6 rounded-full hover:bg-primary"
                                    >
                                          DONATE
                                    </a>
                                    <Button type="primary" href="#services" text='DONATE' border='white' hoverColor='primary'/>
                                    <Button type="primary" href="#services" text='Discover Our Services' border='black'/>
                              </div>
                        </motion.div>
                  </div>
                  <img
                        src="/images/Huging.png"
                        className="h-[22rem] md:h-full"
                        alt="home"
                  />
            </div>
      );
}

export default Hero;
