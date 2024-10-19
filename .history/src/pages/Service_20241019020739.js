import React from "react";
import { useParams } from "react-router-dom";
import CardImageFull from "../components/CardImageFull";
import { list } from "../constants/Constants";

function Service() {
      const { id } = useParams();
      const item = list.find(item => item.id === parseInt(id));
      return (
            <div>
                  <div class="relative pt-12 pb-32 flex content-center bg-darkgrey items-center justify-center min-h-screen-75">
                        <div class="top-0 absolute w-full h-full bg-center bg-cover">
                              <span
                                    id="blackOverlay"
                                    class="w-full h-full opacity-75 bg-darkgrey"
                              />
                        </div>
                        <div class="w-full flex px-4 items-center justify-center">
                              <h1 class="text-white font-semibold text-5xl">
                                    {item.title}
                              </h1>
                        </div>
                  </div>
                  <div className="p-4 md:px-28 lg:px-[25rem] pb-10 md:pb-16 lg:pb-20 bg-gray -mt-[5rem]">
                        <CardImageFull item={item} />
                  </div>
            </div>
      );
}

export default Service;