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
                    className="relative z-5 pb-10 text-center text-my_white"
                >
                    <h1 className="text-4xl md:text-6xl font-buffalo mb-4">
                        Elegant Hair Braiding
                    </h1>
                    <p className="text-lg mt-2 md:text-2xl mb-6">
                        Where style meets tradition and elegance is crafted.
                    </p>
                    <a href="#services" className="bg-primary text-my_black font-bold py-3 px-6 rounded-full shadow-yellow hover:bg-my_white">
                        Discover Our Services
                    </a>
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="bg-my_white text-my_black py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-my_green">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Example Service Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">1. Box</h3>
                            <img src='/images/Box Braids.jpg' alt='Box Braids' />
                            <p className="text-lg mt-2">
                                Expertly crafted box braids to suit your style and preferences.
                            </p>
                            <button className="bg-my_white text-my_black font-bold py-2 px-4 rounded-full shadow-yellow hover:bg-primary mt-4">
                                Like
                            </button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">2. Cornrows</h3>
                            <img src='/images/Cornrows.jpg' alt='Cornrows' />
                            <p className="text-lg mt-2">
                                Traditional cornrows with a modern twist, tailored just for you.
                            </p>
                            <button className="bg-my_white text-my_black font-bold py-2 px-4 rounded-full shadow-yellow hover:bg-primary mt-4">
                                Like
                            </button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">3. Goddess Braids</h3>
                            <img src='/images/Goddess Braids.jpg' alt='Goddess Braids' />
                            <p className="text-lg mt-2">
                                Embrace your inner goddess with our beautiful goddess braids.
                            </p>
                            <button className="bg-my_white text-my_black font-bold py-2 px-4 rounded-full shadow-yellow hover:bg-primary mt-4">
                                Like
                            </button>
                        </motion.div>
                        {/* Add like button to other cards */}
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
