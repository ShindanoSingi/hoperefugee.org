import React from "react";
import { motion } from "framer-motion";

function Home() {
    return (
        <div className="min-h-screen bg-my_black text-my_white font-montserrat flex flex-col">

            {/* Hero Section */}
            <section className="flex-1 flex items-center justify-center bg-my_black relative">
                <div className="absolute inset-0 bg-my_black opacity-75"></div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-5 text-center text-my_white"
                >
                    <h1 className="text-4xl md:text-6xl font-buffalo mb-4">
                        Elegant Hair Braiding
                    </h1>
                    <p className="text-lg md:text-2xl mb-6">
                        Where style meets tradition and elegance is crafted.
                    </p>
                    <a href="#services" className="bg-primary z-11 text-my_black font-bold py-3 px-6 rounded-full shadow-yellow hover:bg-my_white">
                        Discover Our Services
                    </a>
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="bg-my_white text-my_black py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-my_green">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Example Service Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Box Braids</h3>
                            <p className="text-lg">
                                Expertly crafted box braids to suit your style and preferences.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Cornrows</h3>
                            <p className="text-lg">
                                Traditional cornrows with a modern twist, tailored just for you.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Goddess Braids</h3>
                            <p className="text-lg">
                                Embrace your inner goddess with our beautiful goddess braids.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-my_black text-my_white py-6">
                <div className="container mx-auto text-center">
                    <p className="text-my_white">
                        &copy; 2024 Hair Braiding Business. All rights reserved.
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="#" className="hover:text-primary">Facebook</a>
                        <a href="#" className="hover:text-primary">Instagram</a>
                        <a href="#" className="hover:text-primary">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;