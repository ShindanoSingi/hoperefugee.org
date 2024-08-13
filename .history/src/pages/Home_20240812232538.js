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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Example Service Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">1. Box Braids</h3>
                            <img src='/images/Box Braids.jpg' alt='Box Braids'/>
                            <p className="text-lg mt-2">
                                Expertly crafted box braids to suit your style and preferences.
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <button className="flex items-center text-my_black">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a1 1 0 01-.65-.24l-4.5-3.5a1 1 0 01-.15-1.41l1.5-2a1 1 0 011.41-.15L10 12.17l2.5-1.97a1 1 0 011.41.15l1.5 2a1 1 0 01-.15 1.41l-4.5 3.5A1 1 0 0110 18zm0-16a1 1 0 01.65.24l4.5 3.5a1 1 0 01.15 1.41l-1.5 2a1 1 0 01-1.41.15L10 7.83 7.5 9.8a1 1 0 01-1.41-.15l-1.5-2a1 1 0 01.15-1.41l4.5-3.5A1 1 0 0110 2z" clipRule="evenodd" />
                                    </svg>
                                    Like
                                </button>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a1 1 0 01-.65-.24l-4.5-3.5a1 1 0 01-.15-1.41l1.5-2a1 1 0 011.41-.15L10 12.17l2.5-1.97a1 1 0 011.41.15l1.5 2a1 1 0 01-.15 1.41l-4.5 3.5A1 1 0 0110 18zm0-16a1 1 0 01.65.24l4.5 3.5a1 1 0 01.15 1.41l-1.5 2a1 1 0 01-1.41.15L10 7.83 7.5 9.8a1 1 0 01-1.41-.15l-1.5-2a1 1 0 01.15-1.41l4.5-3.5A1 1 0 0110 2z" clipRule="evenodd" />
                                    </svg>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <button className="flex items-center text-my_black">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a1 1 0 01-.65-.24l-4.5-3.5a1 1 0 01-.15-1.41l1.5-2a1 1 0 011.41-.15L10 12.17l2.5-1.97a1 1 0 011.41.15l1.5 2a1 1 0 01-.15 1.41l-4.5 3.5A1 1 0 0110 18zm0-16a1 1 0 01.65.24l4.5 3.5a1 1 0 01.15 1.41l-1.5 2a1 1 0 01-1.41.15L10 7.83 7.5 9.8a1 1 0 01-1.41-.15l-1.5-2a1 1 0 01.15-1.41l4.5-3.5A1 1 0 0110 2z" clipRule="evenodd" />
                                    </svg>
                                    Comment
                                </button>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a1 1 0 01-.65-.24l-4.5-3.5a1 1 0 01-.15-1.41l1.5-2a1 1 0 011.41-.15L10 12.17l2.5-1.97a1 1 0 011.41.15l1.5 2a1 1 0 01-.15 1.41l-4.5 3.5A1 1 0 0110 18zm0-16a1 1 0 01.65.24l4.5 3.5a1 1 0 01.15 1.41l-1.5 2a1 1 0 01-1.41.15L10 7.83 7.5 9.8a1 1 0 01-1.41-.15l-1.5-2a1 1 0 01.15-1.41l4.5-3.5A1 1 0 0110 2z" clipRule="evenodd" />
                                    </svg>
                                    <span>10</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-bold">$50</span>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a1 1 0 01-.65-.24l-4.5-3.5a1 1 0 01-.15-1.41l1.5-2a1 1 0 011.41-.15L10 12.17l2.5-1.97a1 1 0 011.41.15l1.5 2a1 1 0 01-.15 1.41l-4.5 3.5A1 1 0 0110 18zm0-16a1 1 0 01.65.24l4.5 3.5a1 1 0 01.15 1.41l-1.5 2a1 1 0 01-1.41.15L10 7.83 7.5 9.8a1 1 0 01-1.41-.15l-1.5-2a1 1 0 01.15-1.41l4.5-3.5A1 1 0 0110 2z" clipRule="evenodd" />
                                    </svg>
                                    <span>1000</span>
                                </div>
                            </div>
                        </motion.div>
                        {/* Repeat the above code for each service card */}
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
