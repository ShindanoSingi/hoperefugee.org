// src/components/LandingPage.js
import React from "react";
import Header from "./Header";
import PictureCard from "./PictureCard";
import { animated, useTrail } from "@react-spring/web";
import MenuList from "./MenuList";

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
            <div className="min-h-screen bg-contain bg-no-repeat bg-[url('/public/images/2.png')] bg-center lg:bg-contain md:bg-[url('/public/images/Anna_langing_page_big.png') lg:bg-[url('/public/images/Anna_langing_page_big.png')]">
                <div className="absolute w-screen left-[15rem] md:top-[5rem] md:right-[18rem]">
                    <MenuList />
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
