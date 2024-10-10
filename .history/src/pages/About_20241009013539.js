import React from "react";
import { motion } from "framer-motion";

function About() {
      const handleDateChange = (event) => {
            console.log(event.target.value);
      };

      return (
            <div className="flex items-center flex-col justify-center">
                  <div
                        className="bg-contain grid place-content-center  w-full h-screen"
                        style={{
                              backgroundImage:
                                    "url('/images/AboutUs.jpg')",
                        }}
                  >
                        <div className="glass flex flex-col-reverse p-4 m-4">
                            <div className="flex-1 flex  mt-2 ">
                        <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ scale: 1.015 }}
                              whileTap={{ scale: 0.95 }}
                              className=" rounded-lg shadow-md max-w-7xl p-6"
                              role="button"
                              tabIndex={0}
                              aria-label="Clickable Div"
                        >
                              <h2 className="text-2xl text-primary lg:text-md font-bold mb-4">
                                    Our Mission
                              </h2>
                              <p className="text-lg text-my_black lg:text-xl">
At Refugee and Immigrant Compass, our mission is to empower immigrants to become fully integrated and self-sufficient members of society. We believe that every individual, regardless of their background, deserves access to comprehensive support systems that facilitate their transition into a new country. Our organization is committed to providing continuous support to immigrants far beyond the initial settlement phase, ensuring they have the resources and guidance they need to thrive.

                              </p>
                        </motion.div>
                  </div>
                              <p className="text-shadow-custom text-4xl text-center font-bold text-my_white py-2 bg-primary font-serif">
                                    ABOUT US
                              </p>
                        </div>
                  </div>
            </div>
      );
}

export default About;
