// src/components/LandingPage.js
import React from 'react';
import Header from './Header';
import PictureCard from './PictureCard';

const LandingPage = () => {
  const pictures = [
    {
      imageSrc: 'https://via.placeholder.com/300',
      comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
      likes: 10,
      stars: 5,
    },
    {
      imageSrc: 'https://via.placeholder.com/300',
      comments: ['Beautiful!', 'So nice!'],
      likes: 8,
      stars: 4,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pictures.map((picture, index) => (
          <PictureCard key={index} {...picture} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
