import React from 'react'

function CardImageFull({item}) {
  return (
    <div class="relative flex flex-col break-words shadow-darkgrey bg-white w-full  shadow-lg rounded-lg">
                  <div className="flex flex-col">
                        <img
                              className="rounded-tl-lg h-[20rem] md:h-[25rem] lg:h-[30rem]  rounded-tr-lg"
                              src={`/images/${item.imageName}`}
                              alt=""
                        />

                        <div className="p-4 flex flex-col items-center">
                              <h1 class="text-3xl text-center md:text-4xl lg:text-5xl mt-2 md:mt-4 font-bold">
                                    {item.title}
                              </h1>
                              <h2 class="text-2xl text-center md:text-3xl md:mt-4  lg:text-4xl py-2">
                                    {item.subtitle}
                              </h2>
                              <div>
                                    <p class="mt-2 mb-4 text-lg text-center md:mt-4  break-words md:text-2xl lg:text-3xl text-blueGray-500">
                                          {item.content}
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
  )
}

export default CardImageFull