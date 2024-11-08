import React from "react";
import { Link } from "react-router-dom";

function CardImage({ item }) {
      return (
            <div class="relative flex flex-col break-words h-[39rem] md:h-[40rem] lg:h-[44rem] shadow-darkgrey bg-white w-full  shadow-lg rounded-lg">
                  <div className="flex flex-col">
                        <img
                              className="rounded-tl-lg h-[18rem] lg:h-[22rem] rounded-tr-lg"
                              src={`/images/${item.imageName}`}
                              alt=""
                        />

                        <div className="p-4">
                              <h1 class="text-xl mt-2 font-bold md:text-3xl">
                                    {item.title}
                              </h1>
                              <h2 class="text-xl md:text-2xl line-clamp-2 py-2">
                                    {item.subtitle}
                              </h2>
                              <div class="h-24">
                                    <p class="mt-2 mb-4 text-lg line-clamp-5 break-words md:text-xl text-blueGray-500">
                                          {item.content}
                                    </p>
                                    <Link to={`/card/${item.id}`}>
                                          <div className="text-bright text-lg md:text-xl">
                                                Read More
                                          </div>
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default CardImage;
