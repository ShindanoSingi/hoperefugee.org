// src/components/LandingPage.js
import React from "react";
import Header from "./Header";
import PictureCard from "./PictureCard";
import { animated, useTrail } from "@react-spring/web";

const LandingPage = () => {
      const pictures = [
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 10,
                  stars: 5
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 8,
                  stars: 4
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 10,
                  stars: 5
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 8,
                  stars: 4
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 10,
                  stars: 5
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 8,
                  stars: 4
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 10,
                  stars: 5
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 8,
                  stars: 4
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 10,
                  stars: 5
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 8,
                  stars: 4
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 10,
                  stars: 5
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 8,
                  stars: 4
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 10,
                  stars: 5
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 8,
                  stars: 4
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 10,
                  stars: 5
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 8,
                  stars: 4
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 10,
                  stars: 5
            },
            {
                  imageSrc: "https://picsum.photos/seed/picsum/200/300",
                  comments: [
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!",
                        "Great picture!",
                        "Amazing!"
                  ],
                  likes: 8,
                  stars: 4
            }
      ];

      const trail = useTrail(pictures.length, {
            from: { opacity: 0, transform: "translate3d(0,40px,0)" },
            to: { opacity: 1, transform: "translate3d(0,0px,0)" },
            config: { mass: 5, tension: 2000, friction: 200 }
      });

      return (
            <div className="min-h-screen bg-contain bg-center bg-no-repeat bg-[url('/public/images/2.png')] md:bg-[url('/public/images/Anna_langing_page_big.png')]">
                  <div class="relative flex flex-col rounded-lg bg-my_black bg-clip-border w-1/3 border border-primary text-primary shadow-lg">

                              <div class="divide-y divide-primary flex flex-col justify-center items-center py-2">
                                    <div class="w-full">
                                          Home
                                    </div>
                                    <div class="flex items-center justify-between">
                                          About
                                    </div>
                                    <div class="flex items-center justify-between">
                                          Services
                                    </div>
                                    <div class="flex items-center justify-between">
                                          Portfolio
                                    </div>
                                    <div class="flex items-center justify-between">
                                          Blog
                                    </div>
                                    <div class="flex items-center justify-between">
                                          Contact
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
