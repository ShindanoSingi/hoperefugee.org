import React from "react";
import { motion } from "framer-motion";

function About() {
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary rounded-lg shadow-md p-6"
                    role="button"
                    tabIndex={0}
                    aria-label="Clickable Div"
                >
                    <h2 className="text-2xl text-my_green font-bold mb-4">
                        Welcome to our Hair Braiding Business!
                    </h2>
                    <p className="text-lg text-my_black">
                        We are dedicated to providing elegant and stylish hair braiding services. Our team of experts will ensure that you leave our salon feeling confident and beautiful.
                    </p>
                </motion.div>
            </div>
            <div className="bg-slate-100 p-2">
                <fieldset >
                <legend>Legend</legend>
                <label htmlFor="date">Time In:</label>
                <input type="date" className='bg-gray-600 p-2' id="date" name="date" />
            </fieldset>
            </div>

        </div>
    );
}

export default About;