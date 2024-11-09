import React, { useState } from "react";
import { contacts } from "../constants/Constants";
import TeamCard from "../components/TeamCard";
import Loader from "../components/Loader";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

export default function Contacts() {
      console.log("contacts", contacts);

    //   const [formData, setFormData] = useState({
    //         name: "",
    //         email: "",
    //         message: ""
    //   });
    //   const handleChange = e => {
    //         const { name, value } = e.target;
    //         setFormData(prevData => ({ ...prevData, [name]: value }));
    //   };
    //   const handleSubmit = async e => {
    //         e.preventDefault();

    //         const response = await fetch("/api/sendEmail", {
    //               method: "POST",
    //               headers: { "Content-Type": "application/json" },
    //               body: JSON.stringify(formData)
    //         });
    //         if (response.ok) {
    //               alert("Message sent successfully!");
    //         } else {
    //               alert("Failed to send message.");
    //         }
    //   };

      return (
            // <div className="bg-gray-600 grid place-content-center p-4 lg: min-h-dvh overflow-scroll">

            <div className="bg-gray-600 h-screen flex flex-col items-center justify-center p-4">
                  <div>
                        <div className="flex flex-col  text-whitetext gap-4">
                        <h1 className="text-white text-4xl font-bold mt-10  mb-6">
                                    Contact Us
                                 </h1>
                              {/* <div className="flex  items-center gap-4"> */}
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
                              {/* </div> */}

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
                                    <a>
                                          <img
                                                className="w-[5rem] h-[5rem]"
                                                src="/images/gmail.png"
                                                alt=""
                                                onClick={(e)=> {
                                                    window.location.href = "mailto:shindano@hoperefugee.org?";
                                                    e.preventDefault()
                                                }
                                                }
                                          />
                                    </a>
                                    <a
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

                              <div>
                                 <h1 className="text-white text-4xl font-bold mt-10  mb-6">
                                    Our Service Address
                                 </h1>
                                 <div className="flex items-center gap-4">
                                    <a
                                          href="https://www.twitter.com/refugeehopebridge/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                          <img
                                                className="w-[5rem] h-[5rem]"
                                                src="/images/location.png"
                                                alt=""
                                          />
                                    </a>
                                    <a
                                          href="https://www.google.com/maps?q=83+College+Street,+Lewiston,+Maine+04240"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-lg md:text-xl"
                                    >
                                          <span>Office Address:</span>
                                          <br />
                                          <span className="text-lg italic text-bright md:text-xl">83 College Street, Lewiston, Maine 04240 on Google Maps</span>
                                    </a>
                              </div>

                              </div>
                        </div>
                  </div>

                  {/* s */}

                  {/* <form
                        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
                        onSubmit={handleSubmit}
                  >
                        <div className="mb-4">
                              <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="name"
                              >
                                    {" "}Name{" "}
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                              />
                        </div>
                        <div className="mb-4">
                              <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                              >
                                    {" "}Email{" "}
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                              />
                        </div>
                        <div className="mb-4">
                              <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="message"
                              >
                                    {" "}Message{" "}
                              </label>
                              <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="5"
                              />
                        </div>
                        <div className="flex items-center justify-between">
                              <button
                                    className="bg-[#3EA6FF] hover:bg-[#184690] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                              >
                                    {" "}Send
                              </button>
                        </div>
                  </form> */}
            </div>
      );
}
