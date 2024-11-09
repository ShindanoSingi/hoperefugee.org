import React, { useState } from "react";
import { contacts, payment } from "../constants/Constants";
import TeamCard from "../components/TeamCard";
import Loader from "../components/Loader";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import Button from "../components/Button";

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

            <div className="bg-gray-600 h-screen flex flex-col items-center justify-center px-4">
                  <div className="flex flex-col items-center">
                        <div className="flex flex-col  text-whitetext gap-4">
                              <h1 className="text-white text-4xl font-bold  mb-6">
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
                              <div className="flex items-center gap-4 cursor-pointer" onClick={e => {
                                                window.location.href =
                                                      "mailto:shindano@hoperefugee.org?";
                                                e.preventDefault();
                                          }}>
                                    <a

                                    >
                                          <img
                                                className="w-[5rem] h-[5rem]"
                                                src="/images/gmail.png"
                                                alt=""
                                          />
                                    </a>
                                    <a className="text-lg md:text-xl">
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
                                                <span className="text-lg italic text-bright md:text-xl">
                                                      83 College Street,
                                                      Lewiston, Maine 04240 on
                                                      Google Maps
                                                </span>
                                          </a>
                                    </div>
                              </div>

                              <div>
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
      );
}
