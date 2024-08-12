import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Home() {
    const services = useSelector(state => state.services);

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/about">About</Link>
            <div className="grid grid-cols-3 gap-4">

                    <motion.div
                        // key={service.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    My Card Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This is some content inside the card.
                                </Typography>
                                <div className="bg-my_black p-2 h-20 shadow-yellow border border-primary lg:h-24 flex items-center justify-between px-6">
                                    Add your content here
                                </div>
                            </CardContent>
                        </Card>
                            </div>
                        </Card>
                    </motion.div>
                {/* ))} */}
            </div>
        </div>
    );
}

export default Home;

