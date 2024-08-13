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
                        {/* Testimonial Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Testimonial 1</h3>
                            <img src='/images/testimonial1.jpg' alt='Testimonial 1'/>
                            <p className="text-lg mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nunc. Sed euismod, nunc id aliquam tincidunt, nunc nunc lacinia nunc, id lacinia nunc nunc id lacinia nunc.
                            </p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <span className="mr-2">Likes: 100</span>
                                    <span className="mr-2">Dislikes: 10</span>
                                    <span className="mr-2">Views: 500</span>
                                    <span className="mr-2">Comments: 20</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">Price: $50</span>
                                    <span className="mr-2">Stars: 4.5</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Testimonial 2</h3>
                            <img src='/images/testimonial2.jpg' alt='Testimonial 2'/>
                            <p className="text-lg mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nunc. Sed euismod, nunc id aliquam tincidunt, nunc nunc lacinia nunc, id lacinia nunc nunc id lacinia nunc.
                            </p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <span className="mr-2">Likes: 200</span>
                                    <span className="mr-2">Dislikes: 20</span>
                                    <span className="mr-2">Views: 1000</span>
                                    <span className="mr-2">Comments: 30</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">Price: $60</span>
                                    <span className="mr-2">Stars: 4.8</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Testimonial 3</h3>
                            <img src='/images/testimonial3.jpg' alt='Testimonial 3'/>
                            <p className="text-lg mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nunc. Sed euismod, nunc id aliquam tincidunt, nunc nunc lacinia nunc, id lacinia nunc nunc id lacinia nunc.
                            </p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <span className="mr-2">Likes: 300</span>
                                    <span className="mr-2">Dislikes: 30</span>
                                    <span className="mr-2">Views: 1500</span>
                                    <span className="mr-2">Comments: 40</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">Price: $70</span>
                                    <span className="mr-2">Stars: 4.9</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Testimonial 4</h3>
                            <img src='/images/testimonial4.jpg' alt='Testimonial 4'/>
                            <p className="text-lg mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nunc. Sed euismod, nunc id aliquam tincidunt, nunc nunc lacinia nunc, id lacinia nunc nunc id lacinia nunc.
                            </p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <span className="mr-2">Likes: 400</span>
                                    <span className="mr-2">Dislikes: 40</span>
                                    <span className="mr-2">Views: 2000</span>
                                    <span className="mr-2">Comments: 50</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">Price: $80</span>
                                    <span className="mr-2">Stars: 5.0</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
