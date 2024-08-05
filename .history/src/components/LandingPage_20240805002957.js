// src/components/LandingPage.js
import React from 'react';
import Header from './Header';
import PictureCard from './PictureCard';
import { animated, useTrail } from '@react-spring/web';


const LandingPage = () => {
    const pictures = [
        {
          imageSrc: 'https://picsum.photos/seed/picsum/200/300',
          comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
          likes: 10,
          stars: 5,
        },
        {
          imageSrc: 'https://picsum.photos/seed/picsum/200/300',
          comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
          likes: 8,
          stars: 4,
        },
        {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 10,
            stars: 5,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 8,
            stars: 4,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 10,
            stars: 5,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 8,
            stars: 4,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 10,
            stars: 5,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 8,
            stars: 4,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 10,
            stars: 5,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 8,
            stars: 4,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 10,
            stars: 5,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 8,
            stars: 4,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 10,
            stars: 5,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 8,
            stars: 4,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 10,
            stars: 5,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 8,
            stars: 4,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 10,
            stars: 5,
          },
          {
            imageSrc: 'https://picsum.photos/seed/picsum/200/300',
            comments: ['Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!', 'Great picture!', 'Amazing!'],
            likes: 8,
            stars: 4,
          },
      ];

  const trail = useTrail(pictures.length, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <div className="min-h-screen bg-contain bg-center bg-no-repeat bg-[url('/public/images/2.png')] md:bg-[url('/public/images/Anna_langing_page_big.png')]">
        <div className='flex justify-center items-center'>
            <ul className='text-primary border-primary p-2 rounded-lg border flex gap-4 flex-col md:gap-2 text-[1.2rem] md:text-[1.4rem] font-montserrat relative top-[18rem] left-[7rem] md:left-0 md:top-[46rem] lg:md:top-[25rem] lg:md:left-[20rem]'>

                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact</li>

            </ul>

            <div
  class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
>
  <div class="p-6">
    <div class="divide-y divide-gray-200">
      <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
        <div class="flex items-center gap-x-3">

          <div>

            Home
          </div>
        </div>

      </div>
      <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
        <div class="flex items-center gap-x-3">
          <img
            src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg"
            alt="John Micheal"
            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          />
          <div>
            <h6
              class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
            >
              John Micheal
            </h6>
            <p
              class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased"
            >
              john@gmail.com
            </p>
          </div>
        </div>
        <h6
          class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
        >
          $420
        </h6>
      </div>
      <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
        <div class="flex items-center gap-x-3">
          <img
            src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg"
            alt="Alexa Liras"
            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          />
          <div>
            <h6
              class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
            >
              Alexa Liras
            </h6>
            <p
              class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased"
            >
              alexa@gmail.com
            </p>
          </div>
        </div>
        <h6
          class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
        >
          $340
        </h6>
      </div>
      <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
        <div class="flex items-center gap-x-3">
          <img
            src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
            alt="Richard Gran"
            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          />
          <div>
            <h6
              class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
            >
              Richard Gran
            </h6>
            <p
              class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased"
            >
              richard@gmail.com
            </p>
          </div>
        </div>
        <h6
          class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
        >
          $520
        </h6>
      </div>
      <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
        <div class="flex items-center gap-x-3">
          <img
            src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg"
            alt="Micheal Levi"
            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          />
          <div>
            <h6
              class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
            >
              Micheal Levi
            </h6>
            <p
              class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased"
            >
              levi@gmail.com
            </p>
          </div>
        </div>
        <h6
          class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
        >
          $780
        </h6>
      </div>
    </div>
  </div>
</div>
        </div>
      {/* <Header />
      <div className="py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            <PictureCard {...pictures[index]} />
          </animated.div>
        ))}
      </div> */}
    </div>
  );
};

export default LandingPage;















