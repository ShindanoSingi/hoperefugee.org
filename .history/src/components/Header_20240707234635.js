// src/components/Header.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Header = () => {
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 1000 } });

  return (
    <animated.header style={fade} className="bg-gradient-to-r from-blue-500 to-blue-800 text-white p-6 shadow-md">
      <h1 className="text-3xl font-bold">Beautiful Landing Page</h1>
    </animated.header>
  );
};

export default Header;
