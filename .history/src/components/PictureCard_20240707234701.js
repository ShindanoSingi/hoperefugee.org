// src/components/PictureCard.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const PictureCard = ({ imageSrc, comments, likes, stars }) => {
  const scale = useSpring({ from: { transform: 'scale(0.8)' }, to: { transform: 'scale(1)' }, config: { tension: 150, friction: 10 } });

  return (
    <animated.div style={scale} className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageSrc} alt="Picture" className="w-full h-56 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <button className="text-yellow-500">⭐ {stars}</button>
          <button className="text-blue-500">👍 {likes}</button>
        </div>
        <div>
          {comments.map((comment, index) => (
            <p key={index} className="text-gray-800 text-sm mb-1">{comment}</p>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default PictureCard;

