import React from "react";
import { motion } from "framer-motion";

function About() {
      const handleDateChange = (event) => {
            console.log(event.target.value);
      };

      return (
            <div className="grid place-content-center">
                  <div
                        className="bg-cover w-full  h-screen"
                        style={{
                              backgroundImage: "url('/images/AboutUs.jpg')"
                        }}
                  >
                        <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ scale: 1.015 }}
                              whileTap={{ scale: 0.95 }}
                              className=" rounded-lg glass shadow-md max-w-[75%] p-6"
                              role="button"
                              tabIndex={0}
                              aria-label="Clickable Div"
                        >
                              <p className="text-shadow-custom text-4xl text-center font-bold text-my_white py-2 bg-primary font-serif">
                                    ABOUT US
                              </p>

                              <h2 className="text-2xl pt-4 text-primary lg:text-3xl font-bold mb-4">
                                    Our Mission
                              </h2>

                              <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ scale: 1.015 }}
                              whileTap={{ scale: 0.95 }}
                              className=" rounded-lg glass shadow-md max-w-[75%] p-6"
                              role="button"
                              tabIndex={0}
                              aria-label="Clickable Div"
                        >
                            <p className="text-lg text-my_black lg:text-2xl">
                                    Our mission is to empower immigrants to become
                                    fully integrated and self-sufficient members
                                    of society. We believe that every
                                    individual, regardless of their background,
                                    deserves access to comprehensive support
                                    systems that facilitate their transition
                                    into a new country. Our organization is
                                    committed to providing continuous support to
                                    immigrants far beyond the initial settlement
                                    phase, ensuring they have the resources and
                                    guidance they need to thrive.
                              </p>
                        </motion.div>

                        </motion.div>
                  </div>
            </div>
      );
}

export default About;
