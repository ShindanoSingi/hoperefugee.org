import React, { useState } from "react";
import { motion } from "framer-motion";

function Home() {
    // Dummy state for likes, comments, views, and ratings
    const [likes, setLikes] = useState(Array(10).fill(0));
    const [comments, setComments] = useState(Array(10).fill([]));
    const [views, setViews] = useState(Array(10).fill(100));
    const [ratings, setRatings] = useState(Array(10).fill(4));

    const handleLike = (index) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);
    };

    const handleComment = (index, comment) => {
        const newComments = [...comments];
        newComments[index] = [...newComments[index], comment];
        setComments(newComments);
    };

    const handleRating = (index, rating) => {
        const newRatings = [...ratings];
        newRatings[index] = rating;
        setRatings(newRatings);
    };

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
                        {[
                            { title: "Box", img: '/images/Box Braids.jpg', description: "Expertly crafted box braids to suit your style and preferences." },
                            { title: "Cornrows", img: '/images/Cornrows.jpg', description: "Traditional cornrows with a modern twist, tailored just for you." },
                            { title: "Goddess Braids", img: '/images/Goddess Braids.jpg', description: "Embrace your inner goddess with our beautiful goddess braids." },
                            { title: "Stitch Braids", img: '/images/Stitch Braids.jpg', description: "Stunning stitch braids that will elevate your look." },
                            { title: "Kotless Twist", img: '/images/Kotless Twist.jpg', description: "Trendy and effortless kotless twists for a chic style." },
                            { title: "Sign Style: Boho B", img: '/images/Boho Bob.jpg', description: "Get the boho bob look with our unique sign style braids." },
                            { title: "Knotless Braids", img: '/images/Knotless Braids.jpg', description: "Experience the comfort and versatility of knotless braids." },
                            { title: "Island/Boho Twists", img: '/images/Island:Boho Twists.jpg', description: "Get the island/boho vibe with our stunning twists." },
                            { title: "Faux Locs", img: '/images/Faux Locs.jpg', description: "Achieve the look of locs without the commitment with our faux locs." },
                            { title: "Fulani Styles", img: '/images/Fulani Styles.jpg', description: "Embrace the beauty of Fulani-inspired braided hairstyles." },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-primary p-6 rounded-lg shadow-yellow transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-my_black">{service.title}</h3>
                                <img src={service.img} alt={service.title} />
                                <p className="text-lg mt-2">{service.description}</p>

                                {/* Like, Comments, Views, Rating */}
                                <div className="mt-4 flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <button onClick={() => handleLike(index)} className="text-my_black font-bold hover:text-my_white">
                                        👍  Likes
                                    </button>
                                    {likes[index]}
                                    </div>

                                    <span>{views[index]} Views</span>
                                    <div className="mt-4">
                                    <h4 className="text-my_black font-bold">Rating</h4>
                                    <div className="flex space-x-2">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <span
                                                key={starIndex}
                                                className={`cursor-pointer ${starIndex < ratings[index] ? 'text-yellow-500' : 'text-gray-400'}`}
                                                onClick={() => handleRating(index, starIndex + 1)}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-my_black font-bold">Comments</h4>
                                    <div className="max-h-24 overflow-y-auto">
                                        {comments[index].map((comment, i) => (
                                            <p key={i} className="text-my_black">{comment}</p>
                                        ))}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="w-full p-2 mt-2 rounded bg-my_white text-my_black"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleComment(index, e.target.value);
                                                e.target.value = '';
                                            }
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
