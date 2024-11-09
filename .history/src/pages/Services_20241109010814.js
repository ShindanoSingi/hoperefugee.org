import React from "react";
import { list, payment } from "../constants/Constants";
import Loader from "../components/Loader";
import CardImage from "../components/CardImage";
import Button from "../components/Button";

function Services() {
      return (
            <div>
                  <section class="relative  bg-blueGray-50">
                        <div class="relative pt-12 pb-32 flex content-center bg-darkgrey items-center justify-center min-h-screen-75">
                              <div class="top-0 absolute w-full h-full bg-center bg-cover">
                                    <span
                                          id=""
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
                                                <div className="text-white mt-10 flex justify-center">
                                                      <Button
                                                            type="primary"
                                                            text="DONATE"
                                                            border="white"
                                                            hoverColor="primary"
                                                            href={payment.link}
                                                      />
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
                        <section class=" bg-my_gray -mt-[5rem]">
                              <div class="px-4 pb-4">
                                    {list.length < 0
                                          ? <Loader />
                                          : <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                  {list.map((item, index) => {
                                                        return (
                                                              <div class=" w-full text-center">
                                                                    <CardImage
                                                                          item={
                                                                                item
                                                                          }
                                                                          key={
                                                                                index
                                                                          }
                                                                    />
                                                              </div>
                                                        );
                                                  })}
                                            </div>}
                              </div>
                        </section>
                  </section>
            </div>
      );
}

export default Services;
