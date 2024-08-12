import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';

function Home() {
    const services = useSelector(state => state.services);

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/about">About</Link>
            <div className="grid grid-cols-3 gap-4">
                {services.map(service => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <img src={service.image} alt={service.name} />
                            <h2>{service.name}</h2>
                            <p>Price: {service.price}</p>
                            <p>{service.description}</p>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {Array.from({ length: service.stars }).map((_, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-yellow-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 1l2.928 6.472 6.472.928-4.714 4.601 1.114 6.493L10 15.198l-5.8 3.296 1.114-6.493L.6 8.4l6.472-.928L10 1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ))}
                                </div>
                                <p className="ml-2">{service.comments.length} comments</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Home;