import React from "react";
import { contacts } from "../constants/Constants";
import TeamCard from "../components/TeamCard";
import Loader from "../components/Loader";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

export default function Contacts() {
      console.log("contacts", contacts);

      return (
            // <div className="bg-gray-600 grid place-content-center p-4 lg: min-h-dvh overflow-scroll">

            <div className="bg-gray-600 min-h-screen flex flex-col items-center justify-center p-4">
                  <div>
                        <div className="flex flex-col text-my_white gap-4">
                              <div className="flex  items-center gap-4">
                                    {/* <a
                                    href="https://www.facebook.com/RefugeeHopeBridge/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    <img
                                          className="w-[5rem] h-[5rem]"
                                          src="/images/facebook.png"
                                          alt=""
                                    />
                              </a>
                              <a
                                    href="https://www.facebook.com/RefugeeHopeBridge/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    https://www.facebook.com/RefugeeHopeBridge/
                              </a> */}
                              </div>

                              {/* <a
                                    href="https://www.instagram.com/refugeehopebridge/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    <img
                                          className="w-[5rem] h-[5rem]"
                                          src="/images/instagram.png"
                                          alt=""
                                    />
                              </a> */}
                              {/* <a
                                    href="https://www.twitter.com/refugeehopebridge/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    <img
                                          className="w-[5rem] h-[5rem]"
                                          src="/images/x.png"
                                          alt=""
                                    />
                              </a> */}
                              <div className="flex items-center gap-4">
                                    <a
                                          href="https://www.twitter.com/refugeehopebridge/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                          <img
                                                className="w-[5rem] h-[5rem]"
                                                src="/images/gmail.png"
                                                alt=""
                                          />
                                    </a>
                                    <a
                                          href="https://www.twitter.com/refugeehopebridge/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-lg md:text-xl"
                                    >
                                          <span>Email us at:</span>
                                          <br />
                                          <span>shindano@hoperefugee.org</span>
                                    </a>
                              </div>

                              <div className="flex items-center gap-4">
                                    <a
                                          href="https://www.twitter.com/refugeehopebridge/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                          <img
                                                className="w-[5rem] h-[5rem]"
                                                src="/images/call.png"
                                                alt=""
                                          />
                                    </a>
                                    <a
                                          href="https://www.twitter.com/refugeehopebridge/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-lg md:text-xl"
                                    >
                                          <span>Call us at:</span>
                                          <br />
                                          <span>+1 (207) 713-3345</span>
                                    </a>
                              </div>
                        </div>
                  </div>

                  <h1 className="text-white text-4xl font-bold mt-10  mb-6">
                        Contact Us
                  </h1>

                  <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <div className="mb-4">
                              <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="name"
                              >
                                    Name
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                              />
                        </div>
                        <div className="mb-4">
                              <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                              >
                                    Email
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                              />
                        </div>
                        <div className="mb-4">
                              <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="message"
                              >
                                    Message
                              </label>
                              <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    placeholder="Your Message"
                                    rows="5"
                              />
                        </div>
                        <div className="flex items-center justify-between">
                              <button
                                    className="bg-[#3EA6FF] hover:bg-[#184690] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                              >
                                    Send
                              </button>
                        </div>
                  </form>
            </div>
      );
}