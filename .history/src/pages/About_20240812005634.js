import React from "react";
import { motion } from "framer-motion";

function About() {
      return (
            <div>
                  <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-primary text-my_white p-4 rounded-lg shadow-yellow"
                  >
                        <h2 className="text-2xl font-buffalo mb-4">
                              Welcome to our Hair Braiding Business!
                        </h2>
                        <p className="text-lg">
                              We are dedicated to providing elegant and stylish
                              hair braiding services. Our team of experts will
                              ensure that you leave our salon feeling confident
                              and beautiful.
                        </p>
                  </motion.div>
            </div>
      );
}

export default About;
