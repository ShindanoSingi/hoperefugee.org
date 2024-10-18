import React from "react";
import {list} from "../constants/List";

function Services() {
      return (
            <div>
                  <section class="relative  bg-blueGray-50">
                        <div class="relative pt-16 pb-32 flex content-center bg-gray items-center justify-center min-h-screen-75">
                              <div class="absolute top-0 w-full h-full bg-center bg-cover">
                                    <span
                                          id="blackOverlay"
                                          class="w-full h-full absolute opacity-75 bg-black"
                                    />
                              </div>
                              <div class="container relative mx-auto">
                                    <div class="items-center flex flex-wrap">
                                          <div class="w-full lg:w-full px-4 text-center">
                                                <div class=" text-white">
                                                      <h1 class="text-white font-semibold text-5xl">
                                                            Services
                                                      </h1>
                                                      <p class="mt-4 text-lg md:text-xl text-blueGray-200">
                                                            We are dedicated to
                                                            providing
                                                            comprehensive
                                                            support for Refugees
                                                            throughout their
                                                            journey.
                                                      </p>
                                                      <p class="mt-4 text-lg md:text-xl text-blueGray-200">
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
                        <section class="pb-10 bg-blueGray-200 -mt-24">
                              <div class="container mx-auto px-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div class="lg:pt-12 pt-6 w-full text-center">
                                                <div class="relative flex w-full flex-col break-words bg-white w-full  shadow-lg rounded-lg">
                                                      <div class="px-2 py-2">
                                                            <div>
                                                                  <img
                                                                        src="/images/apartment.jpg"
                                                                        alt=""
                                                                  />
                                                            </div>
                                                            <h1 class="text-xl mt-2 font-bold md:text-3xl">
                                                                  Housing
                                                            </h1>
                                                            <h2 class="text-xl md:text-2xl py-2">
                                                                  We assist in
                                                                  finding safe
                                                                  and affordable
                                                                  housing
                                                            </h2>
                                                            <p class="mt-2 mb-4 md:text-xl text-blueGray-500">
                                                            We understand how crucial a stable home is. Our team tirelessly helps refugees find safe, affordable, and suitable housing tailored to their needs.
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* <div class="lg:pt-4 pt-6 w-full text-center">
                                                <div class="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded-lg">
                                                      <div class="px-2 py-2">
                                                            <div>
                                                                  <img
                                                                        src="/images/job.jpg"
                                                                        alt=""
                                                                  />
                                                            </div>
                                                            <h1 class="text-xl mt-2 font-bold md:text-3xl">
                                                                  Employment
                                                            </h1>
                                                            <h2 class="text-xl md:text-2xl py-2">
                                                                  Guidance in
                                                                  securing job
                                                                  opportunities
                                                            </h2>
                                                            <p class="mt-2 mb-4 md:text-xl text-blueGray-500">
                                                            We support refugees in finding job opportunities, applying for positions, and crafting resumes. Our personalized guidance ensures employment opportunities align with their skills and aspirations.
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                          <div class="lg:pt-12 pt-6 w-full text-center">
                                                <div class="relative flex flex-col break-words bg-white w-full  shadow-lg rounded-lg">
                                                      <div class="px-2 py-2 ">
                                                            <div>
                                                                  <img
                                                                        src="/images/education.jpg"
                                                                        alt=""
                                                                  />
                                                            </div>
                                                            <h1 class="text-xl mt-2 font-bold md:text-3xl">
                                                                  Education
                                                            </h1>
                                                            <h2 class="text-xl md:text-2xl py-2">
                                                                  We support in
                                                                  accessing
                                                                  educational
                                                                  resources and
                                                                  programs
                                                            </h2>
                                                            <p class="mt-2 mb-4 md:text-xl text-blueGray-500">
                                                                  Education is
                                                                  key to
                                                                  integration
                                                                  and personal
                                                                  growth. We
                                                                  offer
                                                                  comprehensive
                                                                  support to
                                                                  help refugees
                                                                  access
                                                                  educational
                                                                  resources and
                                                                  programs,
                                                                  ensuring they
                                                                  have the tools
                                                                  they need to
                                                                  succeed.
                                                            </p>
                                                      </div>
                                                </div>
                                          </div> */}
                                          {/* <div class="lg:pt-12 pt-6 w-full text-center">
                                                <div class="relative flex flex-col break-words bg-white w-full  shadow-lg rounded-lg">
                                                      <div class="px-2 py-2 ">
                                                            <div>
                                                                  <img
                                                                        src="/images/education.jpg"
                                                                        alt=""
                                                                  />
                                                            </div>
                                                            <h1 class="text-xl mt-2 font-bold md:text-3xl">
                                                                  Education
                                                            </h1>
                                                            <h2 class="text-xl md:text-2xl py-2">
                                                                  We support in
                                                                  accessing
                                                                  educational
                                                                  resources and
                                                                  programs
                                                            </h2>
                                                            <p class="mt-2 mb-4 md:text-xl text-blueGray-500">
                                                                  Education is
                                                                  key to
                                                                  integration
                                                                  and personal
                                                                  growth. We
                                                                  offer
                                                                  comprehensive
                                                                  support to
                                                                  help refugees
                                                                  access
                                                                  educational
                                                                  resources and
                                                                  programs,
                                                                  ensuring they
                                                                  have the tools
                                                                  they need to
                                                                  succeed.
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                          <div class="lg:pt-12 pt-6 w-full text-center">
                                                <div class="relative flex flex-col break-words bg-white w-full  shadow-lg rounded-lg">
                                                      <div class="px-2 py-2 ">
                                                            <div>
                                                                  <img
                                                                        src="/images/education.jpg"
                                                                        alt=""
                                                                  />
                                                            </div>
                                                            <h1 class="text-xl mt-2 font-bold md:text-3xl">
                                                                  Education
                                                            </h1>
                                                            <h2 class="text-xl md:text-2xl py-2">
                                                                  We support in
                                                                  accessing
                                                                  educational
                                                                  resources and
                                                                  programs
                                                            </h2>
                                                            <p class="mt-2 mb-4 md:text-xl text-blueGray-500">
                                                                  Education is
                                                                  key to
                                                                  integration
                                                                  and personal
                                                                  growth. We
                                                                  offer
                                                                  comprehensive
                                                                  support to
                                                                  help refugees
                                                                  access
                                                                  educational
                                                                  resources and
                                                                  programs,
                                                                  ensuring they
                                                                  have the tools
                                                                  they need to
                                                                  succeed.
                                                            </p>
                                                      </div>
                                                </div>
                                          </div> */}
                                    </div>
                              </div>
                        </section>
                  </section>
            </div>
      );
}

export default Services;
