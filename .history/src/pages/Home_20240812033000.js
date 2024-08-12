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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Example Service Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Box Braids</h3>
                            <img src='/images/Box Braids.jpg' alt='Box Braids'/>
                            <p className="text-lg mt-2">
                                Expertly crafted box braids to suit your style and preferences.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Cornrows</h3>
                            <img src='/images/Cornrows.jpg' alt='Cornrows'/>
                            <p className="text-lg mt-2">
                                Traditional cornrows with a modern twist, tailored just for you.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Goddess Braids</h3>
                            <img src='/images/Goddess Braids.jpg' alt='Goddess Braids'/>
                            <p className="text-lg mt-2">
                                Embrace your inner goddess with our beautiful goddess braids.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Stitch Braids</h3>
                            <img src='/images/Stitch Braids.jpg' alt='Stitch Braids'/>
                            <p className="text-lg mt-2">
                                Stunning stitch braids that will elevate your look.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Kotless Twist</h3>
                            <img src='/images/Kotless Twist.jpg' alt='Kotless Twist'/>
                            <p className="text-lg mt-2">
                                Trendy and effortless kotless twists for a chic style.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Sign Style: Boho Bob</h3>
                            <img src='/images/Boho Bob.jpg' alt='Sign Style Boho Bob'/>
                            <p className="text-lg mt-2">
                                Get the boho bob look with our unique sign style braids.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Knotless Braids</h3>
                            <img src='/images/Knotless Braids.jpg' alt='Knotless Braids'/>
                            <p className="text-lg mt-2">
                                Experience the comfort and versatility of knotless braids.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Island/Boho Twists</h3>
                            <img src='/images/Island:Boho Twists.jpg' alt='Island Boho Twists'/>
                            <p className="text-lg mt-2">
                                Get the island/boho vibe with our stunning twists.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Faux Locs</h3>
                            <img src='/images/Faux Locs.jpg' alt='Faux Locs'/>
                            <p className="text-lg mt-2">
                                Achieve the look of locs without the commitment with our faux locs.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-my_black">Fulani Styles</h3>
                            <img src='/images/Fulani Styles.jpg' alt='Fulani Styles'/>
                            <p className="text-lg mt-2">
                                Embrace the beauty of Fulani-inspired braided hairstyles.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
