// src/components/PictureCard.js
import React from 'react';

const PictureCard = ({ imageSrc, comments, likes, stars }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <img src={imageSrc} alt="Picture" className="w-full h-48 object-cover rounded-lg" />
      <div className="mt-2 flex items-center justify-between">
        <button className="text-gray-600">⭐ {stars}</button>
        <button className="text-gray-600">👍 {likes}</button>
      </div>
      <div className="mt-2">
        {comments.map((comment, index) => (
          <p key={index} className="text-gray-700 text-sm">{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default PictureCard;
