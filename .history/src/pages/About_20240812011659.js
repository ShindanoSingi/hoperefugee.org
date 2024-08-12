import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <div className="flex items-center justify-center">
            <div className="md:max-w-2xl lg:max-w-7xl mx-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-my_black text-my_white p-4 rounded-lg border border-primary cursor-pointer"
                    role="button"
                    tabIndex={0}
                >
                    <h2 className="text-2xl text-my_white font-buffalo mb-4">
                        Welcome to our Hair Braiding Business!
                    </h2>
                    <p className="text-lg">
                        We are dedicated to providing elegant and stylish hair braiding services. Our team of experts will ensure that you leave our salon feeling confident and beautiful.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
