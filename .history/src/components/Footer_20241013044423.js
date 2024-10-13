import React from "react";
import {
      FaFacebookSquare,
      FaInstagramSquare,
      FaTwitterSquare
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

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
                                          <strong className="text-xl md:text-2xl">
                                                Refuge Hope Bridge
                                          </strong>
                                    </div>

                                    <p class="text-lg md:text-xl">
                                          Bringing Hope to Refugees' Lives.
                                    </p>
                                    <div class="flex mt-8 space-x-6 text-white">
                                          <MdEmail className="text-white hover:text-black w-10 h-10" onClick={(e)=> {
                                             window.location.href = "mailto:max.shindano.singi@hoperefugee.org?";
                                             e.preventDefault();
                                          }} />
                                          <FaFacebookSquare className="text-white hover:text-black w-10 h-10" />
                                          <FaInstagramSquare className="text-white hover:text-black w-10 h-10" />
                                          <FaTwitterSquare className="text-white hover:text-black w-10 h-10" />
                                    </div>
                              </div>
                              <div class="grid grid-cols-2 gap-8 text-lg md:text-xl lg:col-span-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    <div>
                                          <p class="font-medium">Company</p>
                                          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                            <Link to={'/about'} className="hover:opacity-75">
                                            <p>About</p>
                                            </Link>
                                            <Link to={'/team'} className="hover:opacity-75">
                                            <p>Meet the team</p>
                                            </Link>
                                            <Link to={'/history'} className="hover:opacity-75">
                                            <p>History</p>
                                            </Link>
                                          </nav>
                                    </div>
                                    <div>
                                          <p class="font-medium">Services</p>
                                          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                            <Link to={'#'} className="hover:opacity-75">
                                            <p>Help with paperwork</p>
                                            </Link>
                                            <Link to={'#'} className="hover:opacity-75">
                                            <p>Interpretation</p>
                                            </Link>
                                            <Link to={'#'} className="hover:opacity-75">
                                            <p>Translation</p>
                                            </Link>
                                            <Link to={'#'} className="hover:opacity-75">
                                            <p>Job application</p></Link>
                                            <Link to={'#'} className="hover:opacity-75">
                                            <p>Unemploy. Application</p>
                                            </Link>
                                            <Link to={'#'} className="hover:opacity-75">
                                            <p>Unemploy. Weekly Reporting</p>
                                            </Link>
                                            <Link to={'#'} className="hover:opacity-75">
                                            <p>DHHS Representation</p>
                                            </Link>
                                            <Link to={'#'} className="hover:opacity-75">
                                            <p>Transportation to Appointments</p>
                                            </Link>
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
                                    {/* <div>
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
                                    </div> */}
                              </div>
                        </div>
                        <p class="mt-8 text-xs text-gray-800">
                              © 2024 Refuge Hope Bridge
                        </p>
                  </div>
            </footer>
      );
}

export default Footer;
