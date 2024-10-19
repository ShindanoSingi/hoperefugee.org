import React from "react";

function CardImage({ item }) {
      return (
            <div class="relative flex flex-col  h-[35rem] shadow-darkgrey bg-white w-full  shadow-lg rounded-lg">
                  <div className="flex flex-col">
                        <div className="h-[10rem]">
                              <img
                                    className="rounded-tl-lg rounded-tr-lg"
                                    src={`/images/${item.imageName}`}
                                    alt=""
                              />
                        </div>
                        <div className="p-4">
                              <h1 class="text-xl mt-2 font-bold md:text-3xl">
                                    {item.title}
                              </h1>
                              <h2 class="text-xl md:text-2xl py-2">
                                    {item.subtitle}
                              </h2>
                              <p class="mt-2 mb-4 md:text-xl text-blueGray-500">
                                    {item.content}
                              </p>
                        </div>
                  </div>
            </div>
      );
}

export default CardImage;