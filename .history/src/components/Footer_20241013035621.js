import React from "react";
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
      return (
            <footer class="bg-primary text-white">
                  <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                              <div className="flex flex-col gap-4 items-center">
                                    <div className="flex items-center gap-4">
                                          <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center">
                                                <img
                                                      src="/images/logo.png"
                                                      class=" h-auto sm:h-auto"
                                                      bg-white
                                                      alt="logo"
                                                />
                                          </div>
                                          <strong className="text-xl md:text-2xl">Refuge Hope Bridge</strong>
                                    </div>

                                    <p class="text-lg md:text-xl">
                                          Bringing Hope to Refugees' Lives.
                                    </p>
                                    <div class="flex mt-8 space-x-6 text-white">
                                    <FaFacebookSquare className="text-white w-10 h-10" />
                                         <FaInstagramSquare className="text-white w-10 h-10"/>
                                         <FaTwitterSquare className="text-white w-10 h-10"/>
                                         <MdEmail />
                                          <a
                                                class="hover:opacity-75"
                                                href
                                                target="_blank"
                                                rel="noreferrer"
                                          >
                                                <span class="sr-only">
                                                      {" "}
                                                      Dribbble{" "}
                                                </span>
                                                <svg
                                                      class="w-6 h-6"
                                                      fill="currentColor"
                                                      viewBox="0 0 24 24"
                                                      aria-hidden="true"
                                                >
                                                      <path
                                                            fillRule="evenodd"
                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                            clipRule="evenodd"
                                                      />
                                                </svg>
                                          </a>
                                    </div>
                              </div>
                              <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                                    <div>
                                          <p class="font-medium">Company</p>
                                          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      About{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Meet the Team{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      History{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Careers{" "}
                                                </a>
                                          </nav>
                                    </div>
                                    <div>
                                          <p class="font-medium">Services</p>
                                          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      1on1 Coaching{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Company Review{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Accounts Review{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      HR Consulting{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      SEO Optimisation{" "}
                                                </a>
                                          </nav>
                                    </div>
                                    <div>
                                          <p class="font-medium">
                                                Helpful Links
                                          </p>
                                          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Contact{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      FAQs{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Live Chat{" "}
                                                </a>
                                          </nav>
                                    </div>
                                    <div>
                                          <p class="font-medium">Legal</p>
                                          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Privacy Policy{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Terms &amp; Conditions{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Returns Policy{" "}
                                                </a>
                                                <a
                                                      class="hover:opacity-75"
                                                      href
                                                >
                                                      {" "}
                                                      Accessibility{" "}
                                                </a>
                                          </nav>
                                    </div>
                              </div>
                        </div>
                        <p class="mt-8 text-xs text-gray-800">
                              © 2022 Comany Name
                        </p>
                  </div>
            </footer>
      );
}

export default Footer;
