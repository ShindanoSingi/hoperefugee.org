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
            {/* Testimonials Section */}
            <section id="testimonials" className="bg-my_black text-my_white py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-my_green">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Example Testimonial Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Testimonial 1</h3>
                            <img src='/images/testimonial1.jpg' alt='Testimonial 1' className="mb-4" />
                            <p className="text-lg mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc eget nunc lacinia lacinia. Sed auctor, nunc id aliquet tincidunt, nunc nunc tincidunt urna, nec aliquam mauris nunc id nisi.
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-my_yellow" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18.75a8.75 8.75 0 100-17.5 8.75 8.75 0 000 17.5zm0-15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm0 12.5a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm0-10a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-my_yellow">4.5</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-my_yellow" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18.75a8.75 8.75 0 100-17.5 8.75 8.75 0 000 17.5zm0-15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm0 12.5a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm0-10a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-my_yellow">15</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Add more testimonial cards here */}
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
