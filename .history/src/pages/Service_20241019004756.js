import React from 'react'
import { useParams } from 'react-router-dom'
import CardImageFull from '../components/CardImageFull';
import {list} from '../constants/List';


function Service() {
    const {id} = useParams();
    const item = list.find(item => item.id === parseInt(id));
  return (
    <div className='p-4 md:p-[10rem] lg:py-25 bg-gray lg:px-[25rem]'>
        <div class="relative pt-12 pb-32 flex content-center bg-darkgrey items-center justify-center min-h-screen-75">
                              <div class="top-0 absolute w-full h-full bg-center bg-cover">
                                    <span
                                          id="blackOverlay"
                                          class="w-full h-full opacity-75 bg-darkgrey"
                                    />
                              </div>
                              <div class="w-full flex px-4 items-center justify-center">
                                    <div class="items-center shadow-md rounded-lg w-full shadow-black pb-12 px-6 flex flex-wrap">
                                          <div class="w-full text-center">
                                                <div class="pt-4 text-white">
                                                      <h1 class="text-white font-semibold text-5xl">
                                                            Services
                                                      </h1>
                                                      <p class="mt-4 text-lg md:text-xl lg:text-2xl">
                                                            We are dedicated to
                                                            providing
                                                            comprehensive
                                                            support for Refugees
                                                            throughout their
                                                            journey.
                                                      </p>
                                                      <p class="mt-4 text-lg md:text-xl lg:text-2xl">
                                                            Our services are
                                                            designed to address
                                                            the unique needs of
                                                            newcomers at every
                                                            stage.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
                                    <svg
                                          class="absolute bottom-0 overflow-hidden"
                                          xmlns="http://www.w3.org/2000/svg"
                                          preserveAspectRatio="none"
                                          version="1.1"
                                          viewBox="0 0 2560 100"
                                          x="0"
                                          y="0"
                                    >
                                          <polygon
                                                class="text-blueGray-200 fill-current"
                                                points="2560 0 2560 100 0 100"
                                          />
                                    </svg>
                              </div>
                        </div>
        <CardImageFull item={item} />
    </div>
  )
}

export default Service