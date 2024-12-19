
import React from "react";
import {
      FaFacebookSquare,
      FaInstagramSquare,
      FaTwitterSquare
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "./Button";
import { payment } from "../constants/Constants";

function Footer() {
      return (
            <footer class="bg-black text-white">
                <div className="flex flex-col items-center navline h-1"></div>
                  <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                              <div className="flex flex-col gap-4 items-center">
                                <Link to='/'>
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
                                                Refugee Hope Bridge
                                          </strong>
                                    </div>
</Link>
                                    <p class="text-lg mt-2 md:text-xl">
                                          Bringing Hope to Refugees' Lives.
                                    </p>
                                    <div class="flex mt-8 items-center space-x-6 text-white">
                                        <h1 className="text-2xl">Email Us:</h1>
                                          <MdEmail className="text-white hover:text-bright w-10 h-10" onClick={(e)=> {
                                             window.location.href = "mailto:shindano@hoperefugee.org?";
                                             e.preventDefault();
                                          }} />
                                          {/* <FaFacebookSquare className="text-white hover:text-bright w-10 h-10" />
                                          <FaInstagramSquare className="text-white hover:text-bright w-10 h-10" />
                                          <FaTwitterSquare className="text-white hover:text-bright w-10 h-10" /> */}
                                    </div>
                              </div>
                              <div class="grid grid-cols-1 gap-8 text-lg md:text-xl lg:col-span-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                                    <div>
                                          <p class="text-xl font-extrabold">Company</p>
                                          <nav class="flex flex-col mt-4 space-y-2 text-lg text-white">
                                            <Link to={'/about'} className="hover:opacity-75">
                                            <p>About</p>
                                            </Link>
                                            <Link to={'/team'} className="hover:opacity-75">
                                            <p>Meet the team</p>
                                            </Link>
                                            <Link to={'/about'} className="hover:opacity-75">
                                            <p>History</p>
                                            </Link>
                                          </nav>
                                    </div>
                                    <div>
                                          <p class="text-xl font-extrabold">Services</p>
                                          <nav class="flex flex-col mt-4 space-y-2  text-lg text-white">
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
                                          <p class="text-xl font-extrabold">
                                                Helpful Links
                                          </p>
                                          <nav class="flex flex-col mt-4 space-y-2  text-lg text-white">

                                                <Link to='/contacts' class="hover:opacity-75">
                                                Contact
                                                </Link>
                                          </nav>
                                    </div>
                              </div>
                        </div>
                        <div className="flex flex-col items-center mt-10 gap-4">
                            <Button type="primary" text='DONATE' border='white' hoverColor='primary' href={payment.link}/>
                        </div>
                        <p class="mt-8 text-lg md:text-xl text-white text-center">
                              © 2024 Refugee Hope Bridge, Shindano SoftCom, All rights reserved
                        </p>
                  </div>
            </footer>
      );
}

export default Footer;
