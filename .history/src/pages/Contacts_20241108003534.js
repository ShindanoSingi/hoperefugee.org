import React from "react";
import { contacts } from "../constants/Constants";
import TeamCard from "../components/TeamCard";
import Loader from "../components/Loader";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Contacts() {
      console.log("contacts", contacts);

      return (
        // <div className="bg-gray-600 grid place-content-center p-4 lg: min-h-dvh overflow-scroll">

    <div className="bg-darkgrey min-h-screen flex flex-col items-center justify-center p-4">

      <div>
        <div className="flex text-4xl text-primary gap-4">
          <a
            href="https://www.facebook.com/RefugeeHopeBridge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareFacebook />
          </a>
          <a
            href="https://www.instagram.com/refugeehopebridge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 w-8"
              src="/images/instagram.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.twitter.com/refugeehopebridge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 w-8"
              src="/images/twitter.png"
              alt="Twitter"
              />
              </a>
              </div>

      </div>

      <h1 className="text-white text-4xl font-bold mb-6">Contact Us</h1>

      <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            rows="5"
          ></textarea>
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

// export default ContactPage;

//   </div>
    //   );
// }
