import React from 'react'

function CardImageFull({item}) {
  return (
    <div class="relative flex flex-col break-words md:h-[37rem]  shadow-darkgrey bg-white w-full  shadow-lg rounded-lg">
                  <div className="flex flex-col">
                        <img
                              className="rounded-tl-lg h-[20rem] rounded-tr-lg"
                              src={`/images/${item.imageName}`}
                              alt=""
                        />

                        <div className="p-4 flex flex-col items-center">
                              <h1 class="text-xl mt-2 font-bold text-center md:text-3xl">
                                    {item.title}
                              </h1>
                              <h2 class="text-xl text-center md:text-2xl py-2">
                                    {item.subtitle}
                              </h2>
                              <div>
                                    <p class="mt-2 mb-4 text-lg text-center break-words md:text-xl text-blueGray-500">
                                          {item.content}
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
  )
}

export default CardImageFull