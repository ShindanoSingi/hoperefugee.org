import React from "react";
import { motion } from "framer-motion";

function About() {
      const handleDateChange = (event) => {
            console.log(event.target.value);
      };

      return (
            <div className="flex items-center flex-col justify-center">
                  <div
                        className="bg-center grid place-content-center  w-full h-screen"
                        style={{
                              backgroundImage:
                                    "url('/images/AboutUs.jpg')",
                        }}
                  >
                        <div className="glass">
                            <div className=" lg:max-w-7xl mt-2 mx-4">
                        <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-my_lightblue rounded-lg shadow-md p-6"
                              role="button"
                              tabIndex={0}
                              aria-label="Clickable Div"
                        >
                              <h2 className="text-2xl text-my_green font-bold mb-4">
                                    Welcome to our Hair Braiding Business!
                              </h2>
                              <p className="text-lg text-my_black">
                                    We are dedicated to providing elegant and
                                    stylish hair braiding services. Our team of
                                    experts will ensure that you leave our salon
                                    feeling confident and beautiful.
                              </p>
                        </motion.div>
                  </div>
                              <p className="text-shadow-custom text-4xl font-bold text-my_white font-serif">
                                    ABOUT US
                              </p>
                        </div>
                  </div>
            </div>
      );
}

export default About;
